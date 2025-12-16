// Room Manager - Handles all room operations
import { v4 as uuidv4 } from 'uuid';
import {
    Room, RoomInfo, Team, TeamInfo, User, GameSettings, DEFAULT_SETTINGS,
    PlayerOnBlock, PlayerOnBlockInfo, Bid, AuctionedPlayer, getBidIncrement
} from '../types/game';
import { iplPlayers, IPLPlayer, shufflePlayers } from '../data/players';
import { initialTeams } from '../data/teams';
import { RoomModel } from '../models/Room';
import { UserModel } from '../models/User';

// Helper to convert Mongo Room doc to Application Room object
// The main difference is teams: Array vs Map
function docToRoom(doc: any): Room {
    const room = doc.toObject();

    // Convert teams array back to Map
    const teamsMap = new Map<string, Team>();
    if (Array.isArray(room.teams)) {
        room.teams.forEach((t: Team) => teamsMap.set(t.id, t));
    }
    room.teams = teamsMap;

    // Restore timerInterval (cannot be stored in DB, is null on load)
    room.timerInterval = null;

    // Rename _id to id
    room.id = room._id.toString();
    delete room._id;
    delete room.__v;

    return room as Room;
}

// User Management methods
export async function createUser(socketId: string, name: string): Promise<User> {
    const userId = uuidv4();
    const user = await UserModel.create({
        _id: userId,
        socketId,
        name,
        roomCode: null,
        teamId: null,
        isHost: false,
        isSpectator: false,
        connectedAt: new Date(),
    });
    const userObj = user.toObject() as any;
    userObj.id = userObj._id.toString();
    return userObj as User;
}

export async function getUserBySocketId(socketId: string): Promise<User | null> {
    const doc = await UserModel.findOne({ socketId });
    if (!doc) return null;
    const userObj = doc.toObject() as any;
    userObj.id = userObj._id.toString();
    return userObj as User;
}

export async function getUserById(userId: string): Promise<User | null> {
    const doc = await UserModel.findById(userId);
    if (!doc) return null;
    const userObj = doc.toObject() as any;
    userObj.id = userObj._id.toString();
    return userObj as User;
}

export async function removeUser(userId: string): Promise<void> {
    await UserModel.findByIdAndDelete(userId);
}

export async function updateUserSocket(userId: string, newSocketId: string): Promise<void> {
    await UserModel.findByIdAndUpdate(userId, { socketId: newSocketId });
}


// Room Management
function generateRoomCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

export async function createRoom(hostId: string, settings: Partial<GameSettings> = {}): Promise<Room> {
    let code = generateRoomCode();
    // Ensure uniqueness
    while (await RoomModel.findOne({ code })) {
        code = generateRoomCode();
    }

    const roomId = uuidv4();

    // Initialize with fixed teams
    const initialTeamsList = initialTeams.map(t => ({
        ...t,
        ownerId: '', // Unowned initially
        isReady: false,
        squad: t.squad ? [...t.squad] : [] // Ensure squad exists
    }));

    const roomDoc = await RoomModel.create({
        _id: roomId,
        code,
        hostId,
        status: 'lobby',
        settings: { ...DEFAULT_SETTINGS, ...settings },
        teams: initialTeamsList,
        playerQueue: shufflePlayers([...iplPlayers]),
        soldPlayers: [],
        unsoldPlayers: [],
        currentPlayerOnBlock: null,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // Update host user
    await UserModel.findByIdAndUpdate(hostId, {
        roomCode: code,
        isHost: true
    });

    return docToRoom(roomDoc);
}

export async function getRoomByCode(code: string): Promise<Room | null> {
    const doc = await RoomModel.findOne({ code });
    return doc ? docToRoom(doc) : null;
}

export async function getRoomById(roomId: string): Promise<Room | null> {
    const doc = await RoomModel.findById(roomId);
    return doc ? docToRoom(doc) : null;
}

export async function deleteRoom(roomId: string): Promise<void> {
    await RoomModel.findByIdAndDelete(roomId);
}

// Team Management - Now "Claim Team"
export async function createTeam(roomCode: string, userId: string, teamIdOrName: string, color: string): Promise<Team | null> {
    const room = await getRoomByCode(roomCode);
    if (!room) return null;

    // Find the team by ID first, then loose name match
    let team = room.teams.get(teamIdOrName);

    if (!team) {
        // Try finding by name
        team = Array.from(room.teams.values()).find(t =>
            t.name.toLowerCase() === teamIdOrName.toLowerCase() ||
            t.id === teamIdOrName.toLowerCase()
        );
    }

    if (!team) return null;

    // Check if taken
    if (team.ownerId && team.ownerId !== userId) {
        return null; // Already taken
    }

    // Assign owner
    team.ownerId = userId;
    // team.color = color; // User can't change color of official teams

    // Persist changes
    // Since we manipulated the Map, we need to convert back to array for partial update or just save the whole room
    // For simplicity, we'll convert map to array and update
    const updatedTeams = Array.from(room.teams.values());
    await RoomModel.findOneAndUpdate({ code: roomCode }, {
        teams: updatedTeams,
        updatedAt: new Date()
    });

    // Update user
    await UserModel.findByIdAndUpdate(userId, {
        teamId: team.id,
        roomCode: roomCode
    });

    return team;
}

export async function getTeam(roomCode: string, teamId: string): Promise<Team | undefined> {
    const room = await getRoomByCode(roomCode);
    return room?.teams.get(teamId);
}

export async function setTeamReady(roomCode: string, teamId: string, ready: boolean): Promise<boolean> {
    const room = await getRoomByCode(roomCode);
    if (!room) return false;

    const team = room.teams.get(teamId);
    if (team) {
        team.isReady = ready;
        const updatedTeams = Array.from(room.teams.values());
        await RoomModel.findOneAndUpdate({ code: roomCode }, { teams: updatedTeams });
        return true;
    }
    return false;
}

export async function removeTeamFromRoom(roomCode: string, teamId: string): Promise<void> {
    const room = await getRoomByCode(roomCode);
    if (room) {
        room.teams.delete(teamId);
        const updatedTeams = Array.from(room.teams.values());
        await RoomModel.findOneAndUpdate({ code: roomCode }, {
            teams: updatedTeams,
            updatedAt: new Date()
        });
    }
}

// Auction Logic
export async function startAuction(roomCode: string): Promise<boolean> {
    const room = await getRoomByCode(roomCode);
    if (!room || room.status !== 'lobby') return false;

    // Check strict start conditions: enough players and everyone ready
    const occupiedTeams = Array.from(room.teams.values()).filter(t => t.ownerId);
    if (occupiedTeams.length < 2) return false;

    const updatedRoomInit = await RoomModel.findOneAndUpdate(
        { code: roomCode },
        { status: 'live', updatedAt: new Date() },
        { new: true }
    );

    if (!updatedRoomInit) return false;

    // Put first player on block
    // We need to fetch again or use the returned doc? 
    // putNextPlayerOnBlock expects a Room object. 
    // Let's rely on putNextPlayerOnBlock to handle persistence or do it here.
    // Actually best to re-fetch freshly or pass the updated doc converted.
    const freshRoom = docToRoom(updatedRoomInit);
    return await putNextPlayerOnBlock(freshRoom);
}

async function putNextPlayerOnBlock(room: Room): Promise<boolean> {
    if (room.playerQueue.length === 0) {
        await RoomModel.findOneAndUpdate(
            { code: room.code },
            { status: 'completed', currentPlayerOnBlock: null }
        );
        return false;
    }

    const player = room.playerQueue.shift()!;
    const now = new Date();
    const timerEnd = new Date(now.getTime() + room.settings.timerDuration * 1000);

    const newPlayerOnBlock = {
        player,
        currentBid: player.basePrice,
        currentBidderId: null,
        currentTeamId: null,
        bids: [],
        startTime: now,
        timerEndTime: timerEnd,
    };

    // Update DB: pop from queue, set current player
    await RoomModel.findOneAndUpdate({ code: room.code }, {
        playerQueue: room.playerQueue, // Queue is already shifted in memory
        currentPlayerOnBlock: newPlayerOnBlock,
        updatedAt: new Date()
    });

    // Update local object reference if needed by caller, though caller usually refetches
    room.currentPlayerOnBlock = newPlayerOnBlock as any;

    return true;
}

export async function placeBid(roomCode: string, userId: string, teamId: string): Promise<{ success: boolean; error?: string; newBid?: number }> {
    // We need strict consistency here, so atomic updates are best. 
    // However, logic is complex (checks budget etc). 
    // We will fetch, check, and save.
    // Ideally we use specialized Mongo operators ($inc etc) but full save is easier for migration.

    const room = await getRoomByCode(roomCode);
    if (!room || room.status !== 'live' || !room.currentPlayerOnBlock) {
        return { success: false, error: 'Auction not active' };
    }

    const team = room.teams.get(teamId);
    if (!team) {
        return { success: false, error: 'Team not found' };
    }

    const playerOnBlock = room.currentPlayerOnBlock;

    // Calculate new bid amount
    let bidAmount: number;
    if (playerOnBlock.currentBidderId === null) {
        // First bid - start at base price
        bidAmount = playerOnBlock.player.basePrice;
    } else {
        // Increment from current bid
        bidAmount = playerOnBlock.currentBid + getBidIncrement(playerOnBlock.currentBid);
    }

    // Validation checks
    if (playerOnBlock.currentTeamId === teamId) {
        return { success: false, error: 'You already have the highest bid' };
    }

    const remainingBudget = team.budget - team.spent;
    if (bidAmount > remainingBudget) {
        return { success: false, error: 'Insufficient budget' };
    }

    // Check squad size
    if (team.squad.length >= room.settings.squadSize) {
        return { success: false, error: 'Squad is full' };
    }

    // Check overseas limit
    if (playerOnBlock.player.isOverseas) {
        const overseasCount = team.squad.filter(p => p.player.isOverseas).length;
        if (overseasCount >= room.settings.maxOverseas) {
            return { success: false, error: 'Overseas player limit reached' };
        }
    }

    // Place the bid
    const bid: Bid = {
        id: uuidv4(),
        playerId: playerOnBlock.player.id,
        bidderId: userId,
        teamId,
        amount: bidAmount,
        timestamp: new Date(),
    };

    playerOnBlock.bids.push(bid);
    playerOnBlock.currentBid = bidAmount;
    playerOnBlock.currentBidderId = userId;
    playerOnBlock.currentTeamId = teamId;

    // Reset timer
    playerOnBlock.timerEndTime = new Date(Date.now() + room.settings.timerDuration * 1000);

    // Save ALL changes
    // Note: room.teams is a Map, so we modify it in memory but need to serialize it for Mongo
    // BUT we didn't modify team object itself deeply? oh wait, we didn't modify team stats yet, only playerOnBlock

    await RoomModel.findOneAndUpdate({ code: roomCode }, {
        currentPlayerOnBlock: playerOnBlock,
        updatedAt: new Date()
    });

    return { success: true, newBid: bidAmount };
}

export async function sellCurrentPlayer(room: Room): Promise<{ sold: boolean; player: IPLPlayer; team?: Team; price?: number }> {
    // Note: The room object passed here might be stale if we are not careful. 
    // It's safer to re-fetch strictly, but for timer loop (the caller), it usually has a ref.
    // However, in async world, better to fetch.
    const freshRoom = await getRoomByCode(room.code);
    if (!freshRoom || !freshRoom.currentPlayerOnBlock) {
        return { sold: false, player: room.playerQueue[0] || ({} as IPLPlayer) };
    }
    room = freshRoom; // Use fresh data

    const playerOnBlock = room.currentPlayerOnBlock!;
    const player = playerOnBlock.player;

    if (playerOnBlock.currentTeamId) {
        // Player sold
        const team = room.teams.get(playerOnBlock.currentTeamId)!;
        const auctionedPlayer: AuctionedPlayer = {
            player,
            soldPrice: playerOnBlock.currentBid,
            soldAt: new Date(),
        };

        team.squad.push(auctionedPlayer);
        team.spent += playerOnBlock.currentBid;
        room.soldPlayers.push(auctionedPlayer);

        // Persist
        const updatedTeams = Array.from(room.teams.values());
        await RoomModel.findOneAndUpdate({ code: room.code }, {
            teams: updatedTeams,
            soldPlayers: room.soldPlayers,
            updatedAt: new Date()
        });

        return { sold: true, player, team, price: playerOnBlock.currentBid };
    } else {
        // Player unsold
        room.unsoldPlayers.push(player);

        await RoomModel.findOneAndUpdate({ code: room.code }, {
            unsoldPlayers: room.unsoldPlayers,
            updatedAt: new Date()
        });

        return { sold: false, player };
    }
}

export async function skipCurrentPlayer(roomCode: string): Promise<boolean> {
    const room = await getRoomByCode(roomCode);
    if (!room || !room.currentPlayerOnBlock) return false;

    // Push current to unsold
    room.unsoldPlayers.push(room.currentPlayerOnBlock!.player);

    // Save unsold update first or let putNext handle it?
    // putNext does not handle 'unsoldPlayers' array of the previous guy.
    // So we must save here or pass crafted object.

    await RoomModel.findOneAndUpdate({ code: roomCode }, {
        unsoldPlayers: room.unsoldPlayers
    });

    return await putNextPlayerOnBlock(room);
}

export async function pauseAuction(roomCode: string): Promise<boolean> {
    const res = await RoomModel.findOneAndUpdate({ code: roomCode, status: 'live' }, {
        status: 'paused',
        updatedAt: new Date()
    });
    return !!res;
}

export async function resumeAuction(roomCode: string): Promise<boolean> {
    const room = await getRoomByCode(roomCode);
    if (!room || room.status !== 'paused') return false;

    // Reset timer
    let newTimerEnd = null;
    if (room.currentPlayerOnBlock) {
        newTimerEnd = new Date(Date.now() + room.settings.timerDuration * 1000);
        room.currentPlayerOnBlock!.timerEndTime = newTimerEnd;
    }

    await RoomModel.findOneAndUpdate({ code: roomCode }, {
        status: 'live',
        currentPlayerOnBlock: room.currentPlayerOnBlock,
        updatedAt: new Date()
    });

    return true;
}

// Conversion to client-safe types
export function toRoomInfo(room: Room): RoomInfo {
    const teams: TeamInfo[] = Array.from(room.teams.values()).map(toTeamInfo);

    return {
        id: room.id,
        code: room.code,
        hostId: room.hostId,
        status: room.status,
        settings: room.settings,
        teams,
        currentPlayerOnBlock: room.currentPlayerOnBlock ? toPlayerOnBlockInfo(room) : null,
        playersRemaining: room.playerQueue.length,
        soldPlayersCount: room.soldPlayers.length,
        unsoldPlayersCount: room.unsoldPlayers.length,
    };
}

export function toTeamInfo(team: Team): TeamInfo {
    return {
        id: team.id,
        name: team.name,
        color: team.color,
        ownerId: team.ownerId,
        budget: team.budget,
        spent: team.spent,
        squadCount: team.squad.length,
        overseasCount: team.squad.filter(p => p.player.isOverseas).length,
        squad: team.squad,
        isReady: team.isReady,
    };
}

export function toPlayerOnBlockInfo(room: Room): PlayerOnBlockInfo | null {
    const pob = room.currentPlayerOnBlock;
    if (!pob) return null;

    let currentTeamName: string | null = null;
    if (pob.currentTeamId) {
        const team = room.teams.get(pob.currentTeamId);
        currentTeamName = team?.name || null;
    }

    const timeRemaining = Math.max(0, Math.floor((pob.timerEndTime.getTime() - Date.now()) / 1000));

    return {
        player: pob.player,
        currentBid: pob.currentBid,
        currentBidderId: pob.currentBidderId,
        currentTeamId: pob.currentTeamId,
        currentTeamName,
        bidCount: pob.bids.length,
        timeRemaining,
    };
}

export async function advanceToNextPlayer(room: Room): Promise<boolean> {
    return await putNextPlayerOnBlock(room);
}

export async function updateRoomSettings(roomCode: string, settings: Partial<GameSettings>): Promise<boolean> {
    const res = await RoomModel.findOneAndUpdate({ code: roomCode, status: 'lobby' }, {
        $set: {
            // We need to construct strict set fields to avoid overwriting nested if we were using dot notation,
            // but here we replace specific fields in the settings object.
            // Since settings is a nested object, $set: { "settings.budgetPerPlayer": ... } is better.
            // But for simplicity, we can merge in JS and save.
        }
    });

    // Easier: fetch, merge, save
    const room = await getRoomByCode(roomCode);
    if (!room || room.status !== 'lobby') return false;

    room.settings = { ...room.settings, ...settings };

    await RoomModel.findOneAndUpdate({ code: roomCode }, {
        settings: room.settings,
        updatedAt: new Date()
    });

    return true;
}

export async function getAllTeams(roomCode: string): Promise<Team[]> {
    const room = await getRoomByCode(roomCode);
    if (!room) return [];
    return Array.from(room.teams.values());
}

export async function areAllTeamsReady(roomCode: string): Promise<boolean> {
    const room = await getRoomByCode(roomCode);
    if (!room) return false;

    const occupiedTeams = Array.from(room.teams.values()).filter(t => t.ownerId);
    if (occupiedTeams.length < 2) return false;

    return occupiedTeams.every(t => t.isReady);
}


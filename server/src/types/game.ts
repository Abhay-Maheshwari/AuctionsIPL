// Game Types and Interfaces
import { IPLPlayer } from '../data/players';

export type AuctionSpeed = 'slow' | 'normal' | 'fast';
export type RoomStatus = 'lobby' | 'live' | 'paused' | 'completed';

export interface GameSettings {
    maxPlayers: number;
    budgetPerPlayer: number; // in lakhs
    squadSize: number;
    maxOverseas: number;
    auctionSpeed: AuctionSpeed;
    timerDuration: number; // in seconds
    minBatsmen: number;
    minBowlers: number;
    minAllRounders: number;
    minWicketKeepers: number;
}

export const DEFAULT_SETTINGS: GameSettings = {
    maxPlayers: 10,
    budgetPerPlayer: 10000, // 100 crores = 10000 lakhs
    squadSize: 30,
    maxOverseas: 8,
    auctionSpeed: 'normal',
    timerDuration: 20,
    minBatsmen: 3,
    minBowlers: 4,
    minAllRounders: 2,
    minWicketKeepers: 1,
};

export interface Team {
    id: string;
    name: string;
    color: string;
    ownerId: string;
    budget: number;
    spent: number;
    squad: AuctionedPlayer[];
    isReady: boolean;
}

export interface AuctionedPlayer {
    player: IPLPlayer;
    soldPrice: number;
    soldAt: Date;
}

export interface Bid {
    id: string;
    playerId: string;
    bidderId: string;
    teamId: string;
    amount: number;
    timestamp: Date;
}

export interface PlayerOnBlock {
    player: IPLPlayer;
    currentBid: number;
    currentBidderId: string | null;
    currentTeamId: string | null;
    bids: Bid[];
    startTime: Date;
    timerEndTime: Date;
}

export interface Room {
    id: string;
    code: string;
    hostId: string;
    status: RoomStatus;
    settings: GameSettings;
    teams: Map<string, Team>;
    playerQueue: IPLPlayer[];
    soldPlayers: AuctionedPlayer[];
    unsoldPlayers: IPLPlayer[];
    currentPlayerOnBlock: PlayerOnBlock | null;
    timerInterval: NodeJS.Timeout | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    socketId: string;
    name: string;
    roomCode: string | null;
    teamId: string | null;
    isHost: boolean;
    isSpectator: boolean;
    connectedAt: Date;
}

// Client-safe versions (without server internals)
export interface RoomInfo {
    id: string;
    code: string;
    hostId: string;
    status: RoomStatus;
    settings: GameSettings;
    teams: TeamInfo[];
    currentPlayerOnBlock: PlayerOnBlockInfo | null;
    playersRemaining: number;
    soldPlayersCount: number;
    unsoldPlayersCount: number;
}

export interface TeamInfo {
    id: string;
    name: string;
    color: string;
    ownerId: string;
    budget: number;
    spent: number;
    squadCount: number;
    overseasCount: number;
    squad: AuctionedPlayer[];
    isReady: boolean;
}

export interface PlayerOnBlockInfo {
    player: IPLPlayer;
    currentBid: number;
    currentBidderId: string | null;
    currentTeamId: string | null;
    currentTeamName: string | null;
    bidCount: number;
    timeRemaining: number;
}

// Bid increment rules
export function getBidIncrement(currentBid: number): number {
    if (currentBid < 100) return 5;      // Under 1 Cr: 5L increments
    if (currentBid < 500) return 10;     // 1-5 Cr: 10L increments
    if (currentBid < 1000) return 25;    // 5-10 Cr: 25L increments
    if (currentBid < 1500) return 50;    // 10-15 Cr: 50L increments
    return 100;                          // Above 15 Cr: 1 Cr increments
}

export function formatPrice(lakhs: number): string {
    if (lakhs >= 100) {
        const crores = lakhs / 100;
        return `₹${crores.toFixed(crores % 1 === 0 ? 0 : 2)} Cr`;
    }
    return `₹${lakhs} L`;
}

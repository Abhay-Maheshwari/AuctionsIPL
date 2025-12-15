export interface IPLPlayer {
    id: string;
    name: string;
    role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
    country: string;
    isOverseas: boolean;
    basePrice: number;
    stats: Record<string, string | number>;
}

export interface AuctionedPlayer {
    player: IPLPlayer;
    teamId: string;
    soldPrice: number;
    timestamp: number;
}

export interface TeamInfo {
    id: string;
    name: string;
    color: string;
    budget: number;
    spent: number;
    squadCount: number;
    overseasCount: number;
    squad: Array<{ player: IPLPlayer; soldPrice: number }>;
    isReady?: boolean;
    ownerId: string;
}

export interface GameSettings {
    budget: number;
    budgetPerPlayer: number;
    squadSize: number;
    maxOverseas: number;
    timerDuration: number;
    maxPlayers: number;
}

export interface PlayerOnBlockInfo {
    player: IPLPlayer;
    currentBid: number;
    currentTeamId: string | null;
    currentTeamName: string | null;
    biddingHistory: Array<{ teamId: string; amount: number }>;
}

export interface RoomInfo {
    code: string;
    hostId: string;
    status: 'waiting' | 'ready' | 'bidding' | 'paused' | 'completed' | 'live';
    settings: GameSettings;
    teams: TeamInfo[];
    players: IPLPlayer[]; // Remaining players
    unsoldPlayers: IPLPlayer[];
    soldPlayers: AuctionedPlayer[];
    currentPlayerOnBlock: PlayerOnBlockInfo | null;
    playersRemaining: number;
    soldPlayersCount: number;
}

export interface ChatMessage {
    id: string;
    userId: string;
    userName: string;
    teamName?: string;
    message: string;
    timestamp: number;
}

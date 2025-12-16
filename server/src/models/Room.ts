import mongoose, { Schema, Document } from 'mongoose';
import { Room, GameSettings, DEFAULT_SETTINGS, Team, PlayerOnBlock, Bid, AuctionedPlayer } from '../types/game';
import { IPLPlayer } from '../data/players';

// We need to carefully map the TypeScript interfaces to Mongoose Schemas

const IPLPlayerSchema = new Schema({
    id: String,
    name: String,
    role: String,
    country: String,
    team: String,
    basePrice: Number,
    isOverseas: Boolean,
    rating: Number,
    tags: [String],
    image: String,
    setNo: Number,
    setCode: String,
    stats: {
        matches: Number,
        runs: Number,
        wickets: Number,
        average: Number,
        strikeRate: Number,
        economy: Number
    }
}, { _id: false });

const AuctionedPlayerSchema = new Schema({
    player: IPLPlayerSchema,
    soldPrice: Number,
    soldAt: Date
}, { _id: false });

const BidSchema = new Schema({
    id: String,
    playerId: String,
    bidderId: String,
    teamId: String,
    amount: Number,
    timestamp: Date
}, { _id: false });

const TeamSchema = new Schema({
    id: String,
    name: String,
    color: String,
    ownerId: { type: String, default: '' },
    budget: Number,
    spent: { type: Number, default: 0 },
    squad: [AuctionedPlayerSchema],
    isReady: { type: Boolean, default: false }
}, { _id: false });

const PlayerOnBlockSchema = new Schema({
    player: IPLPlayerSchema,
    currentBid: Number,
    currentBidderId: { type: String, default: null },
    currentTeamId: { type: String, default: null },
    bids: [BidSchema],
    startTime: Date,
    timerEndTime: Date
}, { _id: false });

interface RoomDocument extends Omit<Room, 'id' | 'teams'>, Document<string> {
    _id: string;
    teams: Team[]; // Store teams as array in Mongo for easier querying/updating
}

const RoomSchema = new Schema<RoomDocument>({
    _id: { type: String, required: true }, // uuid
    code: { type: String, required: true, unique: true, index: true },
    hostId: { type: String, required: true },
    status: { type: String, enum: ['lobby', 'live', 'paused', 'completed'], default: 'lobby' },

    settings: {
        budgetPerPlayer: { type: Number, default: DEFAULT_SETTINGS.budgetPerPlayer },
        maxPlayers: { type: Number, default: DEFAULT_SETTINGS.maxPlayers },
        squadSize: { type: Number, default: DEFAULT_SETTINGS.squadSize },
        maxOverseas: { type: Number, default: DEFAULT_SETTINGS.maxOverseas },
        timerDuration: { type: Number, default: DEFAULT_SETTINGS.timerDuration },
        auctionSpeed: { type: String, default: DEFAULT_SETTINGS.auctionSpeed },
        minBatsmen: { type: Number, default: DEFAULT_SETTINGS.minBatsmen },
        minBowlers: { type: Number, default: DEFAULT_SETTINGS.minBowlers },
        minAllRounders: { type: Number, default: DEFAULT_SETTINGS.minAllRounders },
        minWicketKeepers: { type: Number, default: DEFAULT_SETTINGS.minWicketKeepers },
    },

    teams: [TeamSchema], // Storing as array, will convert to Map in application layer if needed, or adjust app logic

    playerQueue: [IPLPlayerSchema],
    soldPlayers: [AuctionedPlayerSchema],
    unsoldPlayers: [IPLPlayerSchema],

    currentPlayerOnBlock: { type: PlayerOnBlockSchema, default: null },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Helper to update 'updatedAt' on save - REMOVED to avoid next() error on create
// RoomSchema.pre('save', function (next: any) {
//     this.updatedAt = new Date();
//     next();
// });

export const RoomModel = mongoose.model<RoomDocument>('Room', RoomSchema);

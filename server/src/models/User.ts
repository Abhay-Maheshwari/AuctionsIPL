import mongoose, { Schema, Document } from 'mongoose';
import { User } from '../types/game';

interface UserDocument extends Omit<User, 'id'>, Document<string> {
    _id: string; // Use _id as the main ID
}

const UserSchema = new Schema<UserDocument>({
    _id: { type: String, required: true }, // uuid
    socketId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    roomCode: { type: String, default: null },
    teamId: { type: String, default: null },
    isHost: { type: Boolean, default: false },
    isSpectator: { type: Boolean, default: false },
    connectedAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);

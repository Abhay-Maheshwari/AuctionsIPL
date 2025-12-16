// Game Context for managing auction state
'use client';

import React, { createContext, useContext, useReducer, ReactNode, useEffect, useCallback } from 'react';
import { useSocket } from './SocketContext';

// Types
import {
    IPLPlayer,
    TeamInfo,
    RoomInfo,
    GameSettings,
    ChatMessage
} from '@/types/game';

// Re-export for backward compatibility if needed, but per request we want cleaner imports
// so internal usage will rely on these imports.

interface GameState {
    userId: string | null;
    teamId: string | null;
    roomCode: string | null;
    room: RoomInfo | null;
    isHost: boolean;
    timeRemaining: number;
    chatMessages: ChatMessage[];
    error: string | null;
    lastSoldPlayer: { player: IPLPlayer; team: TeamInfo; price: number } | null;
}

type GameAction =
    | { type: 'SET_USER'; payload: { userId: string; teamId: string | null; isHost: boolean } }
    | { type: 'SET_ROOM'; payload: { roomCode: string; room: RoomInfo } }
    | { type: 'UPDATE_ROOM'; payload: RoomInfo }
    | { type: 'SET_TIME'; payload: number }
    | { type: 'ADD_CHAT'; payload: ChatMessage }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'PLAYER_SOLD'; payload: { player: IPLPlayer; team: TeamInfo; price: number } }
    | { type: 'CLEAR_LAST_SOLD' }
    | { type: 'RESET' };

const initialState: GameState = {
    userId: null,
    teamId: null,
    roomCode: null,
    room: null,
    isHost: false,
    timeRemaining: 0,
    chatMessages: [],
    error: null,
    lastSoldPlayer: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, ...action.payload };
        case 'SET_ROOM':
            return { ...state, roomCode: action.payload.roomCode, room: action.payload.room, error: null };
        case 'UPDATE_ROOM':
            return { ...state, room: action.payload };
        case 'SET_TIME':
            return { ...state, timeRemaining: action.payload };
        case 'ADD_CHAT':
            return { ...state, chatMessages: [...state.chatMessages, action.payload].slice(-100) };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'PLAYER_SOLD':
            return { ...state, lastSoldPlayer: action.payload };
        case 'CLEAR_LAST_SOLD':
            return { ...state, lastSoldPlayer: null };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

interface GameContextType {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
    createRoom: (userName: string, teamName: string, teamColor: string, settings?: Partial<GameSettings>) => Promise<{ success: boolean; error?: string }>;
    joinRoom: (roomCode: string, userName: string, teamName: string, teamColor: string) => Promise<{ success: boolean; error?: string }>;
    setReady: (ready: boolean) => void;
    startAuction: () => void;
    placeBid: () => void;
    pauseAuction: () => void;
    resumeAuction: () => void;
    skipPlayer: () => void;
    sendChat: (message: string) => void;
    myTeam: TeamInfo | null;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    const { socket, emit } = useSocket();

    // Socket event listeners
    useEffect(() => {
        if (!socket) return;

        socket.on('room-updated', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('player-joined', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('auction-started', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('bid-placed', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('timer-tick', ({ timeRemaining }: { timeRemaining: number }) => {
            dispatch({ type: 'SET_TIME', payload: timeRemaining });
        });

        socket.on('player-sold', ({ player, team, price, room }: { player: IPLPlayer; team: TeamInfo; price: number; room: RoomInfo }) => {
            dispatch({ type: 'PLAYER_SOLD', payload: { player, team, price } });
            dispatch({ type: 'UPDATE_ROOM', payload: room });
            setTimeout(() => dispatch({ type: 'CLEAR_LAST_SOLD' }), 3000);
        });

        socket.on('player-unsold', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('next-player', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('auction-completed', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('auction-paused', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('auction-resumed', ({ room }: { room: RoomInfo }) => {
            dispatch({ type: 'UPDATE_ROOM', payload: room });
        });

        socket.on('chat-message', (message: ChatMessage) => {
            dispatch({ type: 'ADD_CHAT', payload: message });
        });

        return () => {
            socket.off('room-updated');
            socket.off('player-joined');
            socket.off('auction-started');
            socket.off('bid-placed');
            socket.off('timer-tick');
            socket.off('player-sold');
            socket.off('player-unsold');
            socket.off('next-player');
            socket.off('auction-completed');
            socket.off('auction-paused');
            socket.off('auction-resumed');
            socket.off('chat-message');
        };
    }, [socket]);

    const createRoom = useCallback(async (userName: string, teamName: string, teamColor: string, settings?: Partial<GameSettings>) => {
        return new Promise<{ success: boolean; error?: string }>((resolve) => {
            emit('create-room', { userName, teamName, teamColor, settings }, (response: { success: boolean; roomCode?: string; userId?: string; teamId?: string; room?: RoomInfo; error?: string }) => {
                if (response.success && response.room) {
                    dispatch({ type: 'SET_USER', payload: { userId: response.userId!, teamId: response.teamId!, isHost: true } });
                    dispatch({ type: 'SET_ROOM', payload: { roomCode: response.roomCode!, room: response.room } });
                    resolve({ success: true });
                } else {
                    resolve({ success: false, error: response.error });
                }
            });
        });
    }, [emit]);

    const joinRoom = useCallback(async (roomCode: string, userName: string, teamName: string, teamColor: string) => {
        return new Promise<{ success: boolean; error?: string }>((resolve) => {
            emit('join-room', { roomCode, userName, teamName, teamColor }, (response: { success: boolean; userId?: string; teamId?: string; room?: RoomInfo; error?: string }) => {
                if (response.success && response.room) {
                    dispatch({ type: 'SET_USER', payload: { userId: response.userId!, teamId: response.teamId!, isHost: false } });
                    dispatch({ type: 'SET_ROOM', payload: { roomCode, room: response.room } });
                    resolve({ success: true });
                } else {
                    resolve({ success: false, error: response.error });
                }
            });
        });
    }, [emit]);

    const setReady = useCallback((ready: boolean) => {
        if (state.roomCode && state.teamId) {
            emit('set-ready', { roomCode: state.roomCode, teamId: state.teamId, ready }, () => { });
        }
    }, [emit, state.roomCode, state.teamId]);

    const startAuction = useCallback(() => {
        if (state.roomCode) {
            emit('start-auction', { roomCode: state.roomCode }, (response: { success: boolean; error?: string }) => {
                if (!response.success) {
                    dispatch({ type: 'SET_ERROR', payload: response.error || 'Failed to start' });
                }
            });
        }
    }, [emit, state.roomCode]);

    const placeBid = useCallback(() => {
        if (state.roomCode && state.teamId) {
            emit('place-bid', { roomCode: state.roomCode, teamId: state.teamId }, (response: { success: boolean; error?: string }) => {
                if (!response.success) {
                    dispatch({ type: 'SET_ERROR', payload: response.error || 'Bid failed' });
                    setTimeout(() => dispatch({ type: 'SET_ERROR', payload: null }), 2000);
                }
            });
        }
    }, [emit, state.roomCode, state.teamId]);

    const pauseAuction = useCallback(() => {
        if (state.roomCode) {
            emit('pause-auction', { roomCode: state.roomCode }, () => { });
        }
    }, [emit, state.roomCode]);

    const resumeAuction = useCallback(() => {
        if (state.roomCode) {
            emit('resume-auction', { roomCode: state.roomCode }, () => { });
        }
    }, [emit, state.roomCode]);

    const skipPlayer = useCallback(() => {
        if (state.roomCode) {
            emit('skip-player', { roomCode: state.roomCode }, () => { });
        }
    }, [emit, state.roomCode]);

    const sendChat = useCallback((message: string) => {
        if (state.roomCode && message.trim()) {
            emit('chat-message', { roomCode: state.roomCode, message: message.trim() }, () => { });
        }
    }, [emit, state.roomCode]);

    const myTeam = state.room?.teams.find(t => t.id === state.teamId) || null;

    return (
        <GameContext.Provider value={{
            state,
            dispatch,
            createRoom,
            joinRoom,
            setReady,
            startAuction,
            placeBid,
            pauseAuction,
            resumeAuction,
            skipPlayer,
            sendChat,
            myTeam,
        }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}

// Utility functions
export function formatPrice(lakhs: number): string {
    if (lakhs >= 100) {
        const crores = lakhs / 100;
        return `₹${crores.toFixed(crores % 1 === 0 ? 0 : 2)} Cr`;
    }
    return `₹${lakhs} L`;
}

export function getBidIncrement(currentBid: number): number {
    if (currentBid < 100) return 5;
    if (currentBid < 500) return 10;
    if (currentBid < 1000) return 25;
    if (currentBid < 1500) return 50;
    return 100;
}

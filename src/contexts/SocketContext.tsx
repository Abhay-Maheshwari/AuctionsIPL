// Socket Context for real-time communication
'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketContextType {
    socket: Socket | null;
    isConnected: boolean;
    emit: <T>(event: string, data: object, callback?: (response: T) => void) => void;
}

const SocketContext = createContext<SocketContextType>({
    socket: null,
    isConnected: false,
    emit: () => { },
});

export function SocketProvider({ children }: { children: ReactNode }) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socketInstance = io(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001', {
            transports: ['websocket', 'polling'],
            timeout: 10000,
        });

        socketInstance.on('connect', () => {
            console.log('🔌 Connected to server');
            setIsConnected(true);
        });

        socketInstance.on('disconnect', () => {
            console.log('🔌 Disconnected from server');
            setIsConnected(false);
        });

        socketInstance.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect();
        };
    }, []);

    const emit = useCallback(<T,>(event: string, data: object, callback?: (response: T) => void) => {
        if (socket) {
            socket.emit(event, data, callback);
        }
    }, [socket]);

    return (
        <SocketContext.Provider value={{ socket, isConnected, emit }}>
            {children}
        </SocketContext.Provider>
    );
}

export function useSocket() {
    return useContext(SocketContext);
}

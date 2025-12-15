// Auction Timer Component
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface AuctionTimerProps {
    timeRemaining: number;
    maxTime: number;
    isPaused?: boolean;
}

export default function AuctionTimer({ timeRemaining, maxTime, isPaused = false }: AuctionTimerProps) {
    const percentage = (timeRemaining / maxTime) * 100;

    // Get color based on time
    const getColor = () => {
        if (timeRemaining <= 3) return { bg: 'bg-red-500', text: 'text-red-400', ring: 'ring-red-500' };
        if (timeRemaining <= 5) return { bg: 'bg-orange-500', text: 'text-orange-400', ring: 'ring-orange-500' };
        if (timeRemaining <= 10) return { bg: 'bg-yellow-500', text: 'text-yellow-400', ring: 'ring-yellow-500' };
        return { bg: 'bg-green-500', text: 'text-green-400', ring: 'ring-green-500' };
    };

    const colors = getColor();

    // Play sound for last 5 seconds
    useEffect(() => {
        if (timeRemaining <= 5 && timeRemaining > 0 && !isPaused) {
            // Beep sound would go here
        }
    }, [timeRemaining, isPaused]);

    return (
        <div className="relative">
            {/* Outer ring */}
            <div className={`
        relative w-28 h-28 rounded-full 
        ${isPaused ? 'bg-slate-800' : 'bg-slate-900/80'}
        ring-4 ${isPaused ? 'ring-slate-600' : colors.ring}
        shadow-lg transition-all duration-300
      `}>
                {/* Progress ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-slate-700"
                    />
                    <motion.circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className={isPaused ? 'text-slate-500' : colors.text}
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '314.16', strokeDashoffset: 0 }}
                        animate={{
                            strokeDashoffset: 314.16 * (1 - percentage / 100),
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {isPaused ? (
                        <>
                            <AlertCircle className="w-6 h-6 text-slate-400 mb-1" />
                            <span className="text-slate-400 text-sm font-medium">PAUSED</span>
                        </>
                    ) : (
                        <>
                            <motion.span
                                key={timeRemaining}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                className={`
                  text-4xl font-bold tabular-nums
                  ${colors.text}
                `}
                            >
                                {timeRemaining}
                            </motion.span>
                            <span className="text-slate-400 text-xs uppercase tracking-wider">seconds</span>
                        </>
                    )}
                </div>

                {/* Pulse effect for last 5 seconds */}
                {timeRemaining <= 5 && timeRemaining > 0 && !isPaused && (
                    <motion.div
                        className={`absolute inset-0 rounded-full ${colors.bg} opacity-20`}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />
                )}
            </div>
        </div>
    );
}

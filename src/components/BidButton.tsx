// Bid Button Component
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Gavel, Ban, Loader2 } from 'lucide-react';
import { formatPrice, getBidIncrement } from '@/contexts/GameContext';

interface BidButtonProps {
    currentBid: number;
    myBudget: number;
    isMyBid: boolean;
    canBid: boolean;
    error?: string | null;
    onBid: () => void;
}

export default function BidButton({ currentBid, myBudget, isMyBid, canBid, error, onBid }: BidButtonProps) {
    const nextBid = currentBid + getBidIncrement(currentBid);
    const canAfford = nextBid <= myBudget;
    const isDisabled = isMyBid || !canBid || !canAfford;

    return (
        <div className="flex flex-col items-center gap-3">
            {/* Error message */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm"
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main bid button */}
            <motion.button
                onClick={onBid}
                disabled={isDisabled}
                whileHover={!isDisabled ? { scale: 1.05 } : {}}
                whileTap={!isDisabled ? { scale: 0.95 } : {}}
                className={`
          relative overflow-hidden
          w-full max-w-xs py-5 px-8 rounded-2xl
          font-bold text-xl tracking-wide
          transition-all duration-300
          shadow-lg
          ${isDisabled
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white hover:shadow-green-500/30 hover:shadow-xl'
                    }
        `}
            >
                {/* Shimmer effect */}
                {!isDisabled && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                )}

                <span className="relative flex items-center justify-center gap-3">
                    {isMyBid ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Your Bid!</span>
                        </>
                    ) : !canAfford ? (
                        <>
                            <Ban className="w-6 h-6" />
                            <span>Can&apos;t Afford</span>
                        </>
                    ) : (
                        <>
                            <Gavel className="w-6 h-6" />
                            <span>BID {formatPrice(nextBid)}</span>
                        </>
                    )}
                </span>
            </motion.button>

            {/* Budget indicator */}
            <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-slate-400">Your Budget:</span>
                    <span className={`font-bold ${myBudget < 500 ? 'text-red-400' : 'text-green-400'}`}>
                        {formatPrice(myBudget)}
                    </span>
                </div>
                {!isMyBid && canAfford && (
                    <div className="text-slate-500">
                        After bid: {formatPrice(myBudget - nextBid)}
                    </div>
                )}
            </div>
        </div>
    );
}

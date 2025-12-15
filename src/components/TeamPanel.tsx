// Team Panel Component - Shows team status and squad
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { useState } from 'react';
import { formatPrice } from '@/contexts/GameContext';
import { TeamInfo, IPLPlayer } from '@/types/game';

interface TeamPanelProps {
    team: TeamInfo;
    isMyTeam?: boolean;
    isCurrentBidder?: boolean;
    maxSquadSize: number;
    maxOverseas: number;
}

export default function TeamPanel({ team, isMyTeam = false, isCurrentBidder = false, maxSquadSize, maxOverseas }: TeamPanelProps) {
    const [isExpanded, setIsExpanded] = useState(isMyTeam);

    const budgetPercentage = ((team.budget - team.spent) / team.budget) * 100;

    return (
        <motion.div
            layout
            className={`
        rounded-sm overflow-hidden
        ${isMyTeam
                    ? 'bg-industrial-surface border-2 border-industrial-primary shadow-lg shadow-industrial-primary/10'
                    : 'bg-white/5 border border-white/10'
                }
        ${isCurrentBidder ? 'ring-2 ring-industrial-accent ring-offset-2 ring-offset-black' : ''}
      `}
        >
            {/* Header */}
            <div
                className="p-3 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3">
                    {/* Team color dot */}
                    <div
                        className="w-4 h-4 rounded-sm ring-2 ring-white/10 relative overflow-hidden"
                        style={{ backgroundColor: team.color }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold text-white uppercase tracking-tight">{team.name}</h3>
                            {isMyTeam && (
                                <span className="text-[10px] bg-industrial-primary/20 text-industrial-primary border border-industrial-primary/30 px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold">
                                    You
                                </span>
                            )}
                            {isCurrentBidder && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="text-[10px] bg-industrial-accent/20 text-industrial-accent border border-industrial-accent/30 px-2 py-0.5 rounded-sm flex items-center gap-1 uppercase tracking-wider font-bold"
                                >
                                    <Star size={10} /> Bidding
                                </motion.span>
                            )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1">
                                <Users size={12} />
                                <span className="text-slate-400">{team.squadCount}</span>/{maxSquadSize}
                            </span>
                            <span className="flex items-center gap-1">
                                <Globe size={12} />
                                <span className="text-slate-400">{team.overseasCount}</span>/{maxOverseas}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Budget */}
                    <div className="text-right">
                        <div className="text-industrial-primary font-mono font-bold text-sm tracking-tight text-glow">
                            {formatPrice(team.budget - team.spent)}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">remaining</div>
                    </div>

                    {isExpanded ? <ChevronUp size={20} className="text-industrial-primary" /> : <ChevronDown size={20} className="text-slate-500" />}
                </div>
            </div>

            {/* Budget bar */}
            <div className="px-3 pb-2">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full rounded-full ${budgetPercentage > 50 ? 'bg-green-500' :
                            budgetPercentage > 25 ? 'bg-industrial-primary' :
                                'bg-industrial-accent'
                            }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${budgetPercentage}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-black/20"
                    >
                        <div className="px-3 pb-3 space-y-2">
                            {/* Squad list */}
                            {team.squad.length > 0 ? (
                                <div className="space-y-1 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                                    {team.squad.map((ap: { player: IPLPlayer; soldPrice: number }, idx: number) => (
                                        <div
                                            key={ap.player.id}
                                            className="flex items-center justify-between bg-white/5 rounded-sm px-3 py-2 text-sm border-l-2 border-transparent hover:border-industrial-primary transition-all"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-slate-600 font-mono text-xs w-5">{idx + 1}.</span>
                                                <span className="text-slate-300 font-medium">{ap.player.name}</span>
                                                {ap.player.isOverseas && (
                                                    <Globe size={12} className="text-industrial-accent" />
                                                )}
                                            </div>
                                            <span className="text-industrial-primary font-mono text-xs">
                                                {formatPrice(ap.soldPrice)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-4 text-slate-600 text-xs uppercase tracking-wider font-bold">
                                    No players acquired
                                </div>
                            )}

                            {/* Spending summary */}
                            <div className="flex justify-between pt-3 border-t border-white/10 text-xs">
                                <span className="text-slate-500 font-bold uppercase tracking-wider">Total Spent</span>
                                <span className="text-white font-mono font-bold">{formatPrice(team.spent)}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

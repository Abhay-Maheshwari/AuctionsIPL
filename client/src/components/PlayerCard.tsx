import React from 'react';
import { Trophy, Activity, Zap, Star } from 'lucide-react';
import { IPLPlayer } from '@/types/game';
import { motion } from 'framer-motion';

interface PlayerCardProps {
    player: IPLPlayer & { isSold?: boolean };
    isSold?: boolean;
    currentBid?: number;
    isOnBlock?: boolean;
}

const RoleIcon = ({ role }: { role: string }) => {
    switch (role) {
        case 'Batsman': return <Activity className="text-blue-400" />;
        case 'Bowler': return <Zap className="text-yellow-400" />;
        case 'All-rounder': return <Star className="text-purple-400" />;
        case 'Wicket-keeper': return <Trophy className="text-orange-400" />;
        default: return <Star className="text-white" />;
    }
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, isSold }) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-sm mx-auto perspective-1000"
        >
            <div className={`relative bg-industrial-surface p-1 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 card-shine ${isSold ? 'grayscale opacity-75' : ''}`}>

                {/* Industrial Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-industrial-primary/20 to-transparent opacity-0 animate-shimmer" />

                <div className="bg-industrial-background rounded-[22px] p-6 h-full border border-industrial-primary/20 relative z-10 shadow-inner">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm ${player.role === 'Batsman' ? 'bg-blue-900/40 text-blue-400 border border-blue-500/30' :
                                    player.role === 'Bowler' ? 'bg-industrial-primary/20 text-industrial-primary border border-industrial-primary/30' :
                                        player.role === 'All-rounder' ? 'bg-purple-900/40 text-purple-400 border border-purple-500/30' :
                                            'bg-orange-900/40 text-orange-400 border border-orange-500/30'
                                    }`}>
                                    {player.role}
                                </span>
                                {player.isOverseas && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm bg-industrial-accent/20 text-industrial-accent border border-industrial-accent/30">
                                        Overseas
                                    </span>
                                )}
                            </div>
                            <h2 className="text-3xl font-display font-black text-white leading-tight uppercase tracking-tight text-glow">
                                {player.name}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-slate-400 font-medium tracking-widest uppercase">{player.country}</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-industrial-surface border border-industrial-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,176,0,0.15)]">
                            <RoleIcon role={player.role} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {Object.entries(player.stats).filter(([, v]) => v !== undefined).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="bg-white/5 rounded-sm p-3 flex flex-col relative overflow-hidden group border-l-2 border-industrial-primary/0 hover:border-industrial-primary/100 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-industrial-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{key}</span>
                                <span className="text-xl font-mono font-bold text-white tracking-tight">{value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Base Price Footer */}
                    <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                        <div>
                            <p className="text-xs text-industrial-primary font-bold uppercase tracking-wider mb-1">Base Price</p>
                            <p className="text-2xl font-mono font-bold text-white">₹{player.basePrice} L</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-600 font-mono">ID: #{player.id.slice(0, 4)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PlayerCard;

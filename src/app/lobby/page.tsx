// Lobby Page - Pre-auction waiting room
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    Copy, Check, Users, Settings, Play, Crown,
    Clock, Wallet, ChevronDown, ChevronUp, Loader2, Globe
} from 'lucide-react';
import { useGame, formatPrice } from '@/contexts/GameContext';
import { TeamInfo } from '@/types/game';

export default function LobbyPage() {
    const router = useRouter();
    const { state, myTeam, setReady, startAuction } = useGame();
    const { room, isHost, error } = state;

    const [copied, setCopied] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    // Redirect if no room
    useEffect(() => {
        if (!room) {
            router.push('/');
        }
    }, [room, router]);

    // Redirect when auction starts
    useEffect(() => {
        if (room?.status === 'live') {
            router.push('/auction');
        }
    }, [room?.status, router]);

    const copyRoomCode = async () => {
        if (room?.code) {
            await navigator.clipboard.writeText(room.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const occupiedTeams = room?.teams.filter((t: TeamInfo) => t.ownerId) || [];
    const allReady = occupiedTeams.every((t: TeamInfo) => t.isReady) && occupiedTeams.length > 0;
    // Need at least 2 human players
    const canStart = room && occupiedTeams.length >= 2 && allReady;

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-industrial-background bg-industrial-gradient p-4 md:p-8 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white mb-1">Auction Lobby</h1>
                        <p className="text-slate-500 font-medium tracking-wide text-sm">Waiting for players to join...</p>
                    </div>

                    {/* Room Code */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={copyRoomCode}
                        className="flex items-center gap-3 bg-industrial-surface border border-white/10 rounded-sm px-6 py-3 shadow-lg hover:border-industrial-primary/50 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-industrial-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <div className="text-left relative z-10">
                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Room Code</div>
                            <div className="text-2xl font-mono font-bold tracking-widest text-industrial-primary group-hover:text-glow transition-all">
                                {room.code}
                            </div>
                        </div>
                        {copied ? (
                            <Check className="w-5 h-5 text-green-400 relative z-10" />
                        ) : (
                            <Copy className="w-5 h-5 text-slate-500 group-hover:text-industrial-primary transition-colors relative z-10" />
                        )}
                    </motion.button>
                </div>

                {/* Settings Summary */}
                <div className="bg-industrial-surface border border-white/10 rounded-sm overflow-hidden shadow-lg">
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Settings className="w-5 h-5 text-industrial-primary" />
                            <span className="font-bold text-white uppercase tracking-tight">Game Settings</span>
                        </div>
                        {showSettings ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                    </button>

                    {showSettings && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="px-6 pb-4 grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/20"
                        >
                            <div className="bg-white/5 rounded-sm p-3 text-center border border-white/5">
                                <Wallet className="w-5 h-5 text-green-400 mx-auto mb-2" />
                                <div className="text-lg font-mono font-bold text-white">{formatPrice(room.settings.budgetPerPlayer)}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Budget</div>
                            </div>
                            <div className="bg-white/5 rounded-sm p-3 text-center border border-white/5">
                                <Users className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                                <div className="text-lg font-mono font-bold text-white">{room.settings.squadSize}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Squad Size</div>
                            </div>
                            <div className="bg-white/5 rounded-sm p-3 text-center border border-white/5">
                                <Clock className="w-5 h-5 text-industrial-primary mx-auto mb-2" />
                                <div className="text-lg font-mono font-bold text-white">{room.settings.timerDuration}s</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Timer</div>
                            </div>
                            <div className="bg-white/5 rounded-sm p-3 text-center border border-white/5">
                                <Globe className="w-5 h-5 text-industrial-accent mx-auto mb-2" />
                                <div className="text-lg font-mono font-bold text-white">{room.settings.maxOverseas}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Max Overseas</div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Teams */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold flex items-center gap-2 text-white uppercase tracking-tight">
                            <Users className="w-5 h-5 text-industrial-primary" />
                            Teams <span className="text-slate-500 text-base font-normal">({room.teams.length}/{room.settings.maxPlayers})</span>
                        </h2>
                    </div>

                    <div className="grid gap-3">
                        {room.teams.map((team: TeamInfo) => {
                            const isMe = team.id === myTeam?.id;
                            const isTeamHost = team.ownerId === room.hostId;

                            return (
                                <motion.div
                                    key={team.id}
                                    layout
                                    className={`
                    border rounded-sm p-4
                    flex items-center justify-between
                    ${isMe ? 'bg-industrial-surface border-industrial-primary shadow-[0_0_15px_rgba(255,176,0,0.1)]' : 'bg-white/5 border-white/10'}
                  `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 rounded-sm flex items-center justify-center text-white font-bold ring-2 ring-white/10 relative overflow-hidden shadow-inner"
                                            style={{ backgroundColor: team.color }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                                            {team.name.charAt(0).toUpperCase()}
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-white uppercase tracking-tight">{team.name}</span>
                                                {isTeamHost && (
                                                    <Crown className="w-4 h-4 text-industrial-primary" />
                                                )}
                                                {isMe && (
                                                    <span className="text-[10px] bg-industrial-primary/20 text-industrial-primary px-2 py-0.5 rounded-sm uppercase tracking-wider font-bold border border-industrial-primary/30">
                                                        You
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-sm text-slate-500 font-mono">
                                                Budget: <span className="text-slate-300">{formatPrice(team.budget)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ready status */}
                                    <div className="flex items-center gap-3">
                                        {team.isReady ? (
                                            <span className="flex items-center gap-1 text-green-400 text-xs font-bold uppercase tracking-wider bg-green-900/20 px-2 py-1 rounded-sm border border-green-500/30">
                                                <Check className="w-3 h-3" /> Ready
                                            </span>
                                        ) : (
                                            <span className="text-slate-600 text-xs font-bold uppercase tracking-wider bg-slate-900/50 px-2 py-1 rounded-sm border border-slate-700">Not Ready</span>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Empty slots */}
                        {Array.from({ length: room.settings.maxPlayers - room.teams.length }).map((_, i) => (
                            <div
                                key={`empty-${i}`}
                                className="border-2 border-dashed border-white/10 rounded-sm p-4 flex items-center justify-center text-slate-600 bg-white/[0.02]"
                            >
                                <Users className="w-5 h-5 mr-2 opacity-50" />
                                <span className="uppercase tracking-wider font-bold text-xs">Waiting for player...</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-sm text-center font-bold tracking-wide uppercase text-sm">
                        {error}
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                    {/* Ready Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setReady(!myTeam?.isReady)}
                        className={`
              py-4 px-8 rounded-sm font-black text-lg transition-all uppercase tracking-widest relative overflow-hidden group
              ${myTeam?.isReady
                                ? 'bg-green-600 hover:bg-green-500 text-black'
                                : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                            }
            `}
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 flex items-center gap-2">
                            {myTeam?.isReady ? (
                                <>
                                    <Check className="w-6 h-6" /> Ready!
                                </>
                            ) : (
                                'Click when Ready'
                            )}
                        </span>
                    </motion.button>

                    {/* Start Button (Host only) */}
                    {isHost && (
                        <motion.button
                            whileHover={canStart ? { scale: 1.02 } : {}}
                            whileTap={canStart ? { scale: 0.98 } : {}}
                            onClick={startAuction}
                            disabled={!canStart}
                            className={`
                py-4 px-8 rounded-sm font-black text-lg transition-all
                flex items-center gap-2 uppercase tracking-widest relative overflow-hidden group
                ${canStart
                                    ? 'bg-industrial-primary text-black shadow-[0_0_20px_rgba(255,176,0,0.4)] hover:shadow-[0_0_30px_rgba(255,176,0,0.6)]'
                                    : 'bg-white/5 text-slate-600 cursor-not-allowed border border-white/5'
                                }
              `}
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                            <span className="relative z-10 flex items-center gap-2">
                                <Play className="w-5 h-5 fill-current" />
                                Start Auction
                            </span>
                        </motion.button>
                    )}
                </div>

                {/* Start requirements */}
                {isHost && !canStart && (
                    <div className="text-center text-slate-500 text-xs font-bold uppercase tracking-wider">
                        {occupiedTeams.length < 2
                            ? 'Need at least 2 teams to start'
                            : 'All teams must be ready to start'
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

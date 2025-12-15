// Home Page - Create or Join Auction
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Users, Sparkles, Trophy, Zap, ArrowRight, Loader2 } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { useSocket } from '@/contexts/SocketContext';
import { IPL_TEAMS } from '@/data/teams';

export default function HomePage() {
    const router = useRouter();
    const { isConnected } = useSocket();
    const { createRoom, joinRoom } = useGame();

    const [mode, setMode] = useState<'home' | 'create' | 'join'>('home');
    const [userName, setUserName] = useState('');
    const [teamId, setTeamId] = useState(IPL_TEAMS[0].id);
    const [teamName, setTeamName] = useState(IPL_TEAMS[0].name);
    const [teamColor, setTeamColor] = useState(IPL_TEAMS[0].color);
    const [roomCode, setRoomCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update team color/name when team selections changes
    useEffect(() => {
        const team = IPL_TEAMS.find(t => t.id === teamId);
        if (team) {
            setTeamColor(team.color);
            setTeamName(team.name);
        }
    }, [teamId]);

    if (!mounted) {
        return null;
    }

    const handleCreate = async () => {
        if (!userName.trim() || !teamId) {
            setError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        setError('');

        const result = await createRoom(userName, teamId, teamColor);

        if (result.success) {
            router.push('/lobby');
        } else {
            setError(result.error || 'Failed to create room');
        }

        setIsLoading(false);
    };

    const handleJoin = async () => {
        if (!userName.trim() || !teamId || !roomCode.trim()) {
            setError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        setError('');

        const result = await joinRoom(roomCode.toUpperCase(), userName, teamId, teamColor);

        if (result.success) {
            router.push('/lobby');
        } else {
            setError(result.error || 'Failed to join room');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-industrial-background bg-industrial-gradient flex flex-col relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            {/* Header */}
            <header className="p-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-industrial-primary/10 rounded-sm flex items-center justify-center border border-industrial-primary/30 shadow-[0_0_15px_rgba(255,176,0,0.15)] relative overflow-hidden">
                        <Image src="/logo.png" alt="IPL Logo" width={32} height={32} className="object-contain" />
                    </div>
                    <span className="text-xl font-display font-black uppercase tracking-tight text-white/90">
                        IPL Fantasy <span className="text-industrial-primary text-glow">Auction</span>
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                <AnimatePresence mode="wait">
                    {mode === 'home' && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-lg w-full space-y-10 text-center"
                        >
                            {/* Hero */}
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', delay: 0.2 }}
                                    className="w-24 h-24 mx-auto bg-industrial-surface border border-industrial-primary/30 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(255,176,0,0.2)] relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-industrial-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                                    <Trophy className="w-12 h-12 text-industrial-primary relative z-10" />
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-none text-white">
                                    Build Your<br />
                                    <span className="text-industrial-primary text-glow">
                                        Dream Team
                                    </span>
                                </h1>

                                <p className="text-slate-500 text-lg max-w-md mx-auto font-medium tracking-wide">
                                    Experience the thrill of IPL auctions. Bid, strategize, and dominate.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { icon: Users, label: 'Multiplayer', desc: '2-12 players' },
                                    { icon: Zap, label: 'Real-time', desc: 'Live bidding' },
                                    { icon: Sparkles, label: '60+ Players', desc: 'IPL 2024' },
                                ].map((feature, i) => (
                                    <motion.div
                                        key={feature.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="glass-panel p-4 rounded-sm hover:border-industrial-primary/50 transition-colors group"
                                    >
                                        <feature.icon className="w-6 h-6 text-industrial-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                        <div className="text-xs font-bold uppercase tracking-wider text-white mb-1">{feature.label}</div>
                                        <div className="text-[10px] text-slate-500 font-mono">{feature.desc}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setMode('create')}
                                    disabled={!isConnected}
                                    className="w-full py-4 px-6 bg-industrial-primary text-black rounded-sm font-black text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(255,176,0,0.3)] hover:shadow-[0_0_30px_rgba(255,176,0,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                                    <Sparkles className="w-5 h-5 fill-current relative z-10" />
                                    <span className="relative z-10">Create Auction Room</span>
                                    <ArrowRight className="w-5 h-5 relative z-10" />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setMode('join')}
                                    disabled={!isConnected}
                                    className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm font-bold text-lg uppercase tracking-widest text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                                >
                                    <Users className="w-5 h-5 text-slate-400 group-hover:text-industrial-primary transition-colors" />
                                    Join with Code
                                </motion.button>

                                {!isConnected && (
                                    <div className="text-industrial-accent text-xs font-mono flex items-center justify-center gap-2">
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                        CONNECTING TO SERVER...
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {(mode === 'create' || mode === 'join') && (
                        <motion.div
                            key={mode}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="max-w-md w-full space-y-6"
                        >
                            {/* Back button */}
                            <button
                                onClick={() => { setMode('home'); setError(''); }}
                                className="text-slate-500 hover:text-white transition flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                Back
                            </button>

                            {/* Form Card */}
                            <div className="glass-panel p-8 rounded-sm space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-industrial-primary via-industrial-accent to-industrial-primary opacity-50" />

                                <div className="text-center">
                                    <h2 className="text-2xl font-black uppercase tracking-tight text-white text-glow">
                                        {mode === 'create' ? 'Create New Auction' : 'Join Auction'}
                                    </h2>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mt-2">
                                        {mode === 'create'
                                            ? 'Set up your room and invite friends'
                                            : 'Enter the room code shared by your friend'
                                        }
                                    </p>
                                </div>

                                {/* Room Code (join only) */}
                                {mode === 'join' && (
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-industrial-primary uppercase tracking-wider">Room Code</label>
                                        <input
                                            type="text"
                                            value={roomCode}
                                            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                            placeholder="e.g. ABC123"
                                            maxLength={6}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-center text-2xl font-mono text-white tracking-[0.5em] uppercase focus:outline-none focus:border-industrial-primary/50 focus:shadow-[0_0_15px_rgba(255,176,0,0.1)] transition-all placeholder:tracking-normal placeholder:text-slate-700"
                                        />
                                    </div>
                                )}

                                {/* User Name */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter your name"
                                        maxLength={20}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-white focus:outline-none focus:border-industrial-primary/50 transition-all font-medium placeholder:text-slate-700"
                                    />
                                </div>

                                {/* Select Team */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Team</label>
                                    <div className="relative">
                                        <select
                                            value={teamId}
                                            onChange={(e) => setTeamId(e.target.value)}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-sm text-white focus:outline-none focus:border-industrial-primary/50 transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            {IPL_TEAMS.map(team => (
                                                <option key={team.id} value={team.id} className="bg-slate-900">
                                                    {team.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ArrowRight className="w-4 h-4 rotate-90 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Team Color Display (Read Only or Indicator) */}
                                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: teamColor }}></span>
                                    Team Color: {teamColor}
                                </div>

                                {/* Error */}
                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wide text-center">
                                        {error}
                                    </div>
                                )}

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={mode === 'create' ? handleCreate : handleJoin}
                                    disabled={isLoading}
                                    className="w-full py-4 bg-industrial-primary hover:bg-industrial-primary/90 text-black rounded-sm font-black text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(255,176,0,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                                    ) : mode === 'create' ? (
                                        <span className="flex items-center gap-2 relative z-10">
                                            <Sparkles className="w-5 h-5 fill-current" />
                                            Create Room
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2 relative z-10">
                                            <ArrowRight className="w-5 h-5" />
                                            Join Room
                                        </span>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center text-slate-600 text-xs font-bold uppercase tracking-widest">
                Made with <span className="text-industrial-accent">❤️</span> for cricket fans
            </footer>
        </div>
    );
}

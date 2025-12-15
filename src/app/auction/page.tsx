// Auction Room Page - Live bidding experience
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    Pause, Play, SkipForward, Users, Trophy,
    MessageSquare, Send, X, Loader2
} from 'lucide-react';
import { useGame, formatPrice } from '@/contexts/GameContext';
import { TeamInfo } from '@/types/game';
import PlayerCard from '@/components/PlayerCard';
import AuctionTimer from '@/components/AuctionTimer';
import BidButton from '@/components/BidButton';
import TeamPanel from '@/components/TeamPanel';

export default function AuctionPage() {
    const router = useRouter();
    const { state, myTeam, placeBid, pauseAuction, resumeAuction, skipPlayer, sendChat } = useGame();
    const { room, timeRemaining, isHost, error, lastSoldPlayer, chatMessages } = state;

    const [showTeams, setShowTeams] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // Redirect if no room
    useEffect(() => {
        if (mounted && !room) {
            router.push('/');
        }
    }, [room, router, mounted]);

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
        );
    }

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
        );
    }

    const playerOnBlock = room.currentPlayerOnBlock;
    const isCompleted = room.status === 'completed';
    const isPaused = room.status === 'paused';

    const handleSendChat = () => {
        if (chatInput.trim()) {
            sendChat(chatInput);
            setChatInput('');
        }
    };

    // Completed state
    if (isCompleted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-4 md:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-center py-12"
                    >
                        <Trophy className="w-24 h-24 mx-auto text-yellow-400 mb-4" />
                        <h1 className="text-4xl font-bold mb-2">Auction Complete!</h1>
                        <p className="text-slate-400">All players have been sold or marked unsold</p>
                    </motion.div>

                    {/* Final standings */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {room.teams
                            .sort((a: TeamInfo, b: TeamInfo) => b.squadCount - a.squadCount)
                            .map((team: TeamInfo, index: number) => (
                                <motion.div
                                    key={team.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`
                    bg-slate-900/80 backdrop-blur rounded-xl p-6 border
                    ${index === 0 ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' : 'border-slate-700'}
                  `}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {index === 0 && <Trophy className="w-6 h-6 text-yellow-400" />}
                                        <div
                                            className="w-8 h-8 rounded-full"
                                            style={{ backgroundColor: team.color }}
                                        />
                                        <h3 className="text-xl font-bold">{team.name}</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-purple-400">{team.squadCount}</div>
                                            <div className="text-xs text-slate-400">Players</div>
                                        </div>
                                        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                                            <div className="text-2xl font-bold text-green-400">{formatPrice(team.spent)}</div>
                                            <div className="text-xs text-slate-400">Spent</div>
                                        </div>
                                    </div>

                                    <div className="text-sm text-slate-400">
                                        Remaining: {formatPrice(team.budget - team.spent)}
                                    </div>
                                </motion.div>
                            ))}
                    </div>

                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push('/')}
                            className="py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg"
                        >
                            Back to Home
                        </motion.button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex flex-col">
            {/* Sold Player Overlay */}
            <AnimatePresence>
                {lastSoldPlayer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 50 }}
                            className="bg-gradient-to-br from-green-900 to-slate-900 rounded-2xl p-8 text-center max-w-md"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                                className="text-6xl mb-4"
                            >
                                🎉
                            </motion.div>
                            <h2 className="text-2xl font-bold text-green-400 mb-2">SOLD!</h2>
                            <h3 className="text-3xl font-bold mb-2">{lastSoldPlayer.player.name}</h3>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: lastSoldPlayer.team.color }}
                                />
                                <span className="text-lg">{lastSoldPlayer.team.name}</span>
                            </div>
                            <div className="text-4xl font-bold text-green-400">
                                {formatPrice(lastSoldPlayer.price)}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <header className="p-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <div className="text-sm text-slate-400">
                        <span className="text-purple-400 font-bold">{room.playersRemaining}</span> players remaining
                    </div>
                    <div className="text-sm text-slate-400">
                        <span className="text-green-400 font-bold">{room.soldPlayersCount}</span> sold
                    </div>
                </div>

                {/* Host Controls */}
                {isHost && (
                    <div className="flex items-center gap-2">
                        {isPaused ? (
                            <button
                                onClick={resumeAuction}
                                className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
                            >
                                <Play className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={pauseAuction}
                                className="p-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition"
                            >
                                <Pause className="w-5 h-5" />
                            </button>
                        )}
                        <button
                            onClick={skipPlayer}
                            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
                            title="Skip player"
                        >
                            <SkipForward className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {/* Toggle buttons */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowTeams(!showTeams)}
                        className={`p-2 rounded-lg transition ${showTeams ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                        <Users className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setShowChat(!showChat)}
                        className={`p-2 rounded-lg transition ${showChat ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                        <MessageSquare className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex">
                {/* Teams Sidebar */}
                <AnimatePresence>
                    {showTeams && (
                        <motion.aside
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 320, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="border-r border-slate-800 overflow-hidden"
                        >
                            <div className="w-80 h-full overflow-y-auto p-4 space-y-3">
                                <h3 className="font-semibold text-slate-400 mb-2">Teams</h3>
                                {room.teams.map((team: TeamInfo) => (
                                    <TeamPanel
                                        key={team.id}
                                        team={team}
                                        isMyTeam={team.id === myTeam?.id}
                                        isCurrentBidder={playerOnBlock?.currentTeamId === team.id}
                                        maxSquadSize={room.settings.squadSize}
                                        maxOverseas={room.settings.maxOverseas}
                                    />
                                ))}
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Center - Player on Block */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
                    {playerOnBlock ? (
                        <div className="w-full max-w-lg space-y-6">
                            {/* Timer */}
                            <div className="flex justify-center">
                                <AuctionTimer
                                    timeRemaining={timeRemaining}
                                    maxTime={room.settings.timerDuration}
                                    isPaused={isPaused}
                                />
                            </div>

                            {/* Player Card */}
                            <PlayerCard
                                player={playerOnBlock.player}
                                currentBid={playerOnBlock.currentBid}
                                isOnBlock={true}
                            />

                            {/* Current Bid Info */}
                            <div className="text-center space-y-2">
                                {playerOnBlock.currentTeamName ? (
                                    <div className="text-lg">
                                        <span className="text-slate-400">Current bid by </span>
                                        <span className="text-purple-400 font-bold">{playerOnBlock.currentTeamName}</span>
                                    </div>
                                ) : (
                                    <div className="text-slate-400">No bids yet - Starting at base price</div>
                                )}

                                <div className="text-3xl font-bold text-green-400">
                                    {formatPrice(playerOnBlock.currentBid)}
                                </div>
                            </div>

                            {/* Bid Button */}
                            {myTeam && !isPaused && (
                                <BidButton
                                    currentBid={playerOnBlock.currentBid}
                                    myBudget={myTeam.budget - myTeam.spent}
                                    isMyBid={playerOnBlock.currentTeamId === myTeam.id}
                                    canBid={myTeam.squadCount < room.settings.squadSize}
                                    error={error}
                                    onBid={placeBid}
                                />
                            )}

                            {isPaused && (
                                <div className="text-center py-4 text-yellow-400 bg-yellow-500/10 rounded-xl">
                                    Auction is paused by the host
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center text-slate-400">
                            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
                            Loading next player...
                        </div>
                    )}
                </div>

                {/* Chat Sidebar */}
                <AnimatePresence>
                    {showChat && (
                        <motion.aside
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 320, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="border-l border-slate-800 overflow-hidden flex flex-col"
                        >
                            <div className="w-80 h-full flex flex-col">
                                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                                    <h3 className="font-semibold">Chat</h3>
                                    <button onClick={() => setShowChat(false)}>
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                    {chatMessages.map((msg, i) => (
                                        <div key={i} className="text-sm">
                                            <span className="font-medium text-purple-400">{msg.userName}</span>
                                            {msg.teamName && (
                                                <span className="text-slate-500 text-xs ml-1">({msg.teamName})</span>
                                            )}
                                            <p className="text-slate-300">{msg.message}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Input */}
                                <div className="p-4 border-t border-slate-800">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={chatInput}
                                            onChange={(e) => setChatInput(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                                            placeholder="Type a message..."
                                            className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                        <button
                                            onClick={handleSendChat}
                                            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </main>

            {/* My Team Footer (Mobile-friendly) */}
            <footer className="p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur">
                <div className="flex items-center justify-between max-w-lg mx-auto">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                            style={{ backgroundColor: myTeam?.color }}
                        >
                            {myTeam?.name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-semibold">{myTeam?.name}</div>
                            <div className="text-sm text-slate-400">
                                {myTeam?.squadCount}/{room.settings.squadSize} players
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-lg font-bold text-green-400">
                            {formatPrice((myTeam?.budget || 0) - (myTeam?.spent || 0))}
                        </div>
                        <div className="text-xs text-slate-400">remaining</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

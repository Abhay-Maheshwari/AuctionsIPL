// Main Server Entry Point
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { setupSocketHandlers } from './services/socketHandlers';
import { iplPlayers } from './data/players';

dotenv.config();

const app = express();
const httpServer = createServer(app);

// CORS configuration
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Socket.io setup
const io = new Server(httpServer, {
    cors: corsOptions,
    pingTimeout: 60000,
    pingInterval: 25000,
});

// Setup socket handlers
setupSocketHandlers(io);

// REST API routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/players', (req, res) => {
    const { role, country, minPrice, maxPrice, search } = req.query;

    let filtered = [...iplPlayers];

    if (role && typeof role === 'string') {
        filtered = filtered.filter(p => p.role === role);
    }

    if (country && typeof country === 'string') {
        filtered = filtered.filter(p => p.country === country);
    }

    if (minPrice && !isNaN(Number(minPrice))) {
        filtered = filtered.filter(p => p.basePrice >= Number(minPrice));
    }

    if (maxPrice && !isNaN(Number(maxPrice))) {
        filtered = filtered.filter(p => p.basePrice <= Number(maxPrice));
    }

    if (search && typeof search === 'string') {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.tags.some(t => t.toLowerCase().includes(searchLower))
        );
    }

    res.json({
        players: filtered,
        total: filtered.length,
    });
});

app.get('/api/players/:id', (req, res) => {
    const player = iplPlayers.find(p => p.id === req.params.id);
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({ error: 'Player not found' });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auction-ipl';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('📦 Connected to MongoDB');
        httpServer.listen(PORT, () => {
            console.log(`
  🏏 IPL Fantasy Auction Server
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🚀 Server running on port ${PORT}
  📡 WebSocket ready for connections
  🎲 ${iplPlayers.length} players loaded
  📦 Database connected
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB Connection Error:', err);
    });

export { io, app };

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import UserRouter from './routes/user/router.js';
import EventRoutes from './routes/events/router.js';

// db import
import './database/mongodb/config.js'

const app = express();

// express routes
app.use('/user', UserRouter);
app.use('/events', EventRoutes);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

export const socket = io;

const PORT = process.env.PORT || 3010;

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
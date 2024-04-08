import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from '../db/connectToMongoDB.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './socket/socket.js'; 


const PORT = process.env.PORT || 3001;

dotenv.config();

const corsOptions = {
	origin: 'http://localhost:3000', // Your React app's origin
	credentials: true, // This is important for cookies
};

app.use(cors(corsOptions));
app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`server is Running on port ${PORT}`);
});

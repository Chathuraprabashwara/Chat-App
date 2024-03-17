import express from 'express';
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from '../db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3001

dotenv.config();

app.use(express.json()) // to parse the incoming request with JSON payloads (from req.body)
app.use("/api/auth", authRoutes)

app.listen(PORT,() =>{
    connectToMongoDB()
    console.log(`server is Running on port ${PORT}`)
}); 


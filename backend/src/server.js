import express from 'express'
import authRouter from './routes/authRoutes.js';
import postRouter from './routes/postRoutes.js';
import { connectDb } from './config/database.js';
import cors from 'cors';

const app = express();

connectDb();
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(postRouter);

app.listen(process.env.PORT, ()=> console.log(`Server running on port ${process.env.PORT}`))

import mongoose from 'mongoose';
import "dotenv/config";

export async function connectDb(){
    const mongoUrl = process.env.DATABASE_URI    
    
    try {
        await mongoose.connect(mongoUrl)
        console.log('Connected to the database')
    } catch (err) {
        console.log('Error connecting to the database', err)
    }
}

export async function disconnectDb(){
    await mongoose.disconnect()
}
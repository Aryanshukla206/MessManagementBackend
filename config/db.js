import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI
    try {
        const conn = await mongoose.connect(MONGO_URI);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;

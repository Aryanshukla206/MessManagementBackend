import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false
        }).then(mongoose => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

module.exports = connectDB;
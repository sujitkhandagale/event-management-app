import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const RE_ATTEMPT = 3000; // 3 seconds
const MAX_ATTEMPTS = 3;

async function connectWithRetry(attempt = 1) {
  try {
    if (attempt > 1) {
      console.log(`initiated attempt ${attempt}`);
    }
    await mongoose.connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: 10000, // 10s
      socketTimeoutMS: 10000, // 10s
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error(`❌ MongoDB connection error (Attempt ${attempt})`, err.message || 'failed to connect db');
    if (attempt < MAX_ATTEMPTS) {
      console.log(`🔄 Retrying in ${RE_ATTEMPT / 1000}s...`);
      setTimeout(() => connectWithRetry(attempt + 1), RE_ATTEMPT);
    } else {
      console.error('❌ Max connection attempts reached. Exiting...');
      process.exit(1); // optional, stop the app
    }
  }
}

// Start connection
connectWithRetry().then();

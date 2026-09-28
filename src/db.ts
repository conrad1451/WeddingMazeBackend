// src/db.ts

import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI as string);
  isConnected = db.connections[0].readyState === 1;
};
import mongoose, { Connection } from "mongoose";

declare global {
  // Allow global `var` declarations
  // to prevent TypeScript errors in development
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

// Global cache (prevent multiple connections in dev)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    // Already connected
    return cached.conn;
  }

  if (!cached.promise) {
    // Create new connection
    cached.promise = mongoose
      .connect(process.env.MONGO_URI as string)
      .then((m) => m.connection);
  }

  // Wait for connection
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

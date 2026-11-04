// Import the `MongoClient` class from the `mongodb` library.
import { MongoClient } from 'mongodb';

// Set up a variable to cache the database connection between requests.
let cachedDb = null;

// Define an asynchronous function that connects to the database.
async function connectToDatabase() {
  // If the database connection is already cached, return it.
  if (cachedDb) {
    return cachedDb;
  }

  // Read the URI here, not at import time, so the demo login works without a database.
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  // Otherwise, connect to the database and cache the connection.
  const client = new MongoClient(uri);
  await client.connect();
  cachedDb = client.db();
  return cachedDb;
}

// Export the `connectToDatabase()` function so it can be used in other parts of the code.
export { connectToDatabase };

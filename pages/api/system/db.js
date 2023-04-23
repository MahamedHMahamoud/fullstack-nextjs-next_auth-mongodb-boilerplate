// Import the `MongoClient` class from the `mongodb` library.
import { MongoClient } from 'mongodb';

// Get the MongoDB connection URI from an environment variable.
const uri = process.env.MONGODB_URI;

// Create a new MongoDB client instance with the URI and options.
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up a variable to cache the database connection.
let cachedDb = null;

// Define an asynchronous function that connects to the database.
async function connectToDatabase() {
  // If the database connection is already cached, return it.
  if (cachedDb) {
    return cachedDb;
  }

  // Otherwise, connect to the database using the client instance.
  await client.connect();
  const db = client.db();

  // Cache the database connection and return it.
  cachedDb = db;
  return db;
}

// Export the `connectToDatabase()` function so it can be used in other parts of the code.
export { connectToDatabase };

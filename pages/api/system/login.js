import { connectToDatabase } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { mobile, password } = req.body ?? {};

  // Only accept plain strings, so a query object can never reach MongoDB
  if (typeof mobile !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Mobile and password are required.' });
  }

  try {
    // Connect to the database
    const db = await connectToDatabase();
    const usersCollection = db.collection('users'); // Use 'users' collection

    // Find a user with the given mobile number
    const user = await usersCollection.findOne({ mobile });

    // If user is not found or password doesn't match.
    // PS! This compares plain text to keep the tutorial simple. Hash passwords before real use.
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid mobile or password.' });
    }

    // Login successful
    return res.status(200).json({
      message: 'Login successful.',
      user: {
        id: user._id.toString(), // convert ObjectId to string
        name: user.fname,
        status: user.status,
      },
    });
  } catch (error) {
    console.error('Login failed:', error.message);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

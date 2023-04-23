import { connectToDatabase } from '../../../utils/db';

export default async function handler(req, res) {
  const { mobile, password } = req.body;

  try {
    // Connect to the database
    const db = await connectToDatabase();
    const usersCollection = db.collection('users'); // Use 'users' collection

    // Find a user with the given mobile number
    const user = await usersCollection.findOne({ mobile: mobile.toString() });

    // If user is not found or password doesn't match
    if (!user || user.password !== password) {
      return res.status(201).json({ message: 'Invalid mobile or password.' });
    }

    // Login successful
    return res.status(200).json({
      message: 'Login successful.',
      user: {
        id: user._id, // convert ObjectId to string
        fname: user.fname,
        status: user.status
      }
    });

  } catch (error) {
    // if error, return error
    return res.status(205).json({ message: 'Internal server error.' });
  }
}

import connectToDatabase from '../../../../../lib/db';
import User from '../../../../../models/User';

export default async function handler (req, res) {
  if (req.method !== 'GET') {
    return;
  }

  await connectToDatabase();

  const users = await User.find({})

  res.status(201).json(users);
}
import connectToDatabase from '../../../../../lib/db';
import User from '../../../../../models/User';

export default async function handler (req, res) {
  if (req.method !== 'DELETE') {
    return;
  }

  const { slug } = req.query;

  await connectToDatabase();

  const user = await User.deleteOne({ hash: slug });

  res.status(201).json({ message: 'User deleted'});
}
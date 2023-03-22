import connectToDatabase from '../../../../../lib/db';
import User from '../../../../../models/User';

export default async function handler (req, res) {
  if (req.method !== 'GET') {
    return;
  }

  const { slug } = req.query;

  await connectToDatabase();

  const user = await User.findOne({ hash: slug }).exec()

  console.log(user)

  res.status(201).json(user);
}
import connectToDatabase from '../../../../../lib/db';
import User from '../../../../../models/User';

export default async function handler (req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

  const { slug } = req.query;

  const data = req.body;

  const { firstName, age, tagFirst, tagSecond, tagThird } = data;

  await connectToDatabase();

  const query = { hash: slug }

  const user = await User.findOneAndUpdate(query, {$set: { firstName: firstName, age: age, tagFirst: tagFirst, tagSecond: tagSecond, tagThird: tagThird }});

  res.status(201).json({ message: 'User data updated! Refresh the page to see changes you have made'});
}
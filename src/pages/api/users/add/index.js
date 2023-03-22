import connectToDatabase from '../../../../../lib/db';
import User from '../../../../../models/User';

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { firstName, age, tagFirst, tagSecond, tagThird } = data;

  if (
    !firstName || firstName.trim() === ""
  ) {
    res.status(422).json({
      message:
        'The entered name is incorrect!',
    });
    return;
  }

  await connectToDatabase();

  const existingUser = await User.findOne({ firstName: firstName })

  if (existingUser) {
    res.status(422).json({ message: 'A user with that name already exists. Please choose a different name, it can also be your nickname' });
    return;
  }

  const user = await User.create(req.body);

  res.status(201).json({ message: 'User created!' });
}
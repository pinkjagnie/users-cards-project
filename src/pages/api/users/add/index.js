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

  const newUser = new User(req.body);

  const validateError = newUser.validateSync();
  console.log(validateError)
 
  try {
    await User.create(newUser);
    res.status(201).json({ message: 'User created!' })
  } catch(err) {
    console.log(err);
    if (err.errors.firstName) {
      res.status(422).json({ message: err.errors.firstName.message }); 
    } else if (err.errors.age) {
      res.status(422).json({ message: err.errors.age.message }); 
    } else if (err.errors.tagFirst) {
      res.status(422).json({ message: err.errors.tagFirst.message }); 
    } else if (err.errors.tagSecond) {
      res.status(422).json({ message: err.errors.tagSecond.message }); 
    } else if (err.errors.tagThird) {
      res.status(422).json({ message: err.errors.tagThird.message }); 
    }
  }

}
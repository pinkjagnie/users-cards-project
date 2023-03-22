import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: String,
  age: Number,
  tagFirst: String,
  tagSecond: String,
  tagThird: String
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
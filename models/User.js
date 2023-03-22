import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  tagFirst: String,
  tagSecond: String,
  tagThird: String
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
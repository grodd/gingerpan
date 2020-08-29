const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true},
  name: { type: String, required: true},
  noOfOrders: { type: Number, required: false}
});

const User = mongoose.model('users', userSchema);

module.exports = User;
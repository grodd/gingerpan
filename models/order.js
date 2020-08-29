const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  subtotal: { type: Number, required: true},
  date: { type: Date, required: true}
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
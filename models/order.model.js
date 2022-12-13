const mongoose = require("mongoose");
const path = require("path");
const schema = mongoose.Schema;

const Order = new schema({
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }, count: {
      type: Number,
      required: false,
      default: 1
    }
  }],
  time: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = mongoose.model("Order", Order);

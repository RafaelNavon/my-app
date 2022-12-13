const mongoose = require("mongoose");
const path = require("path");
const schema = mongoose.Schema;

const ShoppingCart = new schema({
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
  active: {
    type: Boolean,
    default: true
  },
  totalPrice: {
    type: Number,
    min: 0,
    default:0
  }
});

module.exports = mongoose.model("ShoppingCart", ShoppingCart);

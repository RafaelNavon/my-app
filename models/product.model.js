const mongoose = require("mongoose");
const path = require("path");
const schema = mongoose.Schema;

const Product = new schema({

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  picture: {
    type: String
    }
});

module.exports = mongoose.model("Product", Product);

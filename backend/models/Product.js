const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    maxlength: [20, "Name can not be more than 20 characters"]
  },
  price: {
    type: Number,
    required: [true, "Please add a price"]
  },
  brand: {
    type: String,
    maxlength: [20, "Brand can not be more than 20 characters"]
  },
  description: {
    type: String,
    maxlength: [50, "Description can not be more than 50 characters"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", ProductSchema);

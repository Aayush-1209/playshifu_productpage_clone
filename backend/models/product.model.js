const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  age: { type: String, required: true },
  images: [String],
  features: [String],
  includes: [String],
  highlights: [String],
  specifications: {
    age: String,
    batteries: String,
    dimensions: String,
    weight: String
  },
  rating: { type: Number, default: 0 },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Product", productSchema);

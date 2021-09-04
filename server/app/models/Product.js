const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    itemNo: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      required: true,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    previousPrice: {
      type: Number,
    },
    categories: {
      type: Array,
      required: true,
    },
    imageUrls: [
      {
        type: String,
        required: true,
      },
    ],
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    sizes: {
      type: Array,
    },
    productUrl: {
      type: String,
    },
    brand: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    manufacturerCountry: {
      type: String,
    },
    seller: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema);

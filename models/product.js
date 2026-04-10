const mongoose = require('./db');

const productSchema = new mongoose.Schema({
  storeId: String,
  storeName: String,
  productId: String,
  productName: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
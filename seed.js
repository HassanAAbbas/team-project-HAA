require('./models/db');
const Product = require('./models/product');

async function seed() {
  await Product.deleteMany({});

  await Product.insertMany([
    {
      storeId: "store-001",
      storeName: "Hassan Store",
      productId: "p1",
      productName: "Laptop",
      price: 800.00
    },
    {
      storeId: "store-001",
      storeName: "Hassan Store",
      productId: "p2",
      productName: "Mouse",
      price: 15.99
    },
    {
      storeId: "store-001",
      storeName: "Hassan Store",
      productId: "p3",
      productName: "Keyboard",
      price: 29.99
    },
    {
      storeId: "store-001",
      storeName: "Hassan Store",
      productId: "p4",
      productName: "Monitor",
      price: 200.00
    },
    {
      storeId: "store-001",
      storeName: "Hassan Store",
      productId: "p5",
      productName: "Headphones",
      price: 49.99
    }
  ]);

  console.log("Data inserted");
  process.exit();
}

seed();

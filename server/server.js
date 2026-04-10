const express = require('express');
const path = require('path');
const cors = require('cors');

// Connect DB
require('../models/db');

// Import routes
const productRoutes = require('../routes/products');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/products', productRoutes);

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

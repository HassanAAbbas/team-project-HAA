const mongoose = require('mongoose');

require('dotenv').config();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('❌ Error:', err);
});

module.exports = mongoose;

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('BloomTechUS API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

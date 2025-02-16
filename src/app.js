const express = require('express');
const cors = require('cors'); // Add this line
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(cors()); // Add this line
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);

module.exports = app;
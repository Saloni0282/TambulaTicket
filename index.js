// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./app/routes/authRoutes');
const ticketRoutes = require('./app/routes/ticketRoutes');
require('dotenv').config();
const app = express();

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API assignment server is running');
});

// Routes
app.use('/auth', authRoutes);
app.use('/tickets', ticketRoutes);

// Database connection URL
const dbUrl = process.env.mongoURL; // Replace with your environment variable name

// Connect to the database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful and error connections
db.on('connected', () => {
    console.log('Connected to the database');
});

db.on('error', (error) => {
    console.error('Database connection error:', error);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

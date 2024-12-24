const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./routes/appointments');

const app = express();
const PORT = 5001;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/appointments', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', appointmentRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Appointment API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

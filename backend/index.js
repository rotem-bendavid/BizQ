const admin = require('firebase-admin');
const serviceAccount = require('./firebase-admin-key.json'); // Adjust path if necessary

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const cors = require('cors'); // Import cors

const express = require('express');
const bodyParser = require('body-parser');
const registerRoutes = require('./routers/RegisterRoute');
const scheduleAppointmentRoutes = require('./routers/ScheduleAppointmentRoute');

// Firebase Admin initialization

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this domain
  methods: ['GET', 'POST'], // Allow only specific methods if needed
  allowedHeaders: ['Content-Type'], // Allow specific headers
};
app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/register', registerRoutes);
app.use('/scheduleappointment', scheduleAppointmentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the Server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const Appointment = require('./models/Appointment'); // Adjust the path to your model
const router = express.Router();

// Endpoint to get booked appointments for a specific date
router.get('/appointments/booked', async (req, res) => {
  const { date } = req.query; // Expecting date in 'YYYY-MM-DD' format

  if (!date) {
    return res.status(400).json({ error: 'Date is required' });
  }

  try {
    // Parse the input date string into a date object (for MongoDB query)
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999); // Set the end of day (23:59:59)

    // Query MongoDB to find appointments for the given date
    const appointments = await Appointment.find({
      appointmentDate: { $gte: startOfDay, $lt: endOfDay },
    }).select('appointmentTime'); // Only return the appointment times

    // Extract the times from the results
    const bookedTimes = appointments.map((appointment) => appointment.appointmentTime);

    // Return the booked times
    res.status(200).json({ bookedTimes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching appointments.' });
  }
});

module.exports = router;

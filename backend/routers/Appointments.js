const express = require('express');
const {
  getTodayAppointments,
  getAllAppointments,
} = require('../services/Appointments');

const router = express.Router();

router.post('/getTodayAppointments', getTodayAppointments);
router.post('/getAllAppointments', getAllAppointments);

module.exports = router;

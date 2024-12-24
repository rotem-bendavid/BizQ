const express = require('express');
const { getTodayAppointments } = require('../services/Appointments');

const router = express.Router();

router.post('/getTodayAppointments', getTodayAppointments);

module.exports = router;

const express = require('express');
const registerBusinessController = require('../controller/RegisterController');

const router = express.Router();

router.post('/', registerBusinessController);

module.exports = router;

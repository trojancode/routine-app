const express = require('express');
const { createApp } = require('../Controllers');
const router = express.Router();


router.post('/create', createApp);
module.exports = router;
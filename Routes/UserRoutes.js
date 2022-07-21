const express = require('express');
const { UserController } = require('../Controllers');
const router = express.Router();


router.post('/create', UserController);
module.exports = router;
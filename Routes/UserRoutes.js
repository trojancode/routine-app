const express = require('express');
const { createUser } = require('../Controllers');
const router = express.Router();


router.post('/create', createUser);
module.exports = router;
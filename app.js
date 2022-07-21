const express = require('express');
const connectDB = require('./DB/db');
const app = express()
const port = process.env.PORT || 3000

require('dotenv').config();

connectDB()

app.get('/', (req, res) => {
    res.send('hey!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require('./DB/db');
const { UserRoutes } = require('./Routes');
const app = express()
const port = process.env.PORT || 3000

require('dotenv').config();

connectDB()

app.use(bodyParser.json())

app.use('/api', UserRoutes )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
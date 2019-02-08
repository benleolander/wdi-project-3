require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.listen(4000, () => console.log('Express is running on Port 4000'))

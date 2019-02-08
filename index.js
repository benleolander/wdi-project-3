require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect = ('mongodb://localhost/homemade')

app.use(bodyParser.json())

app.listen(4000, () => console.log('Express is running on Port 4000'))

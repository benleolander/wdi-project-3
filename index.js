require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

mongoose.connect(process.env.MONGOD_URI)

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(4000, () => console.log('Express is running on Port 4000'))

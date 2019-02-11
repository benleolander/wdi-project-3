require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
mongoose.plugin(require('mongoose-unique-validator'))
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const errorHandling = require('./lib/errorHandling')

const { env, dbURI, port } = require('./config/environment')

const app = express()


mongoose.connect(dbURI, { useNewUrlParser: true })

// app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandling)

app.get('/', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`Express is running on Port ${port}, in Environment ${env}`))

module.exports = app

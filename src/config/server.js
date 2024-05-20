const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Routes = require('../routes/Ingresados.routes')

app.use(cors())
app.use(express.json())
app.use(Routes)

app.set("port", process.env.PORT || port)

module.exports = app;
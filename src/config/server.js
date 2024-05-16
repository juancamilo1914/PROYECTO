const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const Routes = require("ruta de carpeta rutes")

app.use(cors())
app.use(express.json())
app.use(Routes)

port.set("port", process.env.PORT || port)

module.exports = app;
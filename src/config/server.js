const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Routes = require('../routes/Ingresados.routes')
const RoutesPropietario = require('../routes/IngresarPropietario.routes')
const RoutesInventario = require("../routes/Inventario.routes")
const RoutesPresupuesto = require("../routes/Presupuesto.routes")

app.use(cors())
app.use(express.json())
app.use(Routes)
app.use(RoutesPropietario)
app.use(RoutesInventario)
app.use(RoutesPresupuesto)

app.set("port", process.env.PORT || port)

module.exports = app;
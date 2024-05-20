const {Router} = require('express')
const ingRoutes = Router()
const { obtenerIngresados, nuevoIngreso, eliminarVehiculo} = require('../controllers/Ingresados.controller')

ingRoutes.get("/vehiculosIngresados", obtenerIngresados)
ingRoutes.post("/ingresarVehiculo", nuevoIngreso)
ingRoutes.delete("/borrar/:id", eliminarVehiculo);

module.exports = ingRoutes
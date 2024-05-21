const {Router} = require('express')
const ingRoutes = Router()
const { obtenerIngresados, nuevoIngreso, eliminarVehiculo, actualizarVehiculo} = require('../controllers/Ingresados.controller')

ingRoutes.get("/vehiculosIngresados", obtenerIngresados)
ingRoutes.put("/actualizar/:id", actualizarVehiculo)
ingRoutes.post("/ingresarVehiculo", nuevoIngreso)
ingRoutes.delete("/borrar/:id", eliminarVehiculo);

module.exports = ingRoutes
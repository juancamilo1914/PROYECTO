const {Router} = require('express')
const ingRoutes = Router()
const { obtenerPropietario, nuevoPropietario, eliminarPropietario} = require('../controllers/IngresarPropietario.controller')

ingRoutes.get("/propietariosIngresados", obtenerPropietario)
ingRoutes.post("/nuevoPropietario", nuevoPropietario)
ingRoutes.delete("/borrar/:id", eliminarPropietario)

module.exports = ingRoutes
const { Router } = require("express")
const ingRoutes = Router()
const { obtenerTabla } = require("../controllers/Clear-Mecanic.controller")

ingRoutes.get("obtenerTabla", obtenerTabla)

module.exports = ingRoutes
const express = require("express");
const ingRoutes = express.Router();
const { obtenerPresupuesto, crearPresupuesto, eliminarPresupuesto} = require("../controllers/presupuesto.controller");

ingRoutes.get("/obtenerPresupuesto", obtenerPresupuesto);
ingRoutes.post("/crearPresupuesto", crearPresupuesto);
ingRoutes.delete("/eliminarPresupuesto", eliminarPresupuesto);

module.exports = ingRoutes
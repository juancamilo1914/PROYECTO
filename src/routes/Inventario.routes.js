const express = require("express");
const ingRoutes = express.Router();
const { obtenerInventario, crearInventario, eliminarInventario} = require("../controllers/Inventario.controller");


ingRoutes.get("/obtenerInventario", obtenerInventario);
ingRoutes.post("/crearInventario", crearInventario);
ingRoutes.delete("/borrar/:id", eliminarInventario);

module.exports = ingRoutes
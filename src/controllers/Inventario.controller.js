const InventarioModel = require("../models/Inventario.Model");
const controlador = {};

controlador.obtenerInventario = async (req, res) => {
    try {
        const inventario = await InventarioModel.find();
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el inventario" });
    }
};

controlador.crearInventario = async (req, res) => {
    try {
        const nuevoInventario = new InventarioModel(req.body);
        const inventarioGuardado = await nuevoInventario.save();

        res.status(201).json(inventarioGuardado);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el inventario", error });
    }
};

controlador.eliminarInventario = async (req, res) => { 
    try {
        const { id } = req.params;
        const inventarioEliminado = await InventarioModel.findByIdAndDelete(id); // Cambiado de findIdAndDelete a findByIdAndDelete
        if (!inventarioEliminado) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }
        res.status(200).json({ message: "Inventario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el inventario" });
    }
};

module.exports = controlador;

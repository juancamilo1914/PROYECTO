const PresupuestoModel = require("../models/Presupuesto.Model");
const controlador = {};


controlador.crearPresupuesto = async (req, res) => {
    try{
        const { total, anticipo, saldo} = req.body;
        const nuevoPresupuesto = new PresupuestoModel({ total, anticipo, saldo});
        await nuevoPresupuesto.save();
        res.json({ message: "Presupuesto agregado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Hubo un error al agregar el presupuesto"});
    }
};

controlador.obtenerPresupuesto = async (req, res) => {
    try{
        const presupuesto = await PresupuestoModel.find();
        res.status(200).json(presupuesto);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener los presupuestos"})
    }
}

controlador.eliminarPresupuesto = async (req,res) => {
    try{
        const { id } = req.params;
        await PresupuestoModel.findByIdAndDelete(id);
        res.status(200).json({ message: "presupuesto eliminado con exito"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Hubo un error al eliminar el presupuesto"});
    }
}

module.exports = controlador
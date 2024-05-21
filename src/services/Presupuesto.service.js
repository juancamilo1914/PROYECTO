const PresupuestoModel = require("../models/Presupuesto.Model");

const  obtenerPresupuesto = async () => {
    return await PresupuestoModel.find()
}
const eliminarPresupuesto = async (id) => {
    try {
        const Presupuesto = await PresupuestoModel.findOne({ _id: id});
        if (Presupuesto) {
            await PresupuestoModel.findOneAndDelete({_id: id});
            return "Presupuesto eliminado con exito";
        }else {
            return "Presupuestoo no encontrado";
        }
    }catch (error) {
        return "Ocurrio un error al eliminar el Presupuesto"
    }
};
const ingresadosModel = require("../models/IngresarDueño.Model")

const obtenerPropietario = async () => {
    return await ingresadosModel.find()
}
const eliminarPropietario = async (id) => {
    try {
        const Propietario = await ingresadosModel.findOne({ _id: id});
        if (Propietario) {
            await ingresadosModel.findOneAndDElete({_id: id});
            return "Propietario eliminado con exito";
        }else {
            return "No se encontro el propietario";
        }
    } catch (error) {
        return "Ocurrio un error eliminando el Propietario";
    }
};
module.exports = { obtenerPropietario, eliminarPropietario}
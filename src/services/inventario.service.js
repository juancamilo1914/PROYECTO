const InventarioModel = require("../models/Inventario.Model")

const  obtenerInventario = async () => {
    return await InventarioModel.find()
}
const inventarioEliminado = async (id) => {
    try {
        const inventario = await InventarioModel.findOne({ _id: id});
        if (inventario) {
            await InventarioModel.findOneAndDelete({_id: id});
            return "inventario eliminado con exito";
        }else {
            return "inventario no encontrado";
        }
    }catch (error) {
        return "Ocurrio un error al eliminar el inventario"
    }
};
module.exports = { obtenerInventario, inventarioEliminado}
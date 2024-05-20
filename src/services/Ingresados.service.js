const ingresadosModel = require("../models/Ingresados.Model")

const obtenerIngresados = async () => {
    return await ingresadosModel.find()
}
const eliminarVehiculo = async (id) => {
    try {
      const vehiculo = await ingresadosModel.findOne({ _id: id });
      if (vehiculo) {
        await ingresadosModel.findOneAndDelete({ _id: id });
        return "Vehiculo eliminado con exito";
      } else {
        return "No se encontro este Vehiculo";
      }
    } catch (error) {
      return "Ocurrio un error eliminado el Vehiculo seleccionado";
    }
  };
module.exports = { obtenerIngresados,
eliminarVehiculo }
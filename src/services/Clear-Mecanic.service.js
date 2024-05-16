const ingresadosModel = require("../models/clear-mecanicModels")

const ObtenerIngresados = async () => {
    return await ingresadosModel.find()
}


module.exports = {ObtenerIngresados}
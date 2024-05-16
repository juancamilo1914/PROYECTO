const ingresadosModel = require("../models/clear-mecanicModels")
const respuesta = require("../helpers/helpersClear");
const { ObtenerIngresados } = require("../services/Clear-Mecanic.service");

const controlador = {};

controlador.ObtenerIngresados = async (req, res) => {
    const listaIngresados = await ingresadosModel.find()
    res.json(listaIngresados)
}

controlador.NuevaTabla = async (req, res) => {
    try{
        const body = req.body;
        const NuevaTabla = new ingresadosModel(body)

        await NuevaTabla.save();

        respuesta.status = 200;
        respuesta.message = "tabla creada Exitosamente"
        respuesta.data = body;

        res.status(200).send(respuesta)
    }catch(error){
        const errores = error.errores
        const errors = {}

        for (let i in errores){
            errors[i] = errores[i].message
        }

        respuesta.status = 500
        respuesta.message = "ocurrio un error al guardar la informacion"
        respuesta.data = {errors}

        res.status(500).json(respuesta)
    }
};

module.exports = controlador
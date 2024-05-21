const ingresadosModel = require('../models/IngresarDueño.Model')
const respuesta = require('../helpers/helpersClear');
const { eliminarPropietario } = require('../services/IngresarPropietario.service');

const controlador = {};

controlador.obtenerPropietario = async (req, res) => {
    const listaIngresados = await ingresadosModel.find()
    res,json(listaIngresados)
}

controlador.nuevoPropietario = async (req, res) => {
    try{
        const body = req.body;
        const nuevoPropietario = new ingresadosModel(body)
        
        await nuevoPropietario.save();

        respuesta.status = 200;
        respuesta.message = 'Propietario ingresado con éxito';
        respuesta.data = body;

        res.status(200).send(respuesta)
    }catch(error){
        const errores = error.errors
        const errors = {}

        for (let i in errores){
            errors[i] = errores[i].message
        }

        respuesta.status = 500
        respuesta.message = 'Error al ingresar propietario'
        respuesta.data = {errors}

        res.status(500).json(respuesta)
    }
}
controlador.eliminarPropietario = async (req, res) => {
    const id = req.params.id;
    const response = await eliminarPropietario(id);
    res.send(response);
};

module.exports = controlador
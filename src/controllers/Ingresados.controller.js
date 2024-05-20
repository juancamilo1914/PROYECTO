const ingresadosMoodel = require('../models/Ingresados.Model')
const respuesta = require('../helpers/helpersClear');
const { eliminarVehiculo } = require('../services/Ingresados.service');

const controlador = {};

controlador.obtenerIngresados = async (req, res) => {
    const listaIngresados = await ingresadosModel.find()
    res.json(listaIngresados)
}

controlador.nuevoIngreso = async (req, res) => {
    try{
        const body = req.body;
        const nuevoVehiculo = new ingresadosMoodel(body)

        await nuevoVehiculo.save();

        respuesta.status = 200;
        respuesta.message = "Vehiculo Ingresado Exitosamente"
        respuesta.data = body;
        
        res.status(200).send(respuesta)
    }catch(error){
        const errores = error.errors
        const errors = {}

        for (let i in errores){
            errors[i] = errores[i].message
        }

        respuesta.status = 500
        respuesta.message = "Ocurrio un error al guardar la informacion del Vehiculo"
        respuesta.data = {errors}

        res.status(500).json(respuesta)
    }
}
controlador.eliminarVehiculo = async (req, res) => {
    const id = req.params.id;
    const response = await eliminarVehiculo(id);
    res.send(response);
};

module.exports = controlador
const IngresadosModel = require('../models/Ingresados.Model');
const respuesta = require('../helpers/helpersClear');
const { eliminarVehiculo } = require('../services/Ingresados.service');

const controlador = {};

controlador.obtenerIngresados = async (req, res) => {
    try {
        const listaIngresados = await IngresadosModel.find();
        res.json(listaIngresados);
    } catch (error) {
        console.error('Error al obtener la lista de vehículos ingresados:', error);
        res.status(500).json({ message: 'Error al obtener la lista de vehículos ingresados' });
    }
};

controlador.nuevoIngreso = async (req, res) => {
    try {
        const body = req.body;
        const nuevoVehiculo = new IngresadosModel(body);
        await nuevoVehiculo.save();

        respuesta.status = 200;
        respuesta.message = "Vehículo ingresado exitosamente";
        respuesta.data = body;
        
        res.status(200).send(respuesta);
    } catch (error) {
        console.error('Error al guardar la información del vehículo:', error);
        res.status(500).json({ message: 'Ocurrió un error al guardar la información del vehículo' });
    }
};

controlador.actualizarVehiculo = async (req, res) => {
    try {
        const vehiculoId = req.params.id;
        const newData = req.body;

        // Busca el vehículo por su ID y actualiza sus datos
        let vehiculo = await IngresadosModel.findByIdAndUpdate(vehiculoId, newData, { new: true });

        if (!vehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json(vehiculo);
    } catch (error) {
        console.error('Error al actualizar el vehículo:', error);
        res.status(500).json({ message: 'Hubo un error al actualizar el vehículo' });
    }
};

controlador.eliminarVehiculo = async (req, res) => {
    const id = req.params.id;
    const response = await eliminarVehiculo(id);
    res.send(response);
};

module.exports = controlador;

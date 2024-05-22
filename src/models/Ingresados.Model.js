// src/models/Ingresados.Model.js
const { Schema, model, default: mongoose, isValidObjectId, Types } = require("mongoose");
const { PropietarioSchema } = require("./IngresarDueño.Model"); // Importar PropietarioSchema

const EsquemaDeIngreso = new Schema({
    Vehiculo: {
        type: String,
        required: [true, "El nombre del vehículo es requerido."]
    },
    Color: {
        type: String,
        required: [true, "El color del vehículo es requerido."]
    },
    Modelo: {
        type: Number,
        required: [true, "El modelo es requerido."]
    },
    referencia: {
        type: String,
        required: [true, "La referencia es requerida."]
    },
    Descripcion: {
        type: String,
        required: [true, "Por favor, describa a detalle la situación de ingreso del vehículo."]
    },
    Estado: {
        type: String,
        enum: ['Ingresado', 'En reparación', 'Reparado'],
        required: true,
    },
    observacion: {
        type: String,
    },
    imagen: {
        type: String,
        required: [true, "Ingrese el link de la imagen."]
    },
    propietario: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'PropietariosIngresados',
        required: false,
    },
})
module.exports = model("VehiculosIngresados", EsquemaDeIngreso, "VehiculosIngresados");
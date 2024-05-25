// src/models/IngresarDueño.Modjsel.
const { Schema, model } = require("mongoose");

const PropietarioSchema = new Schema({
    Nombre: {
        type: String,
        required: [true, "El nombre del propietario es requerido."]
    },
    Direccion: {
        type: String,
        required: [true, "La dirección del propietario es requerida."]
    },
    Telefono: {
        type: String,
        required: [true, "El teléfono del propietario es requerido."]
    },
    Email: {
        type: String,
        required: [true, "El email del propietario."]
    }
    // Añadir más campos según sea necesario
});

module.exports = model("PropietariosIngresados", PropietarioSchema, "PropietariosIngresados");
module.exports.PropietarioSchema = PropietarioSchema; // Exportar el esquema

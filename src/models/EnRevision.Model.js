//Campos actuamente en desarrollo
const { Schema , model } = require("mongoose")

const EsquemaDeRevision = new Schema({
    
    Vehiculo:{
        type:String,
        required: [true, "El nombre del vehiculo es requerido."]
    },
    Color:{
        type:String,
        required: [true, "El color del vehiculo es requerido"]
    },
    Modelo:{
        type:Number,
        required: [true, "el modelo es requerido."]
    },
    referencia:{
        type:String,
        required: [true, "La referencia es Requerida."]
    },
    Descripcion:{
        type:String,
        required: [true, "por favor, describa a detalle la situacion Actual del vehiculo"]
    },
    

})
module.exports = model("VehiculosEnRevision", EsquemaDeRevision, "VehiculosEnRevision")
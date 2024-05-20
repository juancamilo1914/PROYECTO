const { Schema , model } = require("mongoose")

const EsquemaDeIngreso = new Schema({
    
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
        required: [true, "por favor, describa a detalle la situacion de ingreso del vehiculo"]
    },
    imagen:{
        type:String,
        required:[true, "ingrese el link de la imagen."]
    }

})
module.exports = model("VehiculosIngresados", EsquemaDeIngreso, "VehiculosIngresados") 
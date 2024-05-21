const {Schema, model} = require("mongoose");

const PresupuestoSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    anticipo: {
        type: Number,
        required: true
    },
    saldo: {
        type: Number,
        required: true
    }
});

const PresupuestoModel = model("presupuesto", PresupuestoSchema);
module.exports = PresupuestoModel;
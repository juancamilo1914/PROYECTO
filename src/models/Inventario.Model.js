const { Schema, model } = require('mongoose');

const inventarioSchema = new Schema({
    LucesFrontales: {
        type: Boolean,
        default: false
    },
    // Tapetes: {
    //     type: Boolean,
    //     default: false
    // },
    // Antenas: {
    //     type: Boolean,
    //     default: false
    // },
    // EspejosLaterales: {
    //     type: Boolean,
    //     default: false
    // },
    // CristalesSanos: {
    //     type: Boolean,
    //     default: false
    // },
    // Emblemas: {
    //     type: Boolean,
    //     default: false
    // },
    // Llantas: {
    //     type: Boolean,
    //     default: false
    // },
    // TaponesRuedas: {
    //     type: Boolean,
    //     default: false
    // },
    // MoldurasCompletas: {
    //     type: Boolean,
    //     default: false
    // },
    // TaponGasolina: {
    //     type: Boolean,
    //     default: false
    // },
    // Testigos: {
    //     type: Boolean,
    //     default: false
    // },
    // Abs: {
    //     type: Boolean,
    //     default: false
    // },
    // Airbags: {
    //     type: Boolean,
    //     default: false
    // },
    // Check: {
    //     type: Boolean,
    //     default: false
    // },
    // Freno: {
    //     type: Boolean,
    //     default: false
    // },
    // Bateria: {
    //     type: Boolean,
    //     default: false
    // },
    // Aceite: {
    //     type: Boolean,
    //     default: false
    // },
    // Derrape: {
    //     type: Boolean,
    //     default: false
    // },
})

const InventarioModel = model("Inventario", inventarioSchema);
module.exports = InventarioModel;
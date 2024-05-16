const mongoose = require('mongoose');

// Esquema para el dueño del vehículo
const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

// Esquema para el vehículo
const VehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  owner: {
    type: OwnerSchema,
    required: true
  }
});

// Modelos
const Owner = mongoose.model('Owner', OwnerSchema);
const Vehicle = mongoose.model('Vehicle', VehicleSchema);

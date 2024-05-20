const mongoose = require ("mongoose")

mongoose.connect('mongodb://localhost:27017/ingreso_de_datos')
  .then(() => console.log('Conectado exitosamente a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

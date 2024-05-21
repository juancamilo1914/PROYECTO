const mongoose = require ("mongoose")

mongoose.connect('mongodb+srv://manuelchaux32:HlRNOM1hOujl2ce4@clearmechanic.slfnrxu.mongodb.net')
  .then(() => console.log('Conectado exitosamente a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

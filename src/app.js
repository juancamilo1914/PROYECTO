const servidor = require('./config/server');
require('./config/database')

servidor.listen(servidor.get("port"), () => {
    console.log("el servidor se encuentra en funcionamiento en el puerto 3000.");
})
const servidor = require('./src/config/server');
require('./src/config/database')

servidor.listen(servidor.get("port"), () => {
    console.log("el servidor se encuentra en funcionamiento en el puerto 3000.");
})
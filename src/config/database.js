const mongoose = require("mongoose");
const url = "mongodb+srv://juanvalencia191410:KCK46sgssfNLuBX3@clearmechanic.slfnrxu.mongodb.net";

mongoose
    .connect(url)
    .then(() => {
        console.log("Base de datos en ejecución");
    })
    .catch((error) => {
        console.log("Error al conectar, mira el error: " + error);
    });

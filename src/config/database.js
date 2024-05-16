const mongoose = require ("mongoose")
const url = ("")
mongoose
    .connect(url,{
        useNewUrlparser: true,
        userUnifiedTopology: true
    })
    .then (() => {
        console.log("base de datos en ejecucion");
    })
    .catch ((error) => {
        console.log("error al conectar mira el error:" + error);
    })
const express= require ('express');
const app= express();
const path = require ('path');

//iniciar server web
app.listen(3000,() =>console.log("server running http://localhost:3000"));

//directorio publico
app.use(express.static(path.resolve(__dirname,"../public")));

//routas para acceso web
app.use(require("./routes/web"));







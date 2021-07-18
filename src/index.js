const express= require ('express');
const app= express();
const path = require ('path');
const web= require("./routes/web")


//iniciar server web
app.listen(3000,() =>console.log("server running http://localhost:3000"));

//directorio publico
app.use(express.static("../public"))

//app.use(express.static(path.resolve(__dirname,"../public")));

//rutas para acceso web
app.use("/",web);

// seteo de EJS
app.set("view engine", "ejs")







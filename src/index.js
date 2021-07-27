const express= require ('express');
const app= express();
const path = require ('path');
const router= require("./routes/web")
const productRoutes = require("./routes/productRoutes");


//iniciar server web
app.listen(3000,() =>console.log("server running http://localhost:3000"));

//directorio publico
app.use(express.static("public"))

//app.use(express.static(path.resolve(__dirname,"../public")));

//rutas para acceso web
app.use("/",router);
app.use("/product", productRoutes);

// seteo de EJS
app.set("view engine", "ejs")

//seteo de carpeta de views
app.set("views", path.resolve(__dirname,"./views"))







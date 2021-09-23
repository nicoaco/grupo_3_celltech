const express= require ('express');
const app= express();
const path = require ('path');
const methodOverride =require("method-override");
const router= require("./routes/web")
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const session = require('express-session');
const cookie = require('cookie-parser');


//iniciar server web
app.listen(3000,() =>console.log("server running http://localhost:3000"));

//directorio publico
app.use(express.static("public"))

//app.use(express.static(path.resolve(__dirname,"../public")));
app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.use(methodOverride("_method"));
app.use(cookie());
app.use(session({secret : 'celltech',
                resave : true,
                saveUninitialized : true}));

//Customs Middlewares
app.use(require("./middlewares/user"));
//rutas para acceso web
app.use("/",router);
app.use("/product", productRoutes);
app.use("/user", userRoutes);




// seteo de EJS
app.set("view engine", "ejs")

//seteo de carpeta de views
app.set("views", path.resolve(__dirname,"./views"))







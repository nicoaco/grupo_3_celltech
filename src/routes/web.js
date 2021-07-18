const express=require("express");
const app = express();


const mainController= require("../controllers/mainController")

//rutas del sitio
app.get ("/",mainController.main);
app.get ("/login",mainController.login);
app.get ("/shop",mainController.shop);
app.get ("/register",mainController.register);
app.get ("/product",mainController.product);


module.exports = app;
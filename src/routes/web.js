const express=require("express");
const app = express();
const path=require("path");

//rutas del sitio
app.get ("/",(req,res)=>res.sendFile(path.resolve(__dirname,"../views","index.html")));
app.get ("/loguin",(req,res)=>res.sendFile(path.resolve(__dirname,"../views","loguin.html")));
app.get ("/shop",(req,res)=>res.sendFile(path.resolve(__dirname,"../views","shop.html")));
app.get ("/register", (req,res) => res.sendFile(path.resolve(__dirname,"../views","register.html")));
app.get ("/product", (req,res) => res.sendFile(path.resolve(__dirname,"../views","product.html")));

module.exports = app;
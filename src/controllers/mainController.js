//const path=require("path");
const mainController = {
    main:(req,res)=>res.render("index",{estilo:"index.css", titulo:"Celltech - Home"}),
    login:(req,res)=>res.render("login",{estilo:"login.css", titulo:"Celltech - Login"}),
    shop:(req,res)=>res.render("shop",{estilo:"shop.css", titulo:"Celltech - Shop"}),
    register:(req,res) => res.render("register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    product:(req,res) => res.render("product",{estilo:"product.css", titulo:"Celltech - Producto"})
}

module.exports= mainController
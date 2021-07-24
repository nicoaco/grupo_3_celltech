//const path=require("path");
const mainController = {
    main:(req,res)=>res.render("index",{estilo:"index.css", titulo:"Celltech - Home"}),
    login:(req,res)=>res.render("./users/login",{estilo:"login.css", titulo:"Celltech - Login"}),
    shop:(req,res)=>res.render("./products/shop",{estilo:"shop.css", titulo:"Celltech - Shop"}),
    register:(req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    product:(req,res) => res.render("./products/product",{estilo:"product.css", titulo:"Celltech - Producto"}),
    create:(req,res) => res.render("./products/create",{estilo:"create.css", titulo:"Celltech - Create"}),
    edit:(req,res) => res.render("./products/update",{estilo:"edit.css", titulo:"Celltech - Edit"})
}

module.exports= mainController;
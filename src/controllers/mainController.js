//const path=require("path");
const mainController = {
    main:(req,res)=>res.render("index"),
    login:(req,res)=>res.render("login"),
    shop:(req,res)=>res.render("shop"),
    register:(req,res) => res.render("register"),
    product:(req,res) => res.render("product")
}

module.exports= mainController
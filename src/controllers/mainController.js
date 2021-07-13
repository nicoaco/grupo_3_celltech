const path=require("path");
const mainController = {
    main:(req,res)=>res.sendFile(path.resolve(__dirname,"../views","index.html")),
    login:(req,res)=>res.sendFile(path.resolve(__dirname,"../views","login.html")),
    shop:(req,res)=>res.sendFile(path.resolve(__dirname,"../views","shop.html")),
    register:(req,res) => res.sendFile(path.resolve(__dirname,"../views","register.html")),
    product:(req,res) => res.sendFile(path.resolve(__dirname,"../views","product.html"))
}

module.exports= mainController
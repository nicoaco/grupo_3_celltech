const productoModelo= require("../models/producto");
const marcaModelo= require("../models/marca");
const marca = require("../models/marca");


const productController = {
    product:(req,res) => res.render("./products/product",{ moviles: productoModelo.todos() ,estilo:"product.css", titulo:"Celltech - Producto"}),
    detail: (req,res) => res.render("./products/detail",{movil: productoModelo.buscar("id", req.params.id) ,estilo:"detail.css", titulo:"Celltech - Producto"}),
    create:(req,res) => res.render("./products/create",{estilo:"create.css", titulo:"Celltech - Create"}),
    edit:(req,res) => res.render("./products/update",{marca: marcaModelo.one(req.params.id), product:productoModelo.buscar("id",req.params.id),estilo:"edit.css", titulo:"Celltech - Edit"}),
    
    store:(req,res)=>{
        let stored= productoModelo.create(req.body)
        return stored? res.redirect("/product/"+store.id): res.send("hubo un error")
    },
    update:(req,res)=> {
        let updated= productoModelo.update(req.body)
        return updated? res.redirect("/product/"+updated.id): res.send("hubo un error")
    },

    delete:(req,res)=>{
        let deleted= productoModelo.delete(req.params.id)
        return res.render("/products/product")}
        
}

module.exports= productController;
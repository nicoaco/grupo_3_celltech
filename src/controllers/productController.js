const productoModelo= require("../models/producto");
const marcaModelo= require("../models/marca");
const marca = require("../models/marca");


const productController = {
    product:(req,res) => res.render("./products/product",{ moviles: productoModelo.todos() ,estilo:"product.css", titulo:"Celltech - Producto"}),
    detail: (req,res) => res.render("./products/detail",{movil: productoModelo.buscar("id", req.params.id) ,estilo:"detail.css", titulo:"Celltech - Producto"}),
    create:(req,res) => res.render("./products/create",{estilo:"create.css", titulo:"Celltech - Create"}),
    edit:(req,res) => res.render("./products/update",{marca: marcaModelo.buscar(req.params.id), product:productoModelo.buscar("id",req.params.id),estilo:"edit.css", titulo:"Celltech - Edit"}),
    
    store: (req,res) => res.render("./products/create",{producto: productoModelo.create(req.body, req.file), estilo:"create.css", titulo:"Celltech - Crear Producto"}),
    update: (req,res) => {
        let updated = productoModelo.update(req.body, req.params.id);
        return updated ? res.redirect("/product") : res.status(500).send("Error en la actualización");
    },
    
    delete: (req,res) => {
        let deleted = productoModelo.delete(req.params.id);
        return deleted ? res.redirect("/product") : res.status(500).send("Error en el borrado");
    }
    
    //res.render("./products/product",{moviles: productoModelo.todos(),producto: productoModelo.delete(req.params.id) ,estilo:"product.css", titulo:"Celltech - Productos"}),
    /*store:(req,res)=>{
        let stored= productoModelo.create(req.body)
        console.log(stored)
        return stored? res.redirect("/product/"+store.id): res.send("hubo un error")
    },
    update:(req,res)=> {
        let updated= productoModelo.update(req.body)
        console.log(updated)
        return updated? res.redirect("/product/"+updated.id): res.send("hubo un error")
    },

    delete:(req,res)=>{
        let deleted= productoModelo.delete(req.params.id)
        return res.render("/products/product")}
        */
}

module.exports= productController;
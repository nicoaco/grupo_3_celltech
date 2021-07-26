const productoModelo= require("../models/producto");

const productController = {
    product:(req,res) => res.render("./products/product",{ moviles: productoModelo.todos() ,estilo:"product.css", titulo:"Celltech - Producto"}),
    detail: (req,res) => res.render("./products/detail",{movil: productoModelo.buscar("id", req.params.id) ,estilo:"detail.css", titulo:"Celltech - Producto"})
    //detail: (req,res) => res.render("./products/detail",{movil : catalogo.forEach( (elem) => elem.id == req.params.id ) ,estilo:"product.css", titulo:"Celltech - Producto"})
}

module.exports= productController;
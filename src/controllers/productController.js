const productoModelo= require("../models/producto");

const productController = {
    product:(req,res) => res.render("./products/product",{ moviles: productoModelo.todos() ,estilo:"product.css", titulo:"Celltech - Producto"}),
    detail: (req,res) => res.render("./products/detail",{movil: productoModelo.buscar("id", req.params.id) ,estilo:"detail.css", titulo:"Celltech - Producto"}),
    create:(req,res) => res.render("./products/create",{estilo:"create.css", titulo:"Celltech - Create"}),
    edit:(req,res) => res.render("./products/update",{estilo:"edit.css", titulo:"Celltech - Edit"})

}

module.exports= productController;
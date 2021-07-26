const productController = {
    product:(req,res) => res.render("./products/product",{estilo:"product.css", titulo:"Celltech - Producto"}),
    detail: (req,res) => res.render("./products/product",{estilo:"product.css", titulo:"Celltech - Producto"})
}

module.exports= productController;
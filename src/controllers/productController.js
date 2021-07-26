let movil1 = {
    id: 1,
    nombre: "Galaxy Note 10+" ,
    marca:"samsung",
    os: "android",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let movil2 = {
    id: 2,
    nombre: "Galaxy Note 10+" ,
    marca: "samsung",
    os: "android",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let movil3 = {
    id: 3,
    nombre: "Galaxy Note 10+" ,
    marca: "samsung",
    os: "android",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let movil4 = {
    id: 4,
    nombre: "Galaxy Note 10+" ,
    marca: "samsung",
    os: "android",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let movil5 = {
    id: 5,
    nombre: "Apple XS" ,
    marca: "apple",
    os: "ios",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 100000,
    descuento: 10,
    precioFinal: 90000 
};

let movil6 = {
    id: 6,
    nombre: "Apple XS" ,
    marca: "apple",
    os: "ios",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let movil7 = {
    id: 7,
    nombre: "Apple XS" ,
    marca: "apple",
    os: "ios",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let movil8 = {
    id: 8,
    nombre: "Apple XS" ,
    marca: "apple",
    os: "ios",
    core: 8,
    memory: 2,
    MpxCamera: 12,
    descrip: "descripcion Smartphone",
    precioLista: 75000,
    descuento: 10,
    precioFinal: 67500 
};

let catalogo = [movil1, movil2, movil3, movil4, movil5, movil6, movil7,movil8]; 



const productController = {
    product:(req,res) => res.render("./products/product",{ moviles: [movil1, movil5] ,estilo:"product.css", titulo:"Celltech - Producto"}),
    detail: (req,res) => res.render("./products/detail",{estilo:"product.css", titulo:"Celltech - Producto"})
}

module.exports= productController;
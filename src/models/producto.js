const path = require("path");
const fs = require("fs");
//const marca = require("./marca");

module.exports = {
    ruta : path.resolve(__dirname, "../data", "productos.json"),
    leer : function () {
        // console.log("ruta", this.ruta); Devuelve la ruta del archivo JSON en caso de querer debugguear.
        return fs.readFileSync(this.ruta);
    },
    todos : function () {
        return JSON.parse(this.leer());
    },
    buscar : function(atributo,valor) {
        return this.todos().find(producto => producto[atributo] == valor); // find devuelve null si no encuentra nada.
    },
    filtrar : function(atributo, valor) {
        return this.todos().filter(producto => producto[atributo] == valor); // filter devuelve [] si no encuentra nada.
    },
    update: function(data,file,id)
    {
        let all = this.todos;
       
        all= all.map(element=> {
            if(element.id == id)
            {
        
        element.nombre= req.body.nombre ,
        element.marca=req.body.marca,
        element.os= req.body.os,
        element.core= req.body.core,
        element.memory= req.body.memory,
        element.mpx= req.body.mpx,
        element.descrip= req.body.description,
       element. precioLista= req.body.precio
         }
         return element
    })

      return  fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
       
    },
    create: function(req)
    {
        let all = this.todos;
        let newProduct=({
        id : all.length>0 ? all[all.length -1].id +1 : 1,
        nombre:req.body.name ,
        marca:req.body.brand,
        os: req.body.os,
        core: req.body.core,
        memory: req.body.memory,
        mpx: req.body.mpx,
        descrip: req.body.description,
        precioLista: req.body.precio,
        descuento: null,
        precioFinal: null, 

        })
        all.push(newProduct)
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
        return newProduct

    },
    delete: function(id){
        let all= this.todos;
        let deleted = this.buscar(id);
        all= all.filter(element => element.id != deleted.id)
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
        return true;


    }
}


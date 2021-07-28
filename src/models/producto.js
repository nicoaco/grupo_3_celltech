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
    update: function(data,id)
    {
        let all = this.todos();
        let updated = this.buscar ("id", id);
        all = all.map(element => {
            if(element.id == id)
            {
        
        element.nombre= data.nombre ,
        element.marca= data.marca,
        element.os= data.os,
        element.core= data.core,
        element.memory= data.memory,
        element.mpx= data.mpx,
        element.descrip= data.description,
       element. precioLista= data.precio
         }
         return element
    })

      return  fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
       
    },
    create: function(data)
    {
        let all = this.todos();
        let newProduct=({
        id : all.length>0 ? all[all.length -1].id +1 : 1,
        nombre:data.name ,
        marca:data.brand,
        os: data.os,
        core: data.core,
        memory: data.memory,
        mpx: data.mpx,
        descrip: data.description,
        precioLista: data.precio,
        descuento: null,
        precioFinal: null, 

        })
        all.push(newProduct)
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
        return newProduct

    },
    delete: function(id){
        let all= this.todos();
        let deleted = this.buscar(id);
        all= all.filter(element => element.id != deleted.id)
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
        return true;


    }
}


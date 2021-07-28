const path = require("path");
const fs = require("fs");


module.exports = {
    ruta : path.resolve(__dirname, "../data", "users.json"),
    leer : function () {
        // console.log("ruta", this.ruta); Devuelve la ruta del archivo JSON en caso de querer debugguear.
        return fs.readFileSync(this.ruta);
    },
    todos : function () {
        return JSON.parse(this.leer());
    },
    buscar : function(atributo,valor) {
        return this.todos().find(usuario => usuario[atributo] == valor); // find devuelve null si no encuentra nada.
    },
    filtrar : function(atributo, valor) {
        return this.todos().filter(producto => producto[atributo] == valor); // filter devuelve [] si no encuentra nada.
    },
    create: function(data) {
        let all = this.todos();
        let newUser = {
            id : all.length > 0 ? all[all.length - 1].id + 1 : 1,
            nombre : data.nombre,
            apellido:data.apellido,
            email: data.email,
            password : data.password,
            direccion : data.direccion,
            localidad : data.localidad,
            provincia : data.provincia,
            cp : data.cp,
            nacimiento : data.nacimiento,
            isAdmin : false
        } ;
        all.push(newUser);
        
    fs.writeFileSync(this.ruta,JSON.stringify(all,null,2))
       return newUser;
    },

    update: function(data, id) {
        let all = this.todos();
        let updated = this.buscar ("id", id);
        all = all.map(element => {
            if (element.id == id) {
                element.nombre = data.nombre,
                element.apellido = data.apellido,
                element.email = data.email,
                element.password = data.password,
                element.direccion = data.direccion,
                element.localidad = data.localidad,
                element.provincia = data.provincia,
                element.cp = data.cp,
                element.nacimiento = data.nacimiento,
                element.isAdmin = false
            }
            return element
        })
        fs.writeFileSync(this.ruta, JSON.stringify(all,null,2));
    },
    delete: function(id){
        let all= this.todos();
        let deleted = this.buscar(id);
        all= all.filter(element => element.id != deleted.id);
        console.log(deleted)
        fs.writeFileSync(this.ruta,JSON.stringify(all,null,2));
        return true;


    }
}
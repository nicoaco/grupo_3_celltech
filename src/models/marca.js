const fs = require("fs");
const path = require("path");


module.exports = {
        ruta : path.resolve(__dirname, "../data/", "marcas.json"),
        todos : function() {
            const file = fs.readFileSync(this.ruta);
            return JSON.parse(file);
        },
        one : function(id) {
            return this.todos().find(element => element.id == id);
        } 
    

}
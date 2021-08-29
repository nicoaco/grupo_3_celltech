const user = require("../models/user");
const userModelo= require("../models/user");



const userController = {
    login:(req,res)=>res.render("./users/login",{estilo:"login.css", titulo:"Celltech - Login"}),
    register:(req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    list: (req,res) => res.render("./users/list",{ users : userModelo.todos() ,estilo:"listuser.css", titulo:"Celltech - Listado de Usuarios"}),
    save: (req,res) => {
        if(req.file){
            res.render("./users/login",{ user : userModelo.create(req.body , req.file), estilo:"register.css", titulo:"Celltech - Registracion"})
        } else {
            let imgdefault = {
                filename : "defaultperfil.jpg"
            }
            res.render("./users/login",{ user : userModelo.create(req.body , imgdefault), estilo:"register.css", titulo:"Celltech - Registracion"})
        }
        },
    edit: (req,res) => res.render("./users/edit",{ user: userModelo.buscar("id", req.params.id) ,estilo:"register.css", titulo:"Celltech - Registracion"}),
    update: (req,res) => {
        if(req.file){
            let updated = userModelo.update(req.body, req.file, req.params.id);
            return updated ? res.redirect("/user/list") : res.status(500).send("Error en la actualización");
        } else {
            let imgUser = {
                filename : userModelo.buscar("id", req.params.id).image
            }
            let updated = userModelo.update(req.body, imgUser, req.params.id);
            return updated ? res.redirect("/user/list") : res.status(500).send("Error en la actualización");  
        }
        
    },

    delete: (req,res) => {
        let deleted = userModelo.delete(req.params.id);
        return deleted ? res.redirect("/user/list") : res.status(500).send("Error en el borrado");
     }
        
}

module.exports= userController;
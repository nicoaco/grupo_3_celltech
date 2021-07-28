const user = require("../models/user");
const userModelo= require("../models/user");



const userController = {
    login:(req,res)=>res.render("./users/login",{estilo:"login.css", titulo:"Celltech - Login"}),
    register:(req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    list: (req,res) => res.render("./users/list",{ users : userModelo.todos() ,estilo:"register.css", titulo:"Celltech - Registracion"}),
    save: (req,res) => res.render("./users/login",{ user : userModelo.create(req.body), estilo:"register.css", titulo:"Celltech - Registracion"}),
    edit: (req,res) => res.render("./users/edit",{ user: userModelo.buscar("id", req.params.id) ,estilo:"register.css", titulo:"Celltech - Registracion"}),
    update: (req,res) => res.render("./users/edit",{user: userModeloestilo.update(req.body, req.params.id), estilo:"register.css", titulo:"Celltech - Registracion"}),
    delete: (req,res) => {
        let deleted = userModelo.delete(req.params.id);
        return deleted ? res.redirect("/user/list") : res.status(500).sens("Error en el borrado");
     }
   /*

    delete:(req,res)=>{
        let deleted= userModelo.delete(req.params.id)
        return res.render("/user/user")} */
        
}

module.exports= userController;
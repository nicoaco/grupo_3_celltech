const userModelo= require("../models/user");



const userController = {
    login:(req,res)=>res.render("./users/login",{estilo:"login.css", titulo:"Celltech - Login"}),
    register:(req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    //cambiar a partir de acá
    save: (req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    detail: (req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    edit: (req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    update: (req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    delete: (req,res) => res.render("./users/register",{estilo:"register.css", titulo:"Celltech - Registracion"}),
    /*
    save:(req,res)=>{
        let stored= userModelo.create(req.body)
        return stored? res.redirect("/user/"+store.id): res.send("hubo un error")
    },
    
    detail: (req,res) => res.render("./user/detail",{movil: productoModelo.buscar("id", req.params.id) ,estilo:"detail.css", titulo:"Celltech - Producto"}),
    
    edit:(req,res) => res.render("./user/update",{marca: marcaModelo.one(req.params.id), product:productoModelo.buscar("id",req.params.id),estilo:"edit.css", titulo:"Celltech - Edit"}),
    
    update:(req,res)=> {
        let updated= userModelo.update(req.body)
        return updated? res.redirect("/user/"+updated.id): res.send("hubo un error")
    },

    delete:(req,res)=>{
        let deleted= userModelo.delete(req.params.id)
        return res.render("/user/user")} */
        
}

module.exports= userController;
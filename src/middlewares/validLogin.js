const {body} = require ('express-validator');
const userModelo = require('../models/user');

module.exports = [
body('email').isEmail().custom((value) => {
    let exitUser = userModelo.buscarPorEmail(value);
    if (exitUser){
        return true;
    } else {
        return Promise.reject('No se encontró el usuario');
    }
}),
body('password').isLength({min : 5 })
];
const express=require("express");
const router=express.Router();
const mainController= require("../controllers/mainController")

//rutas del sitio
router.get ("/",mainController.main);
router.get ("/login",mainController.login);
router.get ("/shop",mainController.shop);
router.get ("/register",mainController.register);
//router.get ("/product",mainController.product); movida a productRoutes
router.get ("/create",mainController.create);
router.get ("/edit",mainController.edit);


module.exports = router;
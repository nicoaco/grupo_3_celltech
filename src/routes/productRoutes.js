const express=require("express");
const router=express.Router();
const productController= require("../controllers/productController");

//rutas del sitio
router.get("/", productController.product)
router.get ("/:brand/:id?",productController.detail);


module.exports = router;
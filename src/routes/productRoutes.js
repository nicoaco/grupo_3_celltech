const express=require("express");
const { product } = require("../controllers/productController");
const router=express.Router();
const productController= require("../controllers/productController");

//rutas del sitio
router.get("/", productController.product);
router.get("/create", productController.create);
router.get ("/:id", productController.detail);
router.get("/:id/edit", productController.edit);
router.post("/create",productController.store);
router.put("/:id",productController.update);
router.delete("/:id",productController.delete)



module.exports = router;
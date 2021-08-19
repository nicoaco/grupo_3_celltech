const express=require("express");
const router=express.Router();
const multer = require('multer');
const { product } = require("../controllers/productController");
const path = require('path');
const productController= require("../controllers/productController");

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});


//rutas del sitio
router.get("/", productController.product);
router.get("/create", productController.create);
router.get ("/:id", productController.detail);
router.get("/:id/edit", productController.edit);
router.post("/create", [upload.single("img")] ,productController.store);
router.put("/:id/edit", [upload.single("img")],productController.update);
router.delete("/:id/delete",productController.delete)



module.exports = router;
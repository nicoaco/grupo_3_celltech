const express=require("express");
const router=express.Router();
const multer = require('multer');
const userController= require("../controllers/userController");
const path = require('path');
const validLogin = require('../middlewares/validLogin');

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","users"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

//rutas User del sitio
router.get("/login", userController.login);
router.post("/login",[validLogin], userController.access);
router.get ("/list", userController.list);

router.get("/register", userController.register);
router.post("/save", [upload.single("imguser")] , userController.save);


router.get("/:id/edit", userController.edit);
router.put("/:id/edit", [upload.single("imguser")], userController.update);

router.delete("/:id/delete",userController.delete);



module.exports = router;
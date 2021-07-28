const express=require("express");
const router=express.Router();
const userController= require("../controllers/userController");

//rutas User del sitio
router.get("/login", userController.login);

router.get("/register", userController.register);
router.post("/save", userController.save);

router.get ("/:id", userController.detail);

router.get("/:id/edit", userController.edit);
router.put("/:id/edit",userController.update);

router.delete("/:id",userController.delete)



module.exports = router;
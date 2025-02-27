const express=require("express");
const router= express.Router();

const UsuarioController=require("../controllers/usuarioController");

router.get("/usuario",UsuarioController.listarUsuarios);
router.post("/usuario",UsuarioController.crearUsuarios);
router.get("/usuarios/:id",UsuarioController.buscarUsuario);
router.delete("/usuario/:id",UsuarioController.eliminarUsuario);
router.put("/usuarios/:id",UsuarioController.actualizarUsuarios);


module.exports = router;
//creado por: yesid ortiz
//version 1
const UsuarioService = require("../services/usuarioService");
class UsuarioController{
    static async listarUsuarios(req,res){
        try{
            let lista=await UsuarioService.listarUsuarios();
            res.json(lista);
        }catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async crearUsuarios(req,res){
        try{
            let{nombre,correo,contrasena}=req.body
            let usuario= await UsuarioService.crearUsuario(nombre,correo,contrasena);
            res.json(usuario);
        }
        catch(e){
            res.json({error:"error en la peticion"})
        }
    }
    static async buscarUsuario(req,res){
        try{
            let id=req.params;
            let usuario= await UsuarioService.buscarUsuario(id);
            res.json(usuario);
        }catch(e){
            res.json({error:"error en la busqueda"})
        }
    }
    static async eliminarUsuario(req,res){
        try{
            let {id}=req.params;
            let a=await UsuarioService.eliminarUsuario(id);
            console.log(a)
            res.json({mensaje:a});
        }catch(e){
            res.json({error:"error en la eliminacion"})
        }
    }
    static async actualizarUsuarios(req,res){
        try{
            let {id}=req.params;
            let{nombre,correo,contrasena}=req.body
            await UsuarioService.actualizarUsuario(id,nombre,correo,contrasena);
            res.json(req.body);
        }catch(e){
            res.json({error:"error en la actualizar"})
        }
    }


}
module.exports = UsuarioController;
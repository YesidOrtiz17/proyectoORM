const {Usuario}=require("../models");

class UsuarioService{
    static async listarUsuarios(){
        try {
            return await Usuario.findAll();
        }
        catch(e){
            console.log("error en el servicio");

        }
    }
    static async crearUsuario(nombre,correo,contrasena){
        try{
       return await Usuario.create({nombre,correo,contrasena})
    }
    catch(e){
        console.log("error en el servidor al guardar");
    }
    }
    
    static async buscarUsuario(id){
        try{
            return await Usuario.findOne({where:id});
    }   
        catch(e){
            console.log("error en el servidor al guardar");
        }
    }
    static async eliminarUsuario(id){
        try{
           let resultadoB = await Usuario.findOne({where:{id}});
           if(resultadoB){
            resultadoB.destroy();
            return "usuario eliminado"
           } 
        }
        catch(e){
            console.log("error en el servidor al eliminar");
        }
    }
    static async actualizarUsuario(id){
        try{
        return await Usuario.update({nombre,correo,contrasena},{where:{id}});
    }catch(e){
        console.log("error en el servidor al actualizar");
        }
  }
}

module.exports=UsuarioService;
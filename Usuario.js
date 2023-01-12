class Usuario{

    usuario
    contrasena
    correoElectronico
    
    constructor(usuario, contrasena, correoElectronico)
    {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correoElectronico = correoElectronico;
    }

    get getUsuario(){
        return this.usuario;
    }

    set changeUsuario(newUsuario){
        this.usuario = newUsuario;
    }

    get getContrasena(){
        return this.contrasena;
    }

    set changeContrasena(newContrasena){
        this.contrasena = newContrasena;
    }

    get getCorreoElectronico(){
        return this.correoElectronico;
    }

    set changeCorreoElectronico(newCorreoElectronico){
        this.correoElectronico = newCorreoElectronico;
    }
}
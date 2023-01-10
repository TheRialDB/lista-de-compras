class Usuario{
    nombre 
    apellidos
    direccion
    localidad
    codigoPostal
    telefono
    correoElectronico
    usuario
    contrasena
    
    constructor(nombre, apellidos, direccion, localidad, codigoPostal, telefono, correoElectronico, usuario, contrasena)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    get getNombre(){
        return this.nombre;
    }

    set changeNombre(newNombre){
        this.nombre = newNombre;
    }

    get getApellidos(){
        return this.apellidos;
    }

    set changeApellidos(newApellidos){
        this.apellidos = newApellidos;
    }

    get getDireccion(){
        return this.direccion;
    }

    set changeDireccion(newDireccion){
        this.direccion = newDireccion;
    }

    get getLocalidad(){
        return this.localidad;
    }

    set changeLocalidad(newLocalidad){
        this.localidad = newLocalidad;
    }

    get getCodigoPostal(){
        return this.codigoPostal;
    }

    set changeCodigoPostal(newCodigoPostal){
        this.codigoPostal = newCodigoPostal;
    }
    
    get getTelefono(){
        return this.telefono;
    }

    set changeTelefono(newTelefono){
        this.telefono = newTelefono;
    }

    get getCorreoElectronico(){
        return this.correoElectronico;
    }

    set changeCorreoElectronico(newCorreoElectronico){
        this.correoElectronico = newCorreoElectronico;
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
}
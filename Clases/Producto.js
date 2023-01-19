class Producto {
    nombre
    tipo
    enlace

    constructor(nombre, tipo, enlace){
        this.nombre = nombre;
        this.tipo = tipo;
        this.enlace = enlace;
    }

    get getNombre(){
        return this.nombre;
    }

    set changeNombre(newNombre){
        this.nombre = newNombre;
    }

    get getTipo(){
        return this.tipo;
    }

    set changeTipo(newTipo){
        this.tipo = newTipo;
    }
    
    get getEnlace(){
        return this.enlace;
    }

    set changeEnlace(newEnlace){
        this.enlace = newEnlace;
    }
}
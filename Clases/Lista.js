class Lista {
    usuario
    fecha
    productos

    constructor(usuario, fecha, productos) {
        this.usuario = usuario;
        this.fecha = fecha;
        this.productos = productos;
    }

    get getUsuario(){
        return this.usuario;
    }

    set changeUsuario(newUsuario){
        this.usuario = newUsuario;
    }

    get getFecha(){
        return this.fecha;
    }

    set changeFecha(newFecha){
        this.fecha = newFecha;
    }

    get getProductos(){
        return this.productos;
    }

    set changeProductos(newProductos){
        this.productos = newProductos;
    }
}
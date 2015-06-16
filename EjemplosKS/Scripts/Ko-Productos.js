

function unProducto(nombre, descripcion, precio, imgname) {
    var self = this;
    self.nombre = nombre;
    self.descripcion = descripcion;
    self.precio = precio;
    self.imgsrc = '../css/img/productos/' + imgname +'.jpg';
}

function ProductosViewModel() {
    var self = this;

    self.listado = ko.observableArray([
           new unProducto("Canilla", "Color cromado, resistente al impacto", 200,'ducha'),
           new unProducto("Duchador", "Color cromado, resistente al impacto", 200,'duchador'),
           new unProducto("Flor de baño", "Color cromado, resistente al impacto", 200,'forBano'),
           new unProducto("inodoro", "Color blanco, marca generica", 200,'inodoro')
    ]);

    self.addProducto = function () {
        self.listado.push("", "", "");
    }

}



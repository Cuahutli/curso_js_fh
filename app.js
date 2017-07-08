

var persona = {
    nombre: "Maria",
    apellido: "dubon",
    imprimirNombre: function(){
        console.log("Nombre completo");
        //console.log(nombre); // error de referencia salvo que esté declarado nombre como global
        console.log(this.nombre);
    },
    direccion: {
        pais: "México",
        obtenerPais: function(){
            console.log(this);
            console.log("La dirección es " + this.pais );
            //var nuevaDireccion = function(){
            //    console.log(this); // este this hace referencia a window
            //}
            var self = this;
            var nuevaDireccion = function(){
                console.log(this);
                console.log("La dirección es " + self.pais );
            }

            nuevaDireccion();
        }
    }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();
//var carlos = new Persona()

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    }
}

//var juan = Persona(); // regresa undefined
var juan =  new Persona("Juan", "Perez"); // regresa un objeto vació de tipo Persona // esto es similar a un constructor


// si no se llama con new entonces this apuntará al objeto global y lo que está dentro de la función se creará en window
console.log(juan)
console.log(juan.nombre)
console.log(juan.imprimirPersona())

// los prototipos permiten expandir este tipo de objetos y agregarle mas propiedades.

// los prototipos normalmente se utiliza para hacer más eficiente el uso de los objetos, nos ayudan a manejar mejor los objetos.
function Persona(){
    this.nombre = "Cuahutli";
    this.apellido = "Ulloa";
    this.edad = 30;
    this.pais = "México";

    // this.imprimirInfo = function(){
    //     console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")");
    // }
}

//Persona.prototype.pais = "México";

Persona.prototype.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")");
}

var cuahutli = new Persona();

console.log(cuahutli);
console.log(cuahutli.pais);
cuahutli.imprimirInfo();


Number.prototype.esPositivo = function(){
    if( this > 0){
        return true;
    }else{
        return false;
    }
}
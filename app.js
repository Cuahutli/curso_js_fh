// una función puede regresar primitivos, objetos, undefined, función, null

function obtenerAleatorio() {
    return Math.random();
}

function obtenerNombre() {
    return "Juan"
}

function esMayor05(p) {
    if (obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false;
    }
}

console.log(obtenerAleatorio() + 10); // se puede tratar como número por que retorna un entero


console.log(obtenerNombre() + " Padilla");

console.log(esMayor05());

if(esMayor05()){
    console.log("es mayor a 0.5");
}else{
    console.log("es menor a 0.5");
}


function crearPersona(nombre, apellido){
    return {
       nombre: nombre,
       apellido: apellido,     
    }
}

var persona = crearPersona("Maria", "Paz")
console.log(persona);
console.log(persona.nombre + " " + persona.apellido)



function creaFuncion() {
    return function(nombre){
        console.log("Me creo" + " " + nombre);
        return function(){
            console.log("segunda función");
        }
    }
}


var nuevaFuncion = creaFuncion();

nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();

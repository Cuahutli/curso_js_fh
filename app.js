// los parametros pueden ser objetos, variables primitivas u otras funciones
//function imprimir(nombre, apellido) {
//    console.log(nombre +  " " + apellido)
//}

//variable nombrada
//var nom = "juan"

// "Juan" se convierte en una variable anónima
//imprimir("Juan") // Juan undefined  function imprimir (nombre, apellido)
// imprimir("Juan", "Padilla")

/*
function imprimir(nombre, apellido) {
    // if (apellido === undefined){
    //     apellido = "xxx";
    // }
    //apellido = apellido || "xxx";
   console.log(nombre +  " " + apellido);
}

imprimir("Juan", "Padilla");*/

/*
function imprimir(persona) {
    console.log(persona);
    console.log(persona.nombre + " " + persona.apellido)
    persona.nombre = "Maria"
}

var persona = {
    nombre:"Juan",
    apellido: "Padilla"
}
imprimir(persona);

console.log(persona);
*/


// fn es una convención que indica que estamos mandando una función (se usa mucho en jquery)
function imprimir(fn) {
    fn();
}

var persona = {
    nombre: "Juan",
    apellido: "Padilla"
}

// funcion anónima
imprimir(function () {
    console.log("Funcion anonima");
})

//función explicita

var miFuncion= function () {
    console.log("funcion explicita")
}

imprimir(miFuncion);
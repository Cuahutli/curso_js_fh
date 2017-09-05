// el objeto Math ya viene incluido en la libreria de javascript, no es necesario importarlo.

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.456789;

console.log(num1);

console.log( Math.round(num1*100)/100); //redondeado a 2 decimales

console.log( Math.floor(num1)); // trunca, no redondea al siguiente más alto

var rnd = Math.random(); // valor entre 0 y 1 (sin ellos)
console.log(rnd);

function randomEntre(min, max){
    return Math.floor( Math.random()* (max - min + 1) + min);
}


console.log( randomEntre(1,6));
console.log( randomEntre(500,1000));

console.log( Math.sqrt(10));

console.log( Math.pow( 2, 8));
var a = 10;
var b = a; /* paso por valor las variables primitivas siempre se pasan por valor */

console.log(a);
console.log(b);

a = 20;

console.log(a);
console.log(b);


/* cuando son objetos se pasan por referencia, por eso cambiando uno, se modifica en todos*/
var c = {
    nombre :"Juana"
};

var d = c;

console.log(c);
console.log(d);

c.nombre = "Maria"

console.log(c);
console.log(d);
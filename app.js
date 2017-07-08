var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

console.log(num);

num = str;
console.log(num);

console.log(bol)
bol = 10;
console.log(bol)

var obj = {}; /* objeto vacío */

/* declaración de un objeto, lo que lleva dentro son propiedades */
var obj = {
    numero: 10,
    texto: "Nuevo Texto",
    objHijo: {
        nombre: "Cuahutli",
        edad: 37,
    }
};

console.log(obj)
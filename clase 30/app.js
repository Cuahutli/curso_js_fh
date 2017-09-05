// un objeto tipo string es un objeto en JS

var a = new String("Cuahutli Ulloa");

console.log(a[0]);

console.log(a);

var b = "Ulloa";

console.log(b);

//propiedades del objeto string

console.log(a.toUpperCase());
console.log(a.toLowerCase());
var i = a.indexOf("u");

console.log("La letra está en la posición " + i );
i = a.lastIndexOf("u"); // la última aparición para duplicados
console.log("La letra está en la posición " + i );

i = a.indexOf("Ulloa");
console.log("La palabra Ulloa inicia en la posición " + i );

var nombre = a.substring(6);
console.log(nombre);

var nombre = a.substring(6,3);
console.log(nombre);


var nombre = a.substring(0, a.indexOf(" "));
console.log(nombre);


var split = a.split(" ");
console.log(split);
console.log(split.length);

// =============================

// funciones viejas
document.write(a.italics());






// ==============================
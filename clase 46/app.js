

var objetoJS = {
    nombre:"Cuahutli",
    edad:30
};

console.log("Objeto literal", objetoJS);
var jsonString =  JSON.stringify(objetoJS)
console.log(jsonString);

var objetoDesdeJSON = JSON.parse(jsonString);
console.log(objetoDesdeJSON);
console.log(objetoDesdeJSON.nombre);
console.log(objetoDesdeJSON.edad);

// los arreglos en javascript son siempre una colección de objetos..
// javascript no da error con un indice inexistente en el arreglo como en otros lenguajes, regresa 'undefined'

//var arr = new Array(); // == var arr = [];
var arr = [5,4,3,2,1];

console.log(arr);

console.log(arr[0], arr[4], arr[5]);

arr.reverse();
console.log(arr);

arr = arr.map(function( elem ){
    elem *= elem;
    return elem;
});  // map nos permite ejecutar una función en cada elemento del arreglo sin hacer un for

console.log(arr);


arr = arr.map( Math.sqrt );
console.log(arr);


arr1 = arr.join();

console.log(arr1); // convierte en arreglo en valores separados por comas;

arr2 = arr.join("|--");
console.log(arr2);

arr3 = arr2.split("|--");
console.log(arr);


// a diferencia de los arreglos de java que no pueden crecer, en javascript no hay "limite"

arr.push(6); // última posición del arreglo
console.log(arr);


arr.unshift(0); // lo mete a la primer posición
console.log(arr);

console.log(arr.toString()); // tostring es más rápido que el split pero sólo es "separable por comas"

var elimine = arr.pop();

console.log(arr, elimine);


arr.splice( 1, 0, 10, 20, 30); // puede eliminar y meter valores al arreglo... muy útil

console.log(arr);


arr = arr.slice( 0,3); // slice es cortar


console.log(arr);



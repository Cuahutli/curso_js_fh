var a = 30  
function primeraFuncion() {
  var a= 20;
  console.log(a);
}

console.log(a);

primeraFuncion();

console.log(a);

//undefined
console.log(primeraFuncion());

var x = primeraFuncion(); // si no le pongo los parentesis, no estoy invocando a la función, lo que retorna es la función misma

//undefined
console.log(x)
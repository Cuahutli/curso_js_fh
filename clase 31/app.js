

// tipos de inicializadores de fecha

var hoy = new Date();
var fechaMilisegundos = new Date(0);
//var fechaFija = new Date(anio, mes, dia, hora, minuto, segundo, milisegundo);
var fechaFija = new Date(2016, 10, 20); // los meses son en base cero // 10  es Noviembre
console.log(hoy);
console.log(fechaMilisegundos);
console.log(fechaFija);

console.log(hoy.getFullYear() + 1); // regresa el año como número
console.log(hoy.getYear()) // deprecado

console.log(hoy.getDate()); //dia
console.log(hoy.getHours()); // hora

console.log(hoy.getTime()) // la fecha en milisegundos


var inicio = new Date();

for (var i = 0; i<15000; i++){
    console.log("algo...");
}

var fin = new Date();
console.log(inicio);
console.log(fin);

var tiempo = fin.getTime() - inicio.getTime();
console.log(tiempo + "Milisegundos");
console.log(tiempo/100 + " Segundos");
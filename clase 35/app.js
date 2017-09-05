// lo importante no es saber, si no saber quien sabe.

var texto = "Aeropuerto";
console.log(texto);

var arr = texto.match(/[aeiou]{2,2}/ig); // obtiene diptongos, triptongos, etc..
console.log(arr);

var arr2 = texto.match(/\w{2,2}/ig);  // separa la palabra en grupos de 2
console.log(arr2);

var texto2 = "La Respuesta de la suma es 45 + 60 = 105";
var arr3 = texto2.match(/\d{1,}|respuesta/ig);
console.log(arr3);
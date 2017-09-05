// expresiones regulares


//var reg1 = RegExp("A");
var reg1 = /a/ ; // caracteres especiales 
                 // ^, que busque en el texto en la primera posición, inicia con. 
                 // $ termina con.
                 // .  indica cualquier caracter [una posición]
                 // [] son utilizados para rangos [0-9], [a-z], [6789], [A-Z], [a-zA-Z]
                 // \s son separaciones, espacios, tabs, etc..
                 // \w cualquier letra y número (en ingles no está la ñ) [a-zA-Z0-9]
                 // \d cualquier numero [0-9]
                 // i = insensible a mayúsculas minusculas
                 // g = todas las apariciones
                 // m = multilinea
                 // | = o lógico (no dejar espacios debe ir todo pegado)
                 // + = uno o más veces
                 // ? = puede o no aparecer
                 // * = cero o mas veces
                 // {num} = número de veces que se repite el caracter
                 // {num, num} = rango de apariciones de 2 a 5 por ejemplo
                 // {num,} = rango de num a todas las que vengan

var reg2 = /H[a-zA-Z]/ 
var reg3 = /[aeiou].$/                
var reg4 = /[aeiou]./  
var texto = "Holaao Mundo";


var arr1 = texto.match(reg1);  // NULL si no regresa nada
console.log(arr1);

var arr2 = texto.match(reg2);
console.log(arr2);

var arr3 = texto.match(reg3);
console.log(arr3);

var arr4 = texto.match(reg4);
console.log(arr4);

var arr5 = texto.match(/\s/);
console.log(arr5);



var arr6 = texto.match(/m/i);
console.log(arr6);


var arr7 = texto.match(/[aeiou]/gi);
console.log(arr7);


var arr8 = texto.match(/[aeiou]|[áéíóú]/gi);
console.log(arr8);

var arr9 = texto.match(/a+/g);
console.log(arr9);

var arr10 = texto.match(/o?/g);
console.log(arr10);



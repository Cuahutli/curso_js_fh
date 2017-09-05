

var a = true;
var b = false;

var c = new Boolean(); // false por default
console.log(c);

var d = new Boolean ("-1") // regresa true
console.log(d);

var e = new Boolean("-20") // regresa true
var f = new Boolean (NaN) // regresa true
var g = new Boolean (1) // regresa true
var h = new Boolean(0) // regresa false
var i = new Boolean(Infinity) // regresa false

// lo recomendable en los booleanos es declararlo a = true;
if (c){ // se imprime aún cunado c es falso, y es por que lo que en JS se le dice es que si a tiene algún valor (no es undefined entre al if), para que funcione sería if (c.valueof())
    console.log("Me imprimi");
}
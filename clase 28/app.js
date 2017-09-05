

var a = 10;

console.log(a.toFixed(2));


console.log(a.toString());

console.log(a.toPrecision(4));

b = 10;

console.log(b);

b *=10000000000000000000;
b *=10000000000000000000;
b *=10000000000000000000;
b *=10000000000000000000;
console.log(b);

a = a * "f"; // NaN
console.log(a);

var v = new Number("12");

console.log(v);
console.log(v.valueOf());
// toda funcion en javascript tiene 3 metodos que están en su prototipo
// call, bind y apply




var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}



var carro2 = {
    color: "Negro",
    marca: "Toyota", 
}
console.log( carro.imprimir());

var logCarro = function(arg1, arg2){
    console.log("Carro", this.imprimir());
    console.log("Argumentos: " + arg1 + ", " + arg2)
    console.log("==========================");
}

var logModelo = logCarro.bind( carro ) // yo le puedo decir que en lugar de que apunte al objeto global apunte a carro
logModelo("abc", "xyz");

logModelo.call(carro, "123", "456");

// la diferencia entre el call y el apply, exceptuando que en apply solo espera 2 parametros,  el segundo es un arreglo, es útil cuando no sabemos el número de argumentos que debo pasar a la función
logModelo.apply(carro, ["123", "45556"]);


// esto sirve para las llamadas funciones prestadas

console.log(carro.imprimir.call(carro2));
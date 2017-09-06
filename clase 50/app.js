
setTimeout(function(){
    console.log("Pasó un segundo")
}, 1000);

// setInterval lo repite...
var seg = 0
var intervalo = setInterval(function(){
    seg++;
    console.log("se repite cada segundo, segundo:" + seg);
    if (seg == 5){
        clearInterval(intervalo);
    }
}, 1000);


var juan = {
    nombre: "juan",
    edad: 30,
    imprimir: function(){
        var self = this;
        setTimeout(function(){
            console.log(self.nombre + " " + self.edad);
        }, 1000);
    }
}

juan.imprimir();
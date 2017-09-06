

for (var i=0; i<=10; i++){
    if (i == 5){
        continue;
    }
    if (i == 8){
        break; 
    }
    console.log(i);
}

var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18;
}

var juan = new Persona();

Persona.prototype.direccion = "Sin Número";
for (prop in juan){
    console.log(juan.hasOwnProperty(prop));
    if( !juan.hasOwnProperty(prop)){  //reflection
        continue;
    }
    console.log(prop + " valor: " + juan[prop]);
}


for( num in [1,2,3,4,5,6,7,8,9,10]){
    console.log(num); // esto imprime la posición del arreglo
}

// el forEach es para arreglos.
[1,2,3,4,5,6,7,8,9,10].forEach(function(valor){
    console.log(valor);
})
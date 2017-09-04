// sobrecarga de operadores en Javascript (simularlo)


// function crearProducto(){

// }

// function crearProducto(nombre){

// }

// function crearProducto(nombre, precio){

// }

// así sobreescribiria y se quedaría con la última


function crearProducto(nombre, precio){
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio: ", precio);

}

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

function crearProductoCamisa(precio){
    crearProducto("Camisa", precio);
}

crearProducto();
crearProducto("Lapiz");
crearProducto("Borrador", 50);

crearProducto100("Corrector");

crearProductoCamisa(80);
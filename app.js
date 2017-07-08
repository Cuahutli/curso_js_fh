function a(){
    console.log("Funcion a");
}

a();


//a las funciones se les puede agregar cualquier cosa que se le pueda agregar un objeto

a.nombre = "Maria";
a.direccion = {
    pais:"México",
    ciudad: "Tepic",
    edificio: {
        piso: "8vo"
    }
}
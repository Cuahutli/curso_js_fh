

function validar(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    if (nombre.length < 1 || apellido.length <1){
        return false;
    }
    return true;
}




console.log(window.location);
console.log(window.location.search);

var arr = window.location.search.split("&");
console.log(arr);
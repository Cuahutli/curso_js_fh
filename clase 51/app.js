// los eventos son las acciones que hacen que se dispare una función


function evento(arg){
    console.log("Me disparé ");
    console.log(arg);
}


var objeto = document.getElementById("objDemo");
objeto.addEventListener("keypress", evento);


var btn = document.getElementById("btnDemo");
btn.addEventListener("click", evento);
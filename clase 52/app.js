document.onmousedown = function(arg){
    
    if(arg.button == 2){
        alert("click bloqueado");
        return;
    }
    console.log("no hay problema");
}


// obtener lo que el usuario seleccionó

document.onmouseup = function(){
    var texto = window.getSelection().toString();
    console.log(texto);
}
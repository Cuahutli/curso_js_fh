
// tipo primitivo (number, string, boolean)
// objectos (object)
// funciontes (function)

function identifica( param ){
     console.log(typeof param);
    // if (typeof param == "function"){
    //     param();
    // }else{
    //     console.log(param);
    // }

    console.log( param instanceof Persona);


}

function Persona(){
    this.nombre = "Cuahutli";
    this.edar = 30;
}

var cuahutli = new Persona();
identifica(true);
identifica(function(){console.log("soy anonima")});

identifica(cuahutli)
 // el polimorfismo es una función que puede recibir varios tipos de datos

 function determinaDato( a ){
    if (a === undefined){
        console.log("A es undefined no se que hacer");
    }

    if (typeof a === "number"){
        console.log("A es un número, y puedo hacer operaciones con números");

    }

    if (typeof a === "string"){
        console.log("A es un texto, y puedo hacer operaciones con textos");
    }

    if (typeof a === "object"){
        console.log("A es un objeto, pero puede ser cualquier cosa");

        if ( a instanceof Number){
            console.log("A es un objecto númerico");
        }
    }

 }


 determinaDato();
 determinaDato(5);

 determinaDato("Juan");
 determinaDato({nombre:"Juan"});

 var b = new Number(3);
console.log(b);
determinaDato(b);
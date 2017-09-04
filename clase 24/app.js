
var arguments = 10;

function miFuncion(a,b,c,d){
    if (arguments.length !== 4){
        console.error("La functión necesita 4 parámetros");
        return;
    }
    console.log( arguments ); // primero busca en si misma (en su prototype)
    console.log ( a + b + c + d);
    console.log(c+d)

    
}

miFuncion(10,20, 30, {} , function(){console.log("en otras ondas")});
miFuncion(10,20, 30, 40);
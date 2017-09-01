// funciones anonimas, es una función que simplemente no lleva un nombre..

// sintaxis de una función anónima
// (function(){

// })

(function(){

    var a = 10;

    console.log(a);

    function cambiarA(){
        a = 20;
    }

    cambiarA();
    console.log(a);

})();




function ejecutarFuncion(fn){
    if (fn()===1){
        return true;
    }else{
        return false;
    }
    
}


// una función dentro de otra función dentro de otra función
console.log(ejecutarFuncion(function(){
    console.log("estamos llamandola desde una función anónima");
    return 1;
    })
);
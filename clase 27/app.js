// contexto global


function crearFunciones(){
    // contexto de la función
    var arr = [];
    var numero = 1;
    

    for ( var numero = 1; numero<=5; numero++){
        arr.push((function(numero){
            return function(){ 
                console.log(numero);
            }
        })(numero));
    }
    // arr.push((function(numero){
    //     return function(){ 
    //         console.log(numero);
    //     }
    // })(numero));
    
    // numero = 2;
    // arr.push(function(){
    //     console.log(numero);
    // });
    // numero = 3;
    // arr.push(function(){
    //     console.log(numero);
    // });
    // lo anterior retorna un 1,3,3 (del for hacía abajo)


    return arr;

}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();
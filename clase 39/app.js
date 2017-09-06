// el throw debe usarse dentro del try catch, si no dará error
// try{ // intenta
//     var u = 100;
//     // throw // disparar, lanzar
//     console.log("El valor de a:", a);
// }catch(e){ // si fallas ejecuta esto
//     console.log("error de catch", e);    
// }finally{ // ejecuta siempre al final esto.
//     console.log("finalmete");
// }


try{
    //throw Error("error tipo 1");
    // throw {
    //     nombreError: "Error tipo 1",
    //     accion: "Salir corriendo a echarle agua al servidor",
    //     codeerror: 1,
    // }

    throw function(){
        console.log("Funcion del throw");
    }
    console.log("Esta parte nunca se ejecuta");
}catch (e){
     //console.log(e.message);  // solo error sin el trace
    //  console.log(e);
    //  console.log(e.nombreError);
    //  console.log(e.accion);
    //  console.log(e.codeerror);
     e();
     
}finally{
    console.log("Finalmente")
}



try{
    throw 1; // cualquier numero
}catch(e){
    registroError(e);
}

function registroError(e){
    var ahora = new Date();
    console.log("Se registró un error:" + e + " en fecha: " + ahora);
}
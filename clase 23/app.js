
var arr = [
    true, 
    false, 
    true, 
    {nombre:"Cuahutli", apellido:"Ulloa"},
    function(){
        console.log("estoy viviendo en un arreglo")
    },
    function( persona){
        console.log(persona.nombre + " " + persona.apellido);
    },
    [
        "Cuahutli",
        "Keila",
        "Eunice",
        "Arleth",
        "Daniel",
        [
            "Juan",
            "Pedro",
            "Jimenez",
            function(){
                console.log(this);
            }
        ]
    ]
];


console.log(arr);

console.log(arr[2]);
console.log(arr[3].nombre + " " + arr[3].apellido);

arr[4](); // ejecutamos la función;

arr[5](arr[3]); // ejecutamos la función mandandole como parametro un object que también está en el arreglo

console.log(arr[6][5]);

console.log(arr[6][5][1]);

var arr2 = arr[6][5];
console.log(arr2);

arr2[1] = "Piter"; // como se pasa por referencia no solo cambio el valor del arr2 si no también en arr..

console.log(arr2);

console.log(arr);

arr2[3](); // regresa el arreglo que lo contiene
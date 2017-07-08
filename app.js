var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        calle: "Juárez",
        numero: 200,
        estado: "Nayarit",
        edificio:{
            nombre: "Edificio principal",
            telefono: "3111115 22"
        }
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona.direccion.estado);


/* lo crea al vuelo  y lo modifica sin problemas */ 
persona.direccion.municipio = "Tepic";

console.log(persona.direccion)


console.log(persona.direccion.edificio.telefono)

var edificio_persona = persona.direccion.edificio

console.log(edificio_persona.telefono)

edificio_persona.nombre_gerente = "Martin Caballero"
edificio_persona.nopiso = "8vo piso"

console.log(edificio_persona)

persona.direccion.edificio.encargado = "Patricia"
persona.direccion.edificio.noperi = "9no piso"

console.log(edificio_persona)





/* notación corchete es bueno para cuando tenemos datos dinámicos */

var campo = "edad";
console.log(persona["nombre"]);
console.log(persona["direccion"]["calle"]);
console.log(persona[campo])

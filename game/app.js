
//la primer letra mayúscula me indica algo así como que será una clase
function Jugador( nombre ){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo){
        if (this.sp >=40){
            this.sp -= 40;
            jugadorObjetivo.pv +=  20;
        }else{
            console.log("ey, no podemos curar a " + jugadorObjetivo.nombre);
        }

        this.estado(jugadorObjetivo);
        
    }

    this.tirarFlecha = function (jugadorObjetivo){
        if (jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre +  " murió");
        }
        this.estado(jugadorObjetivo);
        
    }

    this.lanzaPoderEspecial = function(jugadorObjetivo){
        if (this.sp >=15){
            if (jugadorObjetivo.pv >=30){
                jugadorObjetivo.pv -=30;
                jugadorObjetivo.sp +=20; 
                this.sp -=15;
                this.pv += 5;
            }else{
                jugadorObjetivo.pv = 0;
                console.error(jugadorObjetivo.nombre + " ya caminó...");
            }
        }else{
            console.error("no tienes poderes para lanzar tu super ataque especial machin perrón");
        }
        this.estado(jugadorObjetivo);
        
    }

    this.estado = function( jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);

    }
}


var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);

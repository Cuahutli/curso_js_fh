

var fecha = new Date(2016, 9, 20);
console.log(fecha);

// todas las horas, minutos, año, etc.. tienen una función set

fecha.setDate(5);
console.log(fecha); // 5 octubre

fecha.setDate(32);
console.log(fecha); // cambia de mes


Date.prototype.sumarDias = function(dias){
    this.setDate( this.getDate() + dias ); 
    return this;
}

Date.prototype.sumarAnios = function(anios){
    this.setFullYear( this.getFullYear() + anios);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha.sumarDias(-32));

console.log(fecha.sumarAnios(2));
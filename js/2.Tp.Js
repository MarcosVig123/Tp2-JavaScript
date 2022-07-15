//solicitar al ususario un numero de 0 a 10
//mostrar la calificación en un alert según los siguientes rangos de nota

let nota = parseInt(prompt('Ingrese su nota'));

if(nota <= 2){
    alert('Muy deficiente');
}if(nota <= 4){
    alert('Insuficiente');
}if(nota <= 6){
    alert('Suficiente');
}if(nota === 7){
    alert('Bien');
}if(nota <= 9){
    alert('Notable');
}if(nota === 10){
    alert('Sobresaliente');
}else{
    alert('Ingrese un valor correcto')
};
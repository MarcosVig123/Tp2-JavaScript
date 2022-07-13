//ingrese un numero de dni
//el numero de dni debe estar entre 0 y 9999999
//debemos calcular el resto de la division entre el numero y el numero 23
//switch donde las opciones son de 0 a 22, mostrar por pantalla (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//repetir el proceso hasta que el usuario presione cancelar

let dni = parseInt(prompt('ingrese un dni 0 y 9999999'));
console.log(dni)
if(dni >= 0 && dni <= 99999999){
    //calculo todo el dni
   let resultado = dni % 23;
   console.log(resultado);
   switch(resultado){
    case 0:
        document.write('T');
        alert('T');
        break;
    case 1:
        document.write('R');
        alert('R');
        break;
    case 2:
        document.write('W');
        alert('W');
        break;
    case 3:
        document.write('A');
        alert('A');
        break;
        default: 
        alert('valor erroneo');
   }
}else{
    alert('ingreso un valor erroneo')
};

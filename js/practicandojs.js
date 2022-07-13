let number = parseInt(prompt('ingrese la edad'));
console.log(number)

if(number >= 18){
    document.write('Ingres a la fiesta');
}else if( number < 18){
    document.write('debe venir con un tutor');
}else{
    document.write('no pecha pa sasha');
}
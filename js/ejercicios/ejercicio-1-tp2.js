let edad = parseInt(prompt('Ingrese su edad'));

if(edad >= 18){
    document.write('Ya puede conducir');
}

else if(edad <= 0){
    document.write('No es un número válido');
}

else{
    document.write('No puede conducir hasta cumplir 18 años');
}
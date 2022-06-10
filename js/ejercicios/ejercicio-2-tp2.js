let numero = parseInt(prompt("Ingrese un numero del 1 al 10"));

if (
  numero === 0 ||
  numero === 1 ||
  numero === 2 ||
  numero === 3 ||
  numero === 4 ||
  numero === 5 || 
  numero === 6 ||
  numero === 7 ||
  numero === 8 ||
  numero === 9 ||
  numero === 10
) 

{
  if (numero === 0 || numero === 1 || numero === 2) {
    alert("Muy deficiente");
  }

  if (numero === 3 || numero === 4) {
    alert("Insuficiente");
  }

  if (numero === 5 || numero === 6) {
    alert("Suficiente");
  }

  if (numero === 7) {
    alert("Bien");
  }

  if (numero === 8 || numero === 9) {
    alert("Notable");
  }

  if (numero === 10) {
    alert("Sobresaliente");
  }
} 

else {
  alert("Introduce un número válido");
}

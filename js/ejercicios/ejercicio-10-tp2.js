let filas = parseInt(prompt("Ingrese una cantidad de filas"));
let columnas = parseInt(prompt("Ingrese una cantidad de columnas"));

let resultado = filas * columnas;

console.log(resultado);

document.write(`<table> <tbody>`);

// Aqui dibujo las filas y las celdas
for (let indiceFila = 0; indiceFila < filas; indiceFila = indiceFila + 1) {
  // Aqui dibujo las filas
  document.write("<tr>");

  // Ahora dibujo las celdas
  for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna = indiceColumna + 1) {
    
      document.write(`<td>${resultado}</td>`);
      resultado = resultado - 1
    }

    document.write("</tr>");
}

// document.write(`</tbody> </table>`);

// document.write(`<table>

/* <tbody> 
    <tr> 
       <td>1</td> 
       <td>2</td> 
       <td>3</td> 
    </tr> 
    <tr>
       <td>1</td> 
       <td>2</td> 
       <td>3</td>
    </tr>
 </tbody> 

</table>`);*/

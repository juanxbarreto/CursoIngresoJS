/*Juan Cruz Barreto
Div X
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//Declaro variables
let precioA;
let precioB;
let precioC;
let resultado;
let suma;

//Funcion sumando
function Sumar () 
{
    //Extraigo los datos
    precioA = document.getElementById("txtIdPrecioUno").value;
    precioB = document.getElementById("txtIdPrecioDos").value;
    precioC = document.getElementById("txtIdPrecioTres").value;
    //Lo convierto de string a numero
    precioA = parseInt (precioA);
    precioB = parseInt (precioB);
    precioC = parseInt (precioC);
    //Creo la solucion     
    suma = precioA + precioB + precioC;
    resultado = suma;
    //Muestro el resultado
    alert("La suma es " + resultado);
}

//Funcion promedio
function Promedio () 
{
    //Extraigo los datos
    precioA = document.getElementById("txtIdPrecioUno").value;
    precioB = document.getElementById("txtIdPrecioDos").value;
    precioC = document.getElementById("txtIdPrecioTres").value;
    //Lo convierto de string a numero
    precioA = parseInt (precioA);
    precioB = parseInt (precioB);
    precioC = parseInt (precioC);
    //Creo la solucion     
    suma = precioA + precioB + precioC;
    resultado = suma / 3;
    //Muestro el resultado
    alert("El promedio es " + resultado);
}

//Funcion +IVA
function PrecioFinal () 
{
    //Extraigo los datos
    precioA = document.getElementById("txtIdPrecioUno").value;
    precioB = document.getElementById("txtIdPrecioDos").value;
    precioC = document.getElementById("txtIdPrecioTres").value;
    //Lo convierto de string a numero
    precioA = parseInt (precioA);
    precioB = parseInt (precioB);
    precioC = parseInt (precioC);
    //Creo la solucion     
    suma = precioA + precioB + precioC;
    resultado = suma + suma * 0.21;
    //Muestro el resultado
    alert("El precio final (+iva incluido) es " + resultado);
}
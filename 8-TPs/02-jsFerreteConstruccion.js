/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//Declaracion variables
let largo;
let ancho;
let radio;
let result;

function Rectangulo () 
{
    //Obtengo los datos desde el HTML
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    //Los convierto a numeros desde string
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    //Resulevo
    result = largo * 2 + ancho * 2;
    //Muestro en pantalla
    alert("El largo del cable debe ser de " + result + "m");
}

function Circulo () 
{
    //Obtengo los datos desde el HTML
    radio = document.getElementById("txtIdRadio").value;
    //Los convierto de string a numero
    radio = parseInt (radio);
    //Resuelvo
    result = (radio * 2) * 3.14;
    result = Math.round(result);
    //Muestro en pantalla
    alert("El largo del cable debe ser de " + result + "m");	
}

function Materiales () 
{
    //Declaro variables unicas de esta funcion
    let bolsastotales;
    let bolsascemento;
    let bolsascal;
    let area;

    //Obtengo los datos desde el HTML
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    //Los convierto a numeros desde string
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    //Resulevo
    area = ancho * largo;
    bolsastotales = area * 5; //haciendo regla de 3 simples resulevo el total de bolsas necesarias
    bolsascal = bolsastotales * 0.60;
    bolsascemento = bolsastotales * 0.40;
    //Muestro en pantalla
    alert("Necesitaremos " + bolsastotales + " en total --> " + bolsascemento + " de cemento y " + bolsascal + " de cal");	
}
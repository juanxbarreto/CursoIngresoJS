/*
Juan Cruz Barreto
Div X
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroA;
	numeroA = parseInt (document.getElementById("txtIdNumeroUno").value);
	let numeroB;
	numeroB = parseInt (document.getElementById("txtIdNumeroDos").value);
	let result = numeroA + numeroB;
	alert("La suma da como resultado: " + result);	
}

function restar()
{
	let numeroA;
	numeroA = parseInt (document.getElementById("txtIdNumeroUno").value);
	let numeroB;
	numeroB = parseInt (document.getElementById("txtIdNumeroDos").value);
	let result = numeroA - numeroB;
	alert("La suma da como resultado: " + result);	
}

function multiplicar()
{ 
	let numeroA;
	numeroA = parseInt (document.getElementById("txtIdNumeroUno").value);
	let numeroB;
	numeroB = parseInt (document.getElementById("txtIdNumeroDos").value);
	let result = numeroA * numeroB;
	alert("La suma da como resultado: " + result);	
}

function dividir()
{
	let numeroA;
	numeroA = parseInt (document.getElementById("txtIdNumeroUno").value);
	let numeroB;
	numeroB = parseInt (document.getElementById("txtIdNumeroDos").value);
	let result = numeroA / numeroB;
	alert("La suma da como resultado: " + result);	
}


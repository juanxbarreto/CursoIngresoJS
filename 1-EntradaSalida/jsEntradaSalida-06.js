/*
Juan Cruz Barreto
Div X
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroA;
	numeroA = parseInt (document.getElementById("txtIdNumeroUno").value);
	let numeroB;
	numeroB = parseInt (document.getElementById("txtIdNumeroDos").value);
	let result = numeroA + numeroB;
	alert("La suma de " + numeroA + " + " + numeroB + " = " + result);
}


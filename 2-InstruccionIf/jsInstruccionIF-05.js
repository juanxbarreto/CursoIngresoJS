/*
Juan Cruz Barreto
Div X
Intruccion 05
*/

function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (edad > 17 || edad < 13){
		alert("No eres adolecente!");
	}

}//FIN DE LA FUNCIÓN
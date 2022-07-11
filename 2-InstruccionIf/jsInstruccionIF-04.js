/*
Juan Cruz Barreto
Div X
Intruccion 04
*/

function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (edad < 18 && edad > 12){
		alert("Eres adolecente!");
	}
}//FIN DE LA FUNCIÓN
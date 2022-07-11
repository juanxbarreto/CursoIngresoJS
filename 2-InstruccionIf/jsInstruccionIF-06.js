/*
Juan Cruz Barreto
Div X
Intruccion 06
*/

function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (edad >= 18){
		alert("Eres mayor!");
	} else if (edad <= 12){
		alert("Eres un niño/a!");
	} else if(edad > 12 && edad < 18) {
		alert("Eres adolecente!");
	}
}//FIN DE LA FUNCIÓN
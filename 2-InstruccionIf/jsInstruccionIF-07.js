/*
Juan Cruz Barreto
Div X
Intruccion 07
*/

//Variables
let edad;
let estado;

function mostrar()
{
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;
	if (estado != "Soltero" && edad < 18){
		alert("Es muy pequeño para NO ser soltero.");
	}
	


}//FIN DE LA FUNCIÓN
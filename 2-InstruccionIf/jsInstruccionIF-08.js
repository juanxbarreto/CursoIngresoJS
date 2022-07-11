/*
Juan Cruz Barreto
Div X
IntruccionIF 08
*/
let edad;
let estado;

function mostrar()
{
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;
	if (estado == "Soltero" && edad > 17){
		alert("Es soltero y no es menor.");
	}
	
}//FIN DE LA FUNCIÓN
/*
Juan Cruz Barreto
Div X
IntruccionIF 10
*/

function mostrar()
{
	let nota;
	nota = Math.random()*10;
	nota = Math.ceil(nota);
	if(nota >= 9){
		alert("EXCELENTE tu nota fue " + nota);
	} else{
		if(nota >= 4){
			alert("APROBO tu nota fue " + nota);
		} else {
			if(nota <= 3){
				alert("Vamos, la proxima se puede! tu nota fue " + nota);
			}
		}
	}

}//FIN DE LA FUNCIÓN
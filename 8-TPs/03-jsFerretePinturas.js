/*
Juan Cruz Barreto
Div X
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//Declaracion variables
let temp;
let result;

//De F a C 
function FahrenheitCentigrados () 
{
    //Extraigo los datos
    temp = document.getElementById("txtIdTemperatura").value;
    //Lo convierto de string a numero
    temp = parseInt(temp); 
    //Hago la conversion utilizando esta formula = (x °F − 32) × 5/9 = resultado en °C
    result = (temp - 32) * 5/9;
    //Muestro el resultado con un alert
    alert(result);
}


//De C a F
function CentigradosFahrenheit () 
{
    //Extraigo los datos
    temp = document.getElementById("txtIdTemperatura").value;
    //Lo convierto de string a numero
    temp = parseInt(temp); 
    //Hago la conversion utilizando esta formula = (x °C × 9/5) + 32 = resultado en °F
    result = (temp * 9/5) + 32;
    //Muestro el resultado con un alert
    alert(result);
}

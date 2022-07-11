/*
Juan Cruz Barreto
Div X
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */





function CalcularPrecio () 
{
    //Decalro variables
    let precio_lampara;
    let cant_lamparas;
    let marca_lamparas;
    let precio_final;
    let total;
    let impuestos;
    let precio_final_impuestos;

    //Asigno valores
    marca_lamparas = document.getElementById("Marca").value;
    cant_lamparas = document.getElementById("txtIdCantidad").value;
    cant_lamparas = parseInt(cant_lamparas);
    precio_lampara = 35;
    total = cant_lamparas * precio_lampara;
    precio_final = total;

    //Punto A
    if (cant_lamparas >= 6){
        precio_final =  total - total * 0.50;
    }
    //Punto B 
    else if (cant_lamparas == 5){
        if (marca_lamparas == "ArgentinaLuz"){
            //Si compra "ArgentinaLuz" aplicamos descuento del %40
            precio_final = total - total * 0.40;
        } else{
            //Si compra otra marca el descuento es del %30
            precio_final = total - total * 0.30;
        }
    } 
    //Punto C
    else if (cant_lamparas == 4){
        if (marca_lamparas == "ArgentinaLuz" || marca_lamparas == "FelipeLamparas" ){
            //Si compra "ArgentinaLuz" ó "FelipeLamparas" aplicamos descuento del %25
            precio_final = total - total * 0.25;
        } else{
            //Si compra otra marca el descuento es del %20
            precio_final = total - total * 0.20;
        }
    } 
    //Punto D
    else if (cant_lamparas == 3){
        if (marca_lamparas == "ArgentinaLuz"){
            //Si compra "ArgentinaLuz" aplicamos descuento del %15
            precio_final = total - total * 0.15;
        } else if (marca_lamparas == "FelipeLamparas"){
            //Si compra "FelipeLamparas" el descuento es del %10
            precio_final = total - total * 0.10;
        } else{
            //Si compra otra marca el descuento es del %5
            precio_final = total - total * 0.05;
        }
    }

    //Punto E y Devuelvo el valor
    if (precio_final > 120 ){
        //Devuelvo el valor con impuestos
        impuestos = precio_final * 0.10;
        precio_final_impuestos = impuestos + precio_final;
        alert("IIBB Usted pago $" +  precio_final_impuestos + ", siendo $" + impuestos + " el impuesto que se pagó.");
        document.getElementById("txtIdprecioDescuento").value = precio_final_impuestos;
    } else {
        //Devuelvo el valor sin impuestos
        document.getElementById("txtIdprecioDescuento").value = precio_final;
    }
}


/*Inicio de Formulario*/
alert("Los destinos disponibles por el momento son: Bariloche, Cataratas y Catamarca - ¡Con tu código promocional hasta 50%  de descuento HotSale!");
    let lugar = prompt('Ingrese el destino al que desea viajar');
    if (lugar !="Bariloche" && lugar != "Cataratas" && lugar != "Catamarca"){
        alert("Destino inválido")
    }
    let pasajeros= prompt('Ingrese la cantidad de pasajeros');
alert ("Confirma que desea añadir en su carrito el viaje seleccionado");
    let nombre = prompt ("Ingrese su nombre y apellido");
    let numeroDeTarjeta = prompt ("Ingrese su numero de tarjeta");
    let tarjeta= parseInt (numeroDeTarjeta);
    let numeroDePasajeros= parseInt (pasajeros);
   
/*definimos variales*/

let bariloche =50000;
let cataratas= 45000;
let catamarca=55000;
let costo;
let total;
let descuento= 123;

/*Procesamos la compra con o sin descuento*/
if (lugar=="Bariloche"){
    costo= bariloche * numeroDePasajeros;
    alert ("Hola " + nombre +" su costo de viaje es:"+ costo);
        let codigoDedescuento= prompt("Ingrese un código de descuento");
        /*Calcular valor final de un producto seleccionado en función de descuentos. */
        if (codigoDedescuento==descuento){
        total=costo / 2;
        alert ("su costo con descuento es "+ total)
        } else alert("Código inválido"); 
}else if (lugar=="Cataratas"){
    costo = cataratas*numeroDePasajeros;
    alert ("Hola " + nombre +" su costo de viaje es:"+ costo)
        let codigoDedescuento= prompt("Ingrese un código de descuento");
        /*Calcular valor final de un producto seleccionado en función de descuentos. */
        if (codigoDedescuento==descuento){
        total=costo / 2;
        alert ("su costo con descuento es "+ total)
        } else alert("Código inválido");
}else if (lugar== "Catamarca"){
    costo= catamarca*numeroDePasajeros;
    alert ("Hola "+ nombre +" su costo de viaje es:"+ costo)
        let codigoDedescuento= prompt("Ingrese un código de descuento");
        /*Calcular valor final de un producto seleccionado en función de descuentos. */
        if (codigoDedescuento==descuento){
        total=costo /2;
        alert ("su costo con descuento es "+ total)
        }else alert("Código inválido");
}else alert("ningun destino es correcto");




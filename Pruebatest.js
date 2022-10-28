// function buscarDia(dia,mes) {
//     console.log ("El dia de hoy es: " +dia+ " el mes es: " +mes)
// }
//  buscarDia("miercoles","diciembre")


// ● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
// producto
// ○ Crea una función que retorne el valor del producto más costoso.
// ○ Crea una función que retorne el valor del producto menos costoso.
// */
// /*
// ● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
// compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
// valores de los productos a comprar, esta debe retornar el total final de la compra según
// corresponda o no descuento.
// */

// obs: los días se deben ingresar como tipo String y los valores de los productos a
// // comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]
// // ● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
// // compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
// // valores de los productos a comprar, esta debe retornar el total final de la compra según
// // corresponda o no descuento.

// || -> O, si se cumple una o la otra da verdarero && -> las dos tienes que cumplirse para dar verdarero//

     function descuento(dia) { 
      var valores = [1000,500,650,8000]
      if (dia == "martes" || dia == "jueves") {
         nuevosvalores = []; // arreglo vacio para ingresar valores       
         valores.forEach((x) =>  nuevosvalores.push(x * 0.8));
                             //agregamos nuevos valores a la funcion
          console.log(nuevosvalores)
          let suma = nuevosvalores.reduce((a, b) => a + b, 0);
         console.log(suma)
    } else {
        console.log ("No hay descuento desu");
      }
    
  }
  descuento("martes");

//● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
// menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
// total verificando si corresponde o no el descuento.

  function descuento5(){
     var precioProducto = [15000,50000,65000,8000];
     var compraMayor = compra[0];
     var precioSobre10 = [];
     //repite todo lo que esta dentro de la funcion for 
     for (i = 0; i < precioProducto.length; i++) { //con esto recorro mi arreglo completo 
      if (compra[i]>compraMayor) {
         compraMayor=compra[i];
      
         if (compra.length>3 && compraMayor>10000) { // si la lista de arriba supera los 3 productos y uno esta sobre los 10mil
            precioSobre10 = (precioSobre10+precioProducto[i])*0.95; //devuelvo la suma total y multiplico por 0.95 para aplicar el 5% :D
      }
      } else { //si no se cumple ninguno de los dos 
         precioSobre10+=compra[0];
      }
        
     }return precioSobre10 


    
  }
   var comprasifunciono = descuento5(precioProducto);
   console.log(comprasifunciono);  


// ● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
// valores de los productos a comprar no existan valores negativos ingresados por error,
// en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
// un mensaje de error junto con el número negativo y el índice en el que se encontraba

 var valores = [1000,500,650,8000]
 var compraMenor = compra2[0];
 var mensaje;

 function valoresNegativos(compra2){
   for (i =0;i<compra3.length;i++){ //aqui aplico la funcion para recorrer el arreglo
        if(compra2[i]<compraMenor)  // con esto verificare cual es el numero menor 
        compraMenor = compra2[i]; // con esto guardo la variable compraMenor :3
   }

 }

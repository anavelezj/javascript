
// Una nota muy importante es que en la consola los números se muestran de diferente color cuando es número que cuando es un string que representa un número
const numero6 = 20;
const numero7 = "20";

// Crear Números
const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .10213;
const numero5 = -3;

// Otra forma de crear número 
const numero8 = new Number(20);
console.log(numero8);

// Operaciones
let resultado;
// operadores, hay para realziar sumas, multiplicaciones, restas y comparar si un número es mayor a otro

// Suma
resultado = numero1 + numero2;
// Resta
resultado = numero1 - numero2;
// Mult
resultado = numero1 * numero2;
// Division
resultado = numero1 / numero2;
// Modulo
resultado = numero1 % numero2;
console.log(resultado);


// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles 

// Pi
resultado = Math.PI;
// redondeo
resultado = Math.round(2.5);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
// Raiz cuadrada
resultado = Math.sqrt(144);
// Abssoluto
resultado = Math.abs(-300);
// Potencia
resultado = Math.pow(8, 3);
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
// Aleatorio
resultado = Math.random();
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );


console.log(resultado);

// El Orden en que se ejecutan las operaciones en JavaScript 
resultado = 20 + 30 * 2;
resultado =  ( 20 + 30 ) * 2;

// 20% De descuento en un carrito de compra.
resultado = ( 20+10+30+40+50 ) * .20;

console.log(resultado);

// incrementar un valor de 1 en 1 o en determinada cantidad
// Incluir incremento por 1 y menos 1

let puntaje = 5;
puntaje++;
puntaje--;
++puntaje;
--puntaje;

puntaje += 3;
puntaje -= 3;

console.log(puntaje);

// funciones para convertir a números

const numero_1 = "20";
const numero_2 = "20.2";
const numero_3 = "Uno";
const numero_4 = 20;

console.log(numero_1);

// Convertir de Strings a Números flotantes o Enteros

console.log(Number.parseInt(numero_1)); // Convertir de String a Número
console.log(Number.parseFloat(numero_2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero_3)); 

// Revisar si un número es entero
console.log(Number.isInteger(numero_4) ); // Revisar si un número es entero o no
console.log(Number.isInteger(numero_3) ); //Revisar si un número es entero o no

// Convertir String a numero
console.log(numero_4.toString());
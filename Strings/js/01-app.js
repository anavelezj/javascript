// Los strings o cadenas de texto representan un Texto que se puede asignar a una variable
// existen 3 formas de crearlos que son más populares.
//  formas crean lo que se conoce como una cadena primitiva
// const producto = 'Monitor 20 Pulgadas';
// const producto2 = String('Monitor 24 Pulgadas'); 
// // La siguiente forma es menos común
// const producto3 = new String('Monitor 30 Pulgadas'); // Esto crea un objeto cadena


// algunas reglas para crear los strings:
const producto = 'Monitor 20 Pulgadas'; // Utiliza comillas sencillas
const producto2 = "Monitor 20 Pulgadas"; // Utiliza comillas o dobles
// pero nunca las mezcles

// Ejemplo con Pulgadas
const producto4 = "Monitor 24\"";
console.log(producto4);


// algunos métodos existentes en los strings o cadenas de Texto:
const precio = '30 USD';
console.log(producto.length); 
// Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () 
//y es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes
console.log(producto.includes('Monitor')); // Conocer si un texto existe, distingue entre may y min

// Concat
console.log(producto.concat('En Descuento')); // Concactenar un string
console.log(producto.concat(precio)); // Concactenar una variable

// como concatenar o unir 2 textos o variables:
console.log(producto + precio); 
console.log(producto +  "Con un precio de " +precio); 
console.log("El Producto" + producto +  " tiene un precio de " + precio); // Esta forma se puede complicar
console.log("El Producto" , producto ,  " tiene un precio de ",  precio); // Otra forma

// ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal
console.log(`El Producto ${producto} tiene un precio de ${precio}`);


// 3 métodos para strings
const producto3 = '        Monitor 20 Pulgadas      ';  //cadena cuenta los espacios
console.log(producto3);
console.log(producto3.length);

// Eliminar espaciods del inicio y del final
console.log(producto3.trimStart()); // Elimina todos los espacios en blancos del inicio
console.log(producto3.trimEnd()); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto3.trimStart().trimEnd() ); // Cortar en ambas direcciones

// Un método (que ya tiene rato) es trim que hace lo mismo
console.log(producto3.trim().length);

// Replace 
const productoMetodos = 'Monitor 20 Pulgadas';
console.log(productoMetodos.replace("20", "24"));
console.log(productoMetodos.replace('Pulgadas', '"'));

// Slice permite extraer una parte de una cadena
console.log( productoMetodos.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(productoMetodos.slice(8));// Cortar desde el 8 hasta el fin
console.log(productoMetodos.slice(2, 10)); // cortar desde 2 hasta el 10
console.log(productoMetodos.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// Existe uno similar a Slice que se llama substring
console.log( productoMetodos.substring(0, 10) );
console.log( productoMetodos.substring(2, 1) );  
// Si el número es mayor al segundo, va a cortar hacia atras (voltear los números) 
//diferencia con slice que no lo hace

// extraer primer letra de un string:
const nombre = "Juan";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));

// Repeat permite repetir una cadena de texto:
const productoR = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(productoR.repeat(3));
console.log(productoR.repeat(2.2)); // va a redondear a entero
console.log(`${productoR} ${texto} !!!`);
 
// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

// .toUpperCase() permite cambiar un texto a todo mayusculas
const productoT = 'Monitor 24 pulgadas ';
console.log(productoT.toUpperCase() );

// .toLowerCase() permite cambiar un texto a todo minusculas
console.log(productoT.toLowerCase() );

// .toString() permite convertir a cadena
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());


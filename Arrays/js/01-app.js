// arrays sirve para agrupar elementos del mismo tipo.

// como crear un Arreglo...
const numeros = [10,20,30,40,50];
console.log(numeros);

// En JavaScript []] es un arreglo, a diferencia de los objetos  es la de unas llaves { }

// El arreglo anterior fue de números, se puede crear uno de Strings y se puede crear utilizando la palabra new
//const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
//console.log(meses);

// Ahora no es obligatorio que el arreglo tenga numeros o strings unicamente, también puede tener un poco de todo:
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
console.log(deTodo);

// incluso un array puede tener un array dentro, un arreglo es una forma de agrupar grandes cantidades de información en una sola variable.
// Veamos como acceder a los elementos de un arreglo, por ej table
console.table(numeros);


//los arreglos inician en indice 0 usualmente 

console.log(numeros[0]) //hola
console.log(numeros[1]) //10
console.log(numeros[3])//si
console.log(numeros[20])//agrega elemento al arreglo


// Veamos algunas operaciones útiles en los arreglos,
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses.length);

// pero si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, 
//con algo llamado un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

for (const element of meses) {
    console.log(element);
}

// Al Igual que los objetos un arreglo se puede modificar a pesar ade utilizar la palabra const
meses[0] = 'Nuevo Mes'

// También se puede añadir al final
meses[6] = 'Ultimo Mes'

// Al igual que los objetos en los arrays existen métodos que son bastante útiles,

console.log(meses);

// Supongamos que creamos un carrito de compras desde la consola
const carrito1 = [];

// Añadir un elemento al carrito1...
const producto1 = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const productoo2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito1.push(producto1);
carrito1.push(productoo2);


// Añadir al Inicio del carrito...
const producto03 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito1.unshift(producto03);
console.log(carrito1);

// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
// Para añadir producto1 al arreglo simplemente agregamos...
let resultado = [...carrito1, producto1];
 resultado = [...resultado, productoo2];
 console.log(resultado);

 // Para añadir al inicio...
 resultado = [producto03, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);


carrito1.push(producto1);
carrito1.push(productoo2);
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito1.unshift(producto03);
console.log(carrito1);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
 carrito1.shift();
 console.log(carrito1);

// Eliminar el ultimo elemento...
 carrito1.pop();
 console.log(carrito1);

// Ahora supongamos que deseas eliminar del centro...
carrito1.splice(1,0); // el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, 
//entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
// carrito.splice(1, 2);

console.log(carrito1);

// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, 
//veamos algunos ejemplos:

const [primero, , segundo, tercero ] = numeros;
// Si quieres saltarte un valor, pon una coma....
// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, 

console.log(primero);
console.log(segundo);
console.log(tercero);


// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito1.length; i++ ){
    console.log( `Articulo: ${ carrito1[i].nombre } Precio: $ ${carrito1[i].precio} ` )
}

for(const element of carrito1){
    console.log( `Articulo: ${ element.nombre } Precio: $ ${element.precio} ` )
}

// ForEach
carrito1.forEach( function(producto) {
    console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
})


// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...


const nuevoArray = carrito1.map( function(producto) {
   return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
})

const nuevoArray2 = carrito1.forEach( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
 })

console.log(nuevoArray);
console.log(nuevoArray2);
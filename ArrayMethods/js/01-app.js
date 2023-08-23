// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//lo que es constante es la referencia no los valores del arreglo

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// Si te gustaría saber si nuestro arreglo de meses, tiene el mes de Enero, podrías hacerlo con un foreach
meses.forEach(mes => {
    if(mes === 'Enero'){
        console.log('Enero si existe')
    }
})

// O también podrías utilizar el Array Method de .includes
const resultadoI = meses.includes('Enero'); // Cambiar a Diciembre
console.log(resultadoI);

// En el caso de un arreglo de objetos .includes no es la mejor opción, podrías utilizar uno llamado .some
const existe = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe);

// some para objetos, include para primitivos

// Some en un arreglo tradicional
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);


// El Segundo Array Method  es findIndex
// como seria el ejemplo con un forEach
meses.forEach( (mes, index) => {
    if(mes === 'Abril') { // Si ponemos diciembre no lo va a encontrar
        console.log(`Encontrado en el indice ${index}`);
    }
});

// FindIndex te dirá el indice es decir la ubicación del elemento en el arreglo
const indice = meses.findIndex( mes => mes === 'Abril' ); // Cambiar a Diciembre, Tendremos -1 eso quiere decir que no lo encontró
console.log(indice);


// Otro Array Method  es  .reduce
// Si buscas la definición de que es una función reduce te dirá que es una función reductora
// Pero basicamente es tomar una gran cantidad de datos y entregar un resultado..
// Supongamos que tenemos nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar
// Con un foreach lo podrías hacer asi

let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total);

// Puedes ver que si bien no se ve mal, podemos tenerlo todo en una sola linea con un .reduce
// total, actual
let resultadoR = carrito.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio
console.log( resultadoR );

// Otro Array Method que quiero mostrarte es filter
// Filter va a crearte un arreglo basado en un parametro que es evaluado..
let resultadoF = carrito.filter( producto => producto.precio > 400 ); // Todos los mayores a 400 
let resultado2F = carrito.filter( producto => producto.nombre === 'Celular'  ); // Traerte el celular
let resultado3F = carrito.filter(producto => producto.nombre !== 'Laptop'); // Todos menos la laptop


console.log(resultadoF);
console.log(resultado2F);
console.log(resultado3F);

// Filter es en mi opinión el más util y el más utilizado!
// fiND te creará un arreglo nuevo en base al primer resultado que sea true
// con un foreach seria algo asi
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Bocinas') {
        resultado = carrito[index]
    }
});
console.log(resultado);


// con .find seria
const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
console.log(resultado2);


// Every es raro, ya que todos los elementos del arreglo deberán cumplir esa condición..
// con un foreach seria algo asi...
let cumple = true;
carrito.forEach( producto => {
    if(producto.precio > 700) {
        cumple = false;
        return
    }
})
console.log(cumple);

const resultado = carrito.every(producto => producto.precio < 1000); // Mil se cumple, 700 no...
console.log(resultado);

// unir 2 arreglos, para ello existe un arreay method llamado .concat

const mesesC = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2C = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


// Unir 2 arreglos con concat...
const meses3C = mesesC.concat(meses2C);
console.log(meses3C);

// Existe otra forma... que es con rest operator o spread operator..
const meses4 = [...meses,...meses2 ]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(meses4)

// Un poco más sobre el rest operator...

// El rest operator es muy útil para crear un nuevo arreglo sin modificar el original...
// digamos que tienes un arreglo y quieres añadir un elemento al final que es un string utilizarias...

const meses2 = [...meses, 'Julio'];
console.log(meses);
console.log(meses2); // Recuerda esto no modifica el arreglo original como si haria push y eso es muy útil en un tipo de programación llamada funcional...

// O al inicio... en lugar de utilizar unshift, 
const meses3 = ['Julio',...meses ]; 


// O tal vez quieres añadir un objeto a un arreglo de objetos al final
const producto = {producto: 'Disco Duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);


// o al inicio
const carrito3 = [producto, ...carrito];
console.log(carrito3);

// Las variables son una caracteristica de cualquier lenguaje de programación
// existen 3 formas de crear variables en JavaScript, en nuevas versiones solo se utilizan 2: let, const
// Variables con var (var no se usa) var era la forma de crear variables en versiones anteriores de ECMASscript 
//hoy en día las opciones se reducen a 2

/*var producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico, No se especifican tipos de datos cuando se crea la variable
var precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después

var disponible;
disponible = true;


// Inicializar múltiples variables  separadas por coma
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)


// Reglas de las variables:

// Pueden tener: letras, numeros, _   No pueden iniciar con numero
//var 99dias; no esta permitido
var dias99;

var _01;
//var 01_; tampoco esta permitido terminar una variable con _ (reservado)

// Estilos para nombrar variables con más de una palabra
var nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
var nombre_producto = 'Monitor 30 Pulgadas'; //underscore
var NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
var nombreproducto = 'Monitor 30 Pulgadas'; // minusculas

;*/
// Las reglas son básicamente las mismas con let , la diferencia es el scope 
// con let permite inicializar variable asignar valor y reasignar

let producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;

console.log(producto)

// Javascript es un lenguaje de tIpo Dinamico, No se especifican tipos de datos cuando se crea la variable
let precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después

let disponible;
disponible = true;


// Inicializar múltiples variables 
let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)


// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero
//let 99dias;  NO permitido
let dias99;

let _01;
//let 01_;  NO permitido

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
let  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
let nombre_producto = 'Monitor 30 Pulgadas'; //underscore
let NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
let nombreproducto = 'Monitor 30 Pulgadas';// mminusculas



// Veamos el 3er tipo de formas de crear variables, const
// Existen pocas diferencias entre let y const:

// primero una variable con const su valor no puede ser re-asignado:

const productoC = 'Monitor 30 Pulgadas';
console.log(productoC);
//producto = 'Monitor 23 Pulgadas';  error ya fue declarado

// Por otro lado, las variables con const, deben iniciarse con un valor:
//const precio; marca error porque no tiene valor asignado
precio = 20;
console.log(precio);

// Existen otras diferencias entre const y let especialmente cuando se trabajan con arreglos y objetos,
//  recuerda, las variables con const, no se pueden re-asignar y tampoco pueden iniciar sin un valor.
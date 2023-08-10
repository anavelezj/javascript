const IVA = 1.21;
let precio1 = 25;
precio1 = precio1 * IVA;

let precio2 = 15;
precio2 = precio2 * IVA;
const CANTIDAD1 = 2;
const CANTIDAD2 = 4;
let totalFactura = precio1 * CANTIDAD1 + precio2 * CANTIDAD2;

console.log(totalFactura);

// string
"hola";
'hola';
`hola`;

let edad=15;

console.log(`Mi nombre es 'Ana' y tengo ${edad} años`);

//number
let numero =6;
numero = numero+2;
numero+=2;

console.log(numero); //10

const nulo = null;
const verdadero = true; //boolean
let indefinido ;

console.log(nulo, indefinido); //null valor especifico null, undefined variable sin valor


//array tipo de dato array typeof tipo de datos

console.log(typeof "hola"); //string
console.log(typeof 5); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof function () {}); //function
console.log(typeof []); //object


//operaciones conversion implicita

let resultado = "2"+2;
resultado *=2;
console.log(resultado); //44 => 22*2

const cadena ="5";
const numeroE=5;
const condicion = false;
const nuloE=null;
let indefinidoE;

console.log(numeroE+condicion); //6  false 0 true1
console.log(numero+nulo);//5 nulo 0
console.log(numero+indefinido); //NaN not a number

//conversión explicita, decir a JS convertir a un tipo especifico

console.log(Number(cadena));
console.log(String(numeroE));
console.log(Boolean("")); //cadena vacia es false, el resto es true
console.log(Boolean("true")); //cadena vacia es false, el resto es true
console.log(Boolean(0)); //solo 0 es false resto es true
console.log(Boolean(5)); //solo 0 es false resto es true
console.log(Boolean(null)); //false
console.log(Boolean(indefinido)); //false

//parseInt, parseFloat, 

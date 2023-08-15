// El tipo de dato boolean solo puede tener 2 valores, true o false
const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(boolean2);
console.log(typeof boolean2); //false

//También un Boolean se puede crear con la palabra new
const boolean3 = new Boolean(true);
console.log(boolean3);
console.log(typeof boolean3);

// Comparar booleans es exactamente igual que cualquier comparación de números o strings
console.log(boolean1 === boolean2); // comparar 2 variables
console.log(boolean1 === true); // comparar si un boolean es verdadero
console.log(boolean2 === true);// comparar si un boolean es verdadero

// Aún no hemos llegado a ello, pero muchas personas cometen el siguiente error cuando escriben código javascript en un if
if(boolean1 === true) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

// Pero este código se puede simplificar quitando el === true porque ya sabemos que la variable es true
if(boolean1) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log( boolean1  ? 'Si es true' : 'No no es true' )
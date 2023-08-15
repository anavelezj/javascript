// De momento todo nuestro código se ejecuta de arriba hacia abajo salvo cuando llamamos una función
// Algunas veces vas a desear que tu código se ejecute basado en una condición


// Y para ejecutar nuestro código basado en una condición, se utilizan las estructuras de control...

// Operador if
const puntaje = '1000';

// es igual
if(puntaje == 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// Veamos otras comparaciones
// No es igual
if(puntaje != 1000) {
    console.log("Si! es diferente!");
}  else {
    console.log("No, no es diferente");
}
// comparador estricto de tipo y valor
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// comparador estricto de tipo y valor
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
    console.log("No no es igual");
}


// Veamos como utilizar los operadores de mayor que o menor que...

if( dinero > totalCarrito ) {
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes');
}

// También puede ser sin llaves
if( dinero > totalCarrito )
    console.log('Pago Correcto');
else
    console.log('Fondos Insuficientes');


// Algunas veces  revisar si se cumple más de una condición...
let rol = 'ADMIN';

if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario solo puede editar sus registros');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...


if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario puede editar todos los registros');
} else if(rol === 'AUTOR') { 
    console.log('El usuario solo puede registrar usuarios');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// Para ello llegan a ser más útiles los Switch
// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aún no has pagado');
        break;
}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if
// Veamos que son el Operador && y en el siguiente vemos que es el OR
// El Operador && Revisa que se cumplan ambas condiciones...


// Vamos a crear un par de variables...

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Tu Pedido se hizo con éxito...');
    
} else {
    console.log('hubo un error con tu pago.')
}

if (usuario && puedePagar) {
    console.log('Tu Pedido se hizo con éxito...');
} else if (!usuario) {
    console.log('Inicia sesión para realizar el pedido')
} else if(!puedePagar) {
    console.log('Fondos Insuficientes')
} else {
    console.log('hubo un error con tu pago.')
}

// l operador && y en el se deben cumplir ambas condiciones...

// El operador OR revisa porque se cumpla al menos una o la otra, 

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if(efectivo > totalCarrito || credito > totalCarrito ) {
    console.log('Puedes pagar con efectivo o credito');
} else if(disponible >= totalCarrito) {
    console.log('Paga con ambos');
} else {
    console.log('No puedes pagar');
}


// Buenas practicas con ifs...
// una muy común es que muchas personas hacen lo siguiente...

const autenticado = true;

if(autenticado === true) {
    console.log('El Usuario esta autenticado')
}

// Debido a que el IF ya retorna true, puedes eliminarlo y tu código será mejor..
// También muchas personas escriben ifs pensando que se podrán ejecutar 2 condiciones al mismo tiempo, el if solo va aejecutar la primera que se cumpla


if(puntaje > 300) {
    console.log('Buen puntaje... felicidades');
} else if(puntaje > 400) {
    console.log('Excelente esfuerzo')
} else {
    console.log('No sabria decirte, pero buen esfuerzo...')
}

// Previamente vimos los operadores ternarios, llegan a ser muy útiles ya que te dan un código más simplificado, veamos como se utilizan...

console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');


// El OR y el && también se pueden utilizar en el ternario

console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// Ternario anidado...

console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pgar' : 'No esta autenticado');


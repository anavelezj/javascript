// los For Loops tienen esa caracteristica, se ejecutan hasta que el código deja de cumplir esa condición...
// For loop
// Inicializar el for
// condición
// Incremento

for(let i = 0; i <= 10; i += 2) {
    console.log(`Numero:  ${i} `);
}


// Podemos llevar este ejemplo más allá una pregunta sencilla para programadores JR es como identificas
// un numero par o impar en un for loop, con %
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
}
    


// Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}

// en este caso nuestro for loop corre hasta que una condición se cumple,
// ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos,
// un for loop ejecutará el código hasta que lleguemos al final del carrito...

//  break cortará la ejecución del for loop, mientras que continue nos permitirá 
//interceptar digamos un elemento y continuar su ejecucicón...


for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... FIN.');
        break;
    }
    console.log(`Numero:  ${i} `);
}


for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... CONTINUAR....');
        continue;
    }
    console.log(`Numero:  ${i} `);
}


for(let i = 0; i <= 10; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);
}

// Fizz Buzz es un reto que complica mucho a los programadores, 
//básicamente si un número es múltiplo de 3 imprimes FIZ, si es múltiplo de 5 imprimes BUZZ 
//y si es múltiplo de ambos como 15, 30, 45 debes imprimir FIZZ BUZZ, 
// 3 6 9 12 15 ...  FIZZ
// 5 10 15 20 25 ... BUZZ
// 15 30 45 ... Fizz Buzz

for(let i = 1; i < 100; i++  ) {
    if(i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`)
    } 
}


// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..
i = 0;
while (i < 10) { // condicion
    // Bloque de código...
    console.log(`Numero: ${i}`);
    i++; // incremento
}

// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicicializamos en 20, no hará nada..
// a diferencia del for y del while, el do while se ejecuta al menos una vez, 
// y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.
let i = 0; // probar con 1000

do {
    console.log(`Numero: ${i}`)
    i++;
} while( i < 10 );


// Ahora, lo que hace diferente a un while de un for o un do while, 
//es que al menos se va a ejecutar una vez aunque la condición no se cumpla...

// previamente ya habiamos visto forEach y Map

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
carrito.forEach( producto =>  {
    console.log(`Agregaste ${producto}`);
});

// Lo mismo aplica para los maps, la sintaxis es la misma,
// el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, 
//si requieres crear un nuevo arreglo, sin duda el map sera mejor...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, 
//este ejecuta mientras haya elementos por iterrar como puede ser un arreglo 
for (let pendiente of pendientes) {
    console.log(pendiente);
}

// el for in va a iterar sobretodas las propiedades de un objeto, 
//recorrer un arreglo con objetos
for (let producto of carrito) {
    console.log(producto.producto);
}


let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}
for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}


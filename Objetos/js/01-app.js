// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta información en una sola variable 
// Estas llaves despues del signo = representan un objeto
// si deseas agregar más propiedades puedes hacerlo de la siguiente forma
// Veamos como acceder a las propiedades de un objeto:
const producto = {
    nombre: "Monitor 20 pulgadas", // Esto se le llama una propiedad o llave del objeto La , es importante, sin ella tendriamos un error
    precio: 30, // Nota como en lugar del signo igual se utilizan : , esta sintaxis es propia de los objetos y representa el valor que tendrá la propiedad o la llave del objeto, muchas veces se les dice llave valor
    disponible: true, // el último elemento puede o no tener la ,
}
console.log(producto);

// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma aunque no tan común es:
console.log(producto['nombre']);

// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen = "image.jpg";

// Finalmente para eliminar una propiedad se utiliza delete
delete producto.nombre;
console.log(producto);

// Algunas veces deseas asignar el valor de un objeto hacia una variable, veamos como hacerlo en el siguiente video
 const nombreObjeto = producto.nombre;

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...
// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas
const { nombreDestruc } = producto;

// si deseas extraer más variables;
const { precioP } = producto;

console.log(nombre)
console.log(precio)

// mejor hacerlo así 
const {nombreDestruc1, precioP1} = producto;

// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}
console.log(producto); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);


// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}

const { nombre, informacion, informacion: { peso, medida } } = producto;
console.log(nombre)
console.log(informacion)
console.log(peso)
console.log(medida)

// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}
console.log(producto);
producto.disponible = false;
console.log(producto); // Puedes ver que lo pudimos modificar, a pesar de ser const, veamos como prevenir esto en el próximo video


"use strict";  /// no deja modificar el objeto prevenirlo en caso de que sea algo que desees hacer

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);

// como prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente forma:
Object.freeze( producto ); // Freeze toma como argumento el objeto

producto.disponible = false;
console.log(producto);

// Freeze tampoco permite agregar nuevas propiedaes
producto.imagen = "imagen.jpg";
console.log(producto);

// Tampoco se pueden eliminar propiedades
delete producto.nombre;
console.log(producto);

// Finalmente si quieres revisar si un objeto esta congelado se puede usar
console.log( Object.isFrozen(producto) );
console.log(producto);


"use strict";
// Similar a Freeze, existe otro object method llamado Seal
// A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true<
}

Object.seal(producto);

// Se pueden reasignar
producto.nombre = 'Tablet';
console.log(producto);

// Pero no eliminar
delete producto.precio;
console.log(producto);

// Tampoco se pueden añadir nuevas
producto.imagen = "imagen.jpg";
console.log(producto);

// Verificar si un objeto esta sellado
console.log(Object.isSealed(producto))
console.log(producto);


// Veamos como unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente 
//y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// Una forma de hacerlo es con el object method llamado assign
const resultado = Object.assign(producto, medidas);

// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator, veamoslo en el siguiente video
console.log(resultado);


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator
const resultadoS = { ...producto, ...medidas};
console.log(resultadoS);


// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento
// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo() );

// En este video estaremos viendo Object.keys y object.values y entries, estos son más conocidos como iteradores 
//de objetos, 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(Object.keys(producto));// nos devolverá un arreglo con los keys del objeto
console.log(Object.values(producto)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(producto)); // Entries nos va a retornar una matriz de llaves y valores


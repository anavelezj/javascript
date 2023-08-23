//The three types of Scope are Global Scope, Function Scope, and Block Scope. 
//Before ES6 (2015), JavaScript had only Global Scope and Function Scope with the var keyword. 
//ES6 introduced let and const which allow Block Scope in JavaScript.

//Global Scope: Variables declared outside any function or curly braces ’{}’ have Global Scope, 
//and can be accessed from anywhere within the same Javascript code. var, let and const all provide this Scope.

//Function Scope: Variables declared within a function can only be used within that same function.
// Outside that function, they are undefined. var, let and const all provide this Scope.

//Block Scope: A block is any part of JavaScript code bounded by ’{}‘. 
//Variables declared within a block can not be accessed outside that block. 
//This Scope is only provided by the let and const keywords. 
//If you declare a variable within a block using the var keyword, it will NOT have Block Scope.


// a es una variable global ya que podemos acceder tanto fuera como dentro de una función 
//debido a haberla definido fuera de cualquier función.
var a = 1;
function global() {
    console.log(a);
}
global();
console.log(a);


// la variable a es local ya que la definimos dentro de la función local(), 
//esto quiere decir que solo podemos acceder a ella dentro dicha función, cuando ejecutamos local() 
//te muestra correctamente 2, mientras que si haces console.log(a) te va a dar error porque a no esta definida, 
//para el scope global esa variable no existe.

function local() {
    var a = 2;
    console.log(a);
}
local();
console.log(a);

// una variable definida con let puede solo existir en el scope de un ciclo o una condición
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i); // error
//la variable i definida con let solo exíste dentro del cíclo por lo que el console.log dentro del ciclo
// imprime correctamente el valor de i
// mientras que el console.log fuera del ciclo daría un error porque la variable i no esta definida.


//closure 
//Un closure es una función que es libre de variables, esto quiere decir que las variables de la función padre funcionan,
// pero el closure no tiene variables propias.

function padre() {
    var a = 1;
    function closure() {
      console.log(a);
    }
    closure();
}
padre();

//la función closure es regresada por crearFuncion() sin haberse ejecutado
//Normalmente una variable local solo existe mientras se ejecuta dicha función y luego no es más accesible, 
//pero en este caso eso no se cumple.
function crearFuncion() {
    var a = 1;
    function closure() {
      console.log(a);
    }
    return closure;
}
var miFuncion = crearFuncion();
miFuncion();

// miFuncion() se convirtió en un closure, un objeto que combina una función y el contexto donde fue creada, }
//el contexto consiste en cualquier variable que estaba en su mismo nivel de scope

function changeSize(a) {
    return function() {
        return a 
    }
}
var size12 = changeSize(12);
var size14 = changeSize(14);
var size16 = changeSize(16);
console.log(size12(12));

//Esta tres funciones size12, size14 y size16 permiten cambiar el tamaño de fuente al valor indicado al momento 
//de crear el closure
//Luego podemos asignarlas al evento click de algún link y permitir de esta forma que se cambie facilmente 
//el tamaño de fuente de nuestro sitio.
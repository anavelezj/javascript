//El término asíncrono se refiere a una situación en la que dos o más eventos no ocurren al mismo tiempo. 
//O en términos más sencillos, pueden suceder varias cosas relacionadas sin esperar a que se complete la acción anterior.

//Con la ayuda de funciones asíncronas, el bucle de eventos de JavaScript puede encargarse de otras cosas cuando 
//la función solicita algún otro recurso.

//El objeto Promise en JavaScript representa una operación asíncrona (y su valor resultante) 
//que eventualmente se completará (o fallará).

//Una Promise puede estar en uno de estos estados:

//pending (pendiente): estado inicial, ni cumplida ni rechazada.
//fulfilled (cumplida): significa que la operación se completó con éxito.
//rejected (rechazada): significa que la operación falló.

//La función que se pasa a una nueva promesa se llama ejecutora. 
//Sus argumentos (resolve yreject) se denominan callbacks y los proporciona JavaScript. 

const miPromesa = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

// promesa cumplida
let  promesa = new  Promise(function(resolve, reject) {
  setTimeout(()  => resolve(new Error("Hecho!")), 1000);
 });
 
 // resolve ejecuta la primera funcion en .then
 promesa.then(
   result => alert(result), // Muestra "hecho!" depues de 1 segundo
   error => alert(error) // no se ejecuta
 );


 // promesa rechazada
let promesaRechazada =  new  Promise(function(resolve, reject)  { 
  setTimeout(()  => reject(new Error("Whoops!")), 1000);
 });
 
 // reject ejecuta la segunda funcion en .then
 promesaRechazada.then(
   result => alert(result), // No se ejecuta
   error => alert(error) // Muestra "Error: Whoops!" despues de 1 segundo
 );

 // async , que se pone delante de una declaración de función para convertirla en una función async.
// await dentro de ella para invocar código asíncrono
//La palabra clave async se añade a las funciones para que devuelvan una promesa en lugar de un valor directamente.

const cargarDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(url);
  const datos = await res.json();
  console.log(datos);
};
cargarDatos();

// output en la consola
/*{
  completed: false,
  id: 1,
  title: "delectus aut autem",
  userId: 1
}*/

//usar Async/Await con manejo de errores
//Podemos manejar errores usando un bloque try catch como este:

const cargarDatosTryCatch = async () => {
  try{
	  const url = "https://jsonplaceholder.typicode.com/todos/1";
	  const res = await fetch(url);
	  const datos = await res.json();
	  console.log(datos);
  } catch(err) {
    console.log(err)
  }
};

cargarDatosTryCatch();

//Cuando quieras manejar un mensaje de error del código de respuesta de la API, puedes usar 
//res.ok ( res es la variable en la que se almacena la respuesta). 
//Te dará un Boolean con el valor verdadero si el código de respuesta está entre 200 y 209.

const cargarDatosRes = async () => {
  try{
	  const url = "https://jsonplaceholder.typicode.com/todos/qwe1";
	  const res = await fetch(url);
	  if(res.ok){ 
	    const datos = await res.json();
	    console.log(datos);
	  } else {
	    console.log(res.status); // 404
	  }
  } catch(err) {
    console.log(err)
  }
};

cargarDatosRes();

// OUTPUT
// 404

//Para manejar los datos devueltos por una función async podemos usar una palabra clave then para obtener los datos.

const cargarDatosThen = async () => {
  try{
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    const datos = await res.json();
    return datos
  } catch(err) {
    console.log(err)
  }
};

const datos = cargarDatosThen().then(datos => console.log(datos));

//? PRO TIP :
//Si quieres usar un async-await para manejar los datos devueltos puedes utilizar un IIFE,
// pero solo está disponible en Node 14.8 o superior.

// usa una IIFE asincrona 
(async () => {
  const datos = await cargarDatos();
  console.log(datos);
})();

//Usando Promise.all(), podemos llamar a cada una de estas API en paralelo. 
//Promise.all(), – si una de las solicitudes con await falla, todo el .all() falla.
const cargarDatosAll = async () => {
  try{
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    const resultados = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3)
    ]);
    const promesasDeDatos = await resultados.map(result => result.json());
    const datosFinales = Promise.all(promesasDeDatos);
    return datosFinales
  } catch(err) {
    console.log(err)
  }
};

const datosAll = cargarDatosAll().then(datos => console.log(datos));
///podemos usar async/await con un bloque try catch para manejar tanto los resultados como los errores.
//si estamos fuera de una función asíncrona (async ), no podemos usar  await sintácticamente. 

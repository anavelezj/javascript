//nombre, apellido, edad, sexo, descripcion
var otro;
let otroOtro = 3;
const otraVar =1;

function x (){
    
    let objeto = {
        nombre: "nombre",
        apellido: "apellido",
        edad: 30,
        sexo: "F",
        descripcion: "descr"
    };

    const {sexo, edad} = objeto;
    console.log(sexo, edad);  


}

x();

const variable = function x (){
    
    let objeto = {
        nombre: "nombre",
        apellido: "apellido",
        edad: 30,
        sexo: "F",
        descripcion: "descr"
    };

    const {sexo, edad} = objeto;
    console.log(sexo, edad);  


}

x();

//refinar concepto scope de variables -- arrow functions relacion entre scope y arrow function
//funciones puras

console.log(objeto); //

let array = ['1', '2', '4', 5000];

const {tres} = array[3];

const [,,, ...tercero] = array;


const funcionNueva = function() {
    console.log("algo");
}

const funcionArrow = () => console.log("algo");  // conservan el concepto del scope
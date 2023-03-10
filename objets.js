//A diferencia de las matrices que tienen elementos valorados en índices, los objetos 
//usan un concepto llamado pares de clave:valor. 

/*La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave. 
La sintaxis es "clave: valor". Los objetos pueden contener muchos pares de clave-valor, deben estar 
separados por una coma (importante: sin punto y coma dentro de un objeto).*/ 

/*Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias 
claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de 
dato de Javascript; cadena, número, booleano, matriz, función o incluso otro objeto. */



var deportes = { conBalon: ['Futbol', 'Basket', 'Rugby'], 
sinBalon: ['Boxeo', 'Surf', 'Trekking']
};
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } }; //Objeto dentro de otro objeto.


/*Para acceder a la propiedad de un objeto simplemente tenemos que escribir 
el nombre del objeto seguido de un punto y el nombre de la propiedad.*/
// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);


/*Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.*/
// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);


/*Para crear propiedades dentro de un objeto necesitamos saber el nombre del objeto
y pensar cual va ser en nombre de la propiedad y cual va a ser su valor.
No se pueden crear propiedades sin valor dentro*/
//CREAR
var autos = {}; //Objeto vacio
autos.marcas = ['Ford', 'Audi', 'Ferrari']; //Asiganamos propiedad y su valor
console.log(autos); //Resulta: le asignamos una propiedad con valores al objeto vacio.


/*Para eliminar propiedades utilizaremos una palabra reservada llamada delete. */
//CREAR (Repito el ejercio de arriba para que se entienda como borra la propiedad en el objeto)
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//console.log(autos);
//BORRAR
delete autos.marcas;
console.log(autos);



/*Guardar una funcion dentro de un objeto*/
var misFunciones = {saludar: function() {  //La propiedad "saludar" es igual a un funcion.
    console.log('Hola'); //La funcion de la propiedad es hacer un console.log de la palabra 'Hola'.
}
}

misFunciones.saludar() //Para leerlo accedemos a la propiedad y la ejecutamos.



/*Dot-Notation y Bracket-Notation.*/

/*De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o 
asignar un valor, también podemos usar Bracket-Notation, o notación por corchetes. 
Lo único que cambia es la forma en la que lo escribimos.

Muchas veces nos puede suceder que necesitemos utilizar una variable externa para
guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar 
Bracket-Notation sin comillas para que funcione correctamente.*/

// DOT NOTATION (punto)
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION(corchetes)
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

//Ejemplo del video con la diferencia entre DOT y BRACKET
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {//Varible interna al objeto.
    comidas.propUno = ['Frutas', 'Verduras'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
}
diferenciaDeNotaciones('saludable', 'no saludable');//Variable externa con los nuevos nombres de las propiedades.
console.log(comidas);                               //En uno funciona y en otro no.


//Si se fijan, la primera propiedad sigue llamandose 'propUno'(Dot-Notation), pero la segunda propiedad paso a
// llamarse 'no saludable'(Bracket Notation). Eso es por que agregamos el nombre desde una variable externa.
//Muchas veces nos puede suceder que necesitamos una variable externa para guardarlas como propiedad en un
//objeto, es importante que en esos casos ultilicemos el Bracket Notation sin comillas


/*Objetos Avanzado*/
/*Métodos de objetos*/


/*El método hasOwnProperty() nos permitirá especificar un nombre, y 
verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.*/

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);


/*El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.*/

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);


/*Recorridos en objetos

De la misma manera que podíamos recorrer los elementos de un arreglo, podemos recorrer las propiedades
 de un objeto junto con sus valores.

El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa 
el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. Utilizando 
ambos valores podremos acceder al valor de cada propiedad del objeto.*/

var mundo = {continentes: '7', paises: '195', oceanos: '5'};
for (let prop in mundo) {//let prop es la variable de iteracion. Luego la palabra reservada 'in' seguida del objeto que queremos recorer, en este caso 'mundo'.
    console.log('Esta es la propiedad: ', prop); /*por cada iteracion le decimos al bucle que haga un 
    console log de 'esta es la propiedad' + prop(variable de la propiedad)*/
    console.log('Este es el valor: ', mundo[prop]);/* luego que haga consolo.log de 'Este es el valor' + 
    mundo[prop].(nombre del objeto e ingreso dentro para saber el valor con el 
        bracket notation mundo[prop(variable de la propiedad)])*/
 }

 //Mas detallado el bucle
 // console.log('Esta es la propiedad: ', prop); por cada iteracion aca me devuelve la variable 'prop' 
 //que representa en este caso el nombre de una propiedad.
 
 //console.log('Este es el valor: ', mundo[prop]); y aca ultilizando breakect notation puedo acceder 
 //al valor de la propiedad 'mundo'


 
 /*Contextos en JavaScript

Dentro de este lenguaje de programación existe un objeto global llamado this. Este nos permite
 manipular el contexto en el que las funciones y la información está siendo ejecutada. De esta 
 forma podremos tener un alcance más preciso dentro de nuestro código.*/

 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

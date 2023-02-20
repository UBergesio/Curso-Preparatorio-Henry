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
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Verduras'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
}
diferenciaDeNotaciones('saludable', 'no saludable');
console.log(comidas);
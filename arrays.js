//Es un tipo de dato que existen en javascript como los booleanos, los stings.
//Puntualmente nos permiten guardar y gestionar informacion para almaacenar muchos datos.
//Elemento: son datos  que hayamos guardado.
//Indices: representa la posicion donde se guardo el dato, siempre se cuenta desde 0.
//Entonces, siempre la catidad de elementos sera siempre 1 mayor que la cantidad de indices.
//Para recuperarlo se pone el nombre del arrglo, en este caso listaDeCompras, y el indice que queremos recuperar


var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
//console.log (listaDeCompras);
console.log (listaDeCompras.length);


// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log (elementoDelArray);


//Ver lista de compras
var elementoDelArray = listaDeCompras[3];
console.log (elementoDelArray);

//Una herramienta es el length, nos permite saber cuantos elementos tiene un arreglo (Array)
//Ver ejemplo en el primer ejercicio.

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

//Metodos de insercion.
//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
//El método pop() elimina y devuelve el último elemento de un arreglo.
//El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva 
//longitud del array.
//El método shift() elimina y devuelve el primer elemento de un arreglo.

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);


/*Metodos varios
1. El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true
o false en cada caso.
2. El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
3. El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string,
dependiendo del parámetro divisor que indiquemos.
4. El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.*/

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 5, 6, 8, 9 ];
var cumplenCondicion = numeros.every( ( num ) => { return num > 5 } );

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

//Ejemplo del video donde corrije la ultima letra de 'Henri' usando metodos del arrays
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
var palabraArreglada = palabraSeparada.join('')
console.log(palabraArreglada);



//METODOS DE RECORRIDO
//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento.
// La diferencia es que este método devuelve un nuevo arreglo  los elementos modificados.

//forEach()
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
//NUM ES EL NOMBRE QUE LE DESIGNO MOMENTANEAMENTE AL ELEMENTO (del arrays) QUE ESTA DANDO LA VUELTA.


//map()
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return (num + 1) } );

console.log(masUno);

//Bucle For
//Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas
// por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

//Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//Bucle While

//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera.
// Dicha condición es evaluada antes de ejecutar la sentencia.

//Sintaxis: while (condicion)
  //sentencia

var arr = [];
while (arr.length < 5) {
   arr.push('BOOM');
}
console.log(arr);

//Bucle infinito
//Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos.
//Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina.
//Esto se debe a que nunca se llega a la condición de quiebre.
//Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos.
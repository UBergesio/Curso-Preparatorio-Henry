/*Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript 
pueden extender sus propiedades y métodos.
El proceso en el que los objetos globales de JavaScript le extienden métodos y 
propiedades a cualquier tipo de dato se denomina herencia. 
Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo.
Gracias a estos prototipos podremos acceder al constructor de cualquier objeto para modificarlo.*/

Array.prototype.mayoresQueTres = function () {  //Ingresamos al objeto global 'Array'. Luego 'prototype' 
                                               //indicamos que 
                                              //queremos ingresar al prototipo del objeto global 'Array'. 
                                                //Luego indicamos el nombre que queremos asignarle a este 
                                                // metodo(mayoresQueTres).
                                                //Todo eso sera igual a una 'function'.
                                                //Para poder acceder a los valores que tendra el arreglo que
                                                //ejecute este metodo vamos a utilizar 'This'.
                                                //De esta forma definimos el contexto, por lo que en este caso
                                                // This equivale al arreglo qu ejecuta el metodo mayorQueTres.
                                                //

   var arregloModificado = []
    for (i = 0; i < this.length; i++){
        if(this[i] > 3){                       //Aca this se refiere al arreglo que esta invocando nuestro metodo.
            arregloModificado.push(false)
        } else {arregloModificado.push(this[i])}
    }
    return arregloModificado

}
var arreglo = [1, 2 ,3 ,4 ,5]
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo)




//Otro ejemplo

class Latinoamerica { //Creo una clase.
    constructor (){  //Creo un constructor class
        this.paises = [] //Creo un array vacio dentro de la clase
    }
}

Latinoamerica.prototype.agregarPais = function (pais){ //Creo el prototipo que es una funcion con parametro (pais)
this.paises.push(pais) //indico que voy a pushear en el arreglo paises de la class Latinoamerica los parametros (pais)
}

let continente = new Latinoamerica //Creo una instancia (continente) dentro de la clase Latinoamerica.
continente.agregarPais('Mexico')//Agrego a la instacia (continente) el pais Mexico atravez del metodo guardado como prototipo(pushear).
console.log(continente.paises)
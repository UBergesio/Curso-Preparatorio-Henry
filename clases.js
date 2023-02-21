//SINTAXIS: FUNCION CONSTRUCTORA.

/* Las clases es una plantilla para crear objetos con propiedades iguales, que luego a cada objeto
se le asignara un valor diferente a estas propiedades.
Las clases tienen 2 tipos de datos: Por un lado tienen Propiedades y por otro lado tienen, al igual que
los objetos o arreglos, tienen una serie de metodos.*/

//El nombre de la clase siempre debe empezar con mayuscula.
function Auto (puertas, color, marca, año, ruedas){ 
    //A continuacion declaramos las porpiedades:
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
//Estos datos seran recibidos por parametros, entonces hay que escribirlos en la funcion entre ()

/*COMO AGREGAR METODOS A NUESTRAS CLASES.*/
this.informacion = function (){
    console.log ('Este es un ' + this.marca + ' de color ' + this.color)
}

}

/*Luego de hacer eso, solo queda inicializar nuestra clase Auto, es decir, utilizar esta plantilla:
Declaramos la varible "miPrimerAuto" que sera igual (=) a la plabra reservada "New" que nos permitira crear
una instancia de nuestra clase. Luego escribimos el nombre de nuestra clase y entre () le pasamos los
valores que van a tener nuestra propiedades en esta instancia.*/

var miPrimerAuto = new Auto(2, 'rojo', 'ferrary', 2018, 4)

miPrimerAuto.informacion(); //VEMOS EL CONSOLE.LOG DEL METODO AGREGADO DESDE LA INSTANCIA miPrimerAuto.

console.log (miPrimerAuto) //console.log de la instancia, este nos muestra el nombre de la clase y toda
//infomracion de esta instancia.
console.log (miPrimerAuto.marca)//console.log de la propiedad marca.




/*SINTAXIS: EXPRESION DE CLASE (Nueva manera de sintaxis, es solo mas sensilla al a vista)*/

// EXPRESIÓN DE CLASE
class Auto {  //Palabra reservada "class" y seguida de un nombre, la primera letra siempre en mayuscula.

    constructor(puertas, color, marca, año, ruedas) { /*Para declarar las propiedades debemos usar la palabra
                                             reservada "constructor" seguida de ('parametros') y {}
                                             . Las propiedades las recibiremos por parametros  
                                            y dentro de las {} las declaramos e igualamos a las propiedades
                                            recibidas por parametros.*/
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
    /*COMO AGREGAR METODOS A NUESTRAS CLASES.
    Las agragamos fuera del 'constructor' */
    informacion (){
        console.log ('Este es un ' + this.marca + ' de color ' + this.color)
    }
 }
 
 //Instancia:

 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4); /*entre () son los valores que van a 
                                                             recibir las propiedades*/
miSegundoAuto.informacion(); //Console.log del metodo 'informacion'

 console.log(miSegundoAuto);//nos responde con la instancia que creamos y toda su info.
 console.log(miSegundoAuto.marca);//Nos responde solo con el valor de la propiedad de ciha instancia.



 //This
 //nos permite indicarle al codigo de que contexto debe obtener la informacion

 class Futbool{
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre(){
        console.log (this.jugador)
    }
 }
//Instancia:
 var argentina = new Futbool ('Messi')
 var brasil = new Futbool ('Pele')
 argentina.obtenerNombre();
 brasil.obtenerNombre();
/*Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a 
otras clases. De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias
 características, pero que compartan algunas otras generales.*/


 //Cramos una clase para mostrar despues ver como funcionan las extenciones.

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
 /*let martin = new Persona('Martin', 26);
martin.saludar();*/



 // Ejemplo de Extension.

 class Programador extends Persona { //Con extends hago la extencion de la clase persona en esta clase Programador.
    constructor(nombre, edad, añosDeExperiencia) { //Aca pongo las propiedades. Nombre y edad ya existen en la clase 'Persona'.
       super(nombre, edad);      //Super le indica que a las propiedades 'Nombre, edad'que este sera su nuevo contexto, heredandolo desde la clase 'persona'. Entre () llamamos a las propiedades al constructor. 
       this.añosDeExperiencia = añosDeExperiencia;//Esta propiedad no es heredada.
    }
    codear() { //Metodo que agrego a la clase persona.
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martín', 26); //Creo instancia de persona
 let programador = new Programador('María', 37, 4);//Creo instancia de Programador
 martin.saludar();
 programador.codear();

 //Intentamos ejecutar el metodo 'Saludar' de la clase 'Persona'
  programador.saludar()
  //Esto se debe a que todos los metodos de la clase persona fueron heredados a la clase programador.

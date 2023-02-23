/*Las funciones callback son un tipo de funciones que se pasan por parámetro a otras funciones,
 en esta video clase aprenderemos que son y cómo usarlas a través de algunos ejemplos.*/

 //Creo 2 funciones.
 var devuelvoUsuario = function (){
    return 'Camilo';
 };

 var devuelvoSaludo = function (){
    return 'Hola';
 };

 //Creo una funcion con los callbacks. recibe 2 callbacks por parametro.
 var saludar = function (cb1, cb2){
    return cb1() + ' ' + cb2();
 };
 
 //Creo una variable y la igualo a la ejecucion de la funcion "saludar", pasandole por parametro la definicion de la funcion
 //que creamos anteriormente.
 var resultado = saludar (devuelvoSaludo, devuelvoUsuario);
    console.log(resultado);


    //Otro ejemplo:

    var devuelvoFrase = function (comida){
        return 'Hoy quiero comer: ' + comida;
    };

    var hablar = function (comida, cb){
        return cb(comida);
    };

    var fraseFinal = hablar('Pizza', devuelvoFrase)
    console.log(fraseFinal)


    /*Supongamos que tenemos una función 1 que recibe por parámetro a una función 2.
     Cuando la función 1 ejecuta a la función 2 en su interior, se produce un proceso llamado “callback”. 

    Los callbacks son muy útiles en el mundo de la programación, nos aseguran que una función no se va
     a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la
      tarea se haya completado.*/
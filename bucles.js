//Bucle For: Por un lado, el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima
//exacta de pasos que queremos ejecutar. Esta cantidad máxima de pasos se sitúa como
//segundo parámetro entre los paréntesis.

var suma = 0
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);


 //Bucle while: El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar
 //hasta finalizar la ejecución. Por ejemplo, podríamos pensar en una función que siga agregando
 //+1 hasta llegar a un número determinado. 
var suma= 0
 while(suma < 6) {
    suma = suma + 2;
        console.log(suma);
    };


    //Prueba de blucle for con Slim
    // quiero sumarle 5 veces 2 al numero 10

    function pruebaDeFor (){
        var num = 10;
        for (let i = 0; i < 5; i++)//estas son las veces que va a hacer la operacion, donde let i es el contador e i++ significa que suma de a 1 la vuelta.
        {
            num = num + 2; //esta es la cuenta matematica que va a haccer cada vuelta del i
        }
        console.log(num);
        return (num)
    }
    pruebaDeFor(); //Esto es llamar a la funcion

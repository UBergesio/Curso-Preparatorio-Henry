//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
     return nombre;
}

  // Otra funcion
  function otrafuncion(){
    return (
        "el nombre retornado por la funcion 'cuidadoConElConsoleLog' es :" +
        cuidadoConElConsoleLog ('Ulises')
        );
    }

    // Otra funcion
    function cuidadoConElReturn(nombre){
        return nombre;
        console.log(nombre);
    }


//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c);

function viajar (destino){
    if(destino === 'brasil'){
        console.log('gire a la izquierda')
    } else if(destino === 'argentina'){
        console.log('gire a la derecha')
   } else {console.log('nos perdimos')}
}

viajar ('brasil');
viajar ('prueba');

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
     console.log( false );
  }
  
  puedeManejar(17);
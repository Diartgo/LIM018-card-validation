const validator = { 
  isValid :  function(cardNumber) {
    
    let cardSeparado=cardNumber.split('').reverse();
    //console.log(cardSeparado);

    var numPar = 0;
    let sumaTotalCard=0;

    for (let step = 0; step < cardSeparado.length; step++) {
      let nuevoNumero=0;
      //console.log(step)      
        if (step %2 != 0){
          numPar = cardSeparado[step]*2;
            if (numPar >= 10){
                nuevoNumero= numPar-9; 
            } else { 
              nuevoNumero=numPar*1;
            }
        } else{
          nuevoNumero = cardSeparado[step]*1;
          //console.log(numImparNuevo);
        }
         sumaTotalCard=sumaTotalCard+nuevoNumero;
    }  
      console.log(sumaTotalCard);

      if (sumaTotalCard %10 == 0) {
        console.log('su tarjeta es valida');
      } else{
        console.log('su tarjeta es invalida');
      }
        
    }

         //console.log(cardSeparado[step]);
         // console.log(numPar);
    
  }
        
          
          //console.log(cardPares);
       
                

                              
  
  
  

export default validator;

//cardNumber=prompt("cual es tu numero de tarjeta");

// //Separar el string

//let arrayCardNum=cardSeparado.map(function(cardSeparado){

  //return cardSeparado * 1; //pasamos a Numero

//})

//let cardPares= arrayCard


//function validar() {

//}
  //Funcion para validar


    
 


 
  // ...







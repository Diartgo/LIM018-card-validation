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
        
    },
  
  

  maskify :  function(cardNumber) {
 let numCardMichi;
 let arr2=[];
 let arr= cardNumber.split('');

    console.log(arr);

 arr.forEach((element,index) => {
    if (index < arr.length-4){
      element="#"; 
    }
    arr2.push(element);
   });

   numCardMichi=arr2.join('');
   
   console.log(numCardMichi);
  
   return numCardMichi;
   

  }
  

}    
export default validator;


//function validar() {

//}
  //Funcion para validar


    
 


 
  // ...







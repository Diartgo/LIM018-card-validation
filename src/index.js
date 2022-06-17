import validator from './validator.js';


// const numerocardNumber=document.querySelector("#numeroTarjeta");
let superflixPagina=document.getElementById("superflixpagina");
let datosPagina=document.getElementById("datospagina");



let botonPagar=document.getElementById("botonpagar");
    botonPagar.addEventListener('click', ()=>{
        superflixPagina.style.display = "none";
        datosPagina.style.display = "block";
    })

let botonValidar=document.getElementById("botonValidar");

    botonValidar.addEventListener('click',(e)=>{
        e.preventDefault();
    let cardNumber=document.getElementById("numeroTarjeta").value;

    validator.isValid(cardNumber);

    // console.log(validator.isValid(cardNumber));

    if (validator.isValid(cardNumber)){
        document.getElementById("respuesta").innerHTML="El numero de tarjeta es Valida";
    }
    else {
        document.getElementById("respuesta").innerHTML="El numero de tarjeta no es Valida";
    }

    // validator.maskify(cardNumber);
    let numeroEnmascarado=validator.maskify(cardNumber);
    document.getElementById("numeroTarjeta").value=numeroEnmascarado;

   
    })

 


       
// cardNumber.addEventListener('keyup', (e)=>{
//     let valorCardNumber=e.target.value;
    
// })


// botvalidar.addEventListener("clic",enviardatos);
// console.log(cardNumber)


// const botonValidar=document.querySelector(".button");

// botonValidar.addEventListener("click",(e));





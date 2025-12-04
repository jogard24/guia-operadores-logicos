

// import temperatura from 'temperatura';

// const tempe = temperatura;

const prompt = require("prompt-sync")();

let solicitud = Number(prompt('ingrese los grados del clima: '));

let mensaje  = solicitud >= 30 
    ? "hace calor" : "clima agradable"

console.log(mensaje);


// if(solicitud >= 30){
//     console.log("hace calor");
    
// }else{
//     console.log('clima agradable');
    
// }
    
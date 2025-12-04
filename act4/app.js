

const prompt = require("prompt-sync")();

let solicitud = Number(prompt("ingrese la velocidad del auto : "));

    if(solicitud <= 30){
        console.log("muy lento!");
        
    }else if(solicitud >30 && solicitud < 60){
        console.log("velocidad moderada");
        
    }else if(solicitud >= 61 && solicitud <= 100){
        console.log("Rapido!");
        
    }else if(solicitud >= 100){
        console.log("muy rapido!");
        
    }
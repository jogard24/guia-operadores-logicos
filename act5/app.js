
const prompt = require("prompt-sync")();

let solicitud = Number(prompt(`elije una opcion numerica de acuerdo al mes que deseas
    -- calendario --
    1) enero
    2) febrero
    3) marzo
    4) abril
    5) mayo
    6) junio
    7) julio
    8) agosto
    9) septiembre
    10) octubre
    11) noviembre
    12) diciembre
    `));

switch(solicitud){
    case 1:
        console.log("haz elegido 1) enero");
        break;
    case 2:
        console.log("haz elegido 2) febrero");
        break;
    case 3:
        console.log("haz elegido 3) marzo");
        break;
    case 4:
        console.log("haz elegido 4) abril");
        break;
    case 5:
        console.log("haz elegido 5) mayo");
        break;
    case 6:
        console.log("haz elegido 6) junio");
        break;
    case 7:
        console.log("haz elegido 7) julio");
        break;
    case 8:
        console.log("haz elegido 8) agosto");
        break;
    case 9:
        console.log("haz elegido 9) septiembre");
        break;
    case 10:
        console.log("haz elegido 10) octubre");
        break;
    case 11:
        console.log("haz elegido 11) noviembre");
        break;
    case 12:
        console.log("haz elegido 12) diciembre");
        break;

    default:
        console.log("error se esperaba un dato valido");
        
        
}
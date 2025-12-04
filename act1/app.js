// import notaF from 'notaF';

// const app = notaF();

// const prompt = require("prompt-sync")();

let nota = Number(prompt('ingresar tu nota final: '));

if(nota >= 90){
    console.log("tu nota es excelente");
    
}else if(nota >= 60){
    console.log("estas aprobado");
}else if(nota < 60){
    console.log("tu nota es inferior - Reprobado -");
}

// console.log();

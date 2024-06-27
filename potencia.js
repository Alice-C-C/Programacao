const prompt= require("prompt-sync")({sigint: true});

let base= Number(prompt("Digite uma base: "))
let expoente = Number(prompt('Digite um expoente: '))
let resultado =0

for (let i = 0; i< expoente; i++) {
    resultado += base
   
}
console.log(resultado)
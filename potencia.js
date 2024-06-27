const prompt= require("prompt-sync")({sigint: true});

let base= Number(prompt("Digite uma base: "))
let expoente = Number(prompt('Digite um expoente: '))
let resultado =base
    
    if(expoente ===0){
        console.log("O resultado de todo expoente em zero é 1")
        return
    }

for (let i = 1; i< expoente; i++) {
    let base_aux = resultado
    console .log('base'+base_aux)
    for (let j = 1; j < base; j++) {
       resultado = resultado + base_aux;
       console.log(resultado)
    }
}
console.log(resultado)


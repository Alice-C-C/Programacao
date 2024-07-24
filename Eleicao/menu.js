const prompt= require("prompt-sync")({sigint: true});
let funcoes =require('./funcao.js')

while (true) {
    console.log(`Escolha uma opção a seguir
    1 - Novo voto
    2 - Terminar para a contagem de votos`)
    let escolha =prompt()

    switch (escolha) {
        case '1':
            funcoes.voto()
            
            break;
        case '2':
            let senha =prompt('Digite a senha de acesso: ')
            if (senha =='OlaMundo123') {
                funcoes.resultado()
                
            }else{
                console.log("Acesso negado")
            }
    
        default:
            break;
    }
    
}
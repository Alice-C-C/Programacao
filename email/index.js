const prompt = require("prompt-sync")()
const {
    criar,
    listar,
    atualizar,
    remover,
} = require ('./usuario.js')

while(true){
    console.log(`
        1. Criar usuario
        2. Listar
        3. Atualizar
        4. Remover
        5. Sair
    `)
    const opcao= prompt('EScolha uma opção acima: ')
    switch (opcao) {
        case '1':
            criar()
            break;
        case '2':
            listar()
            break;
        case '3':
            atualizar()
            break;
        case '4':
            remover()
            break;
        case '5':
            process.exit()
            break;
    
        default:
            console.log("Opção inválida")
            break;
    }
}

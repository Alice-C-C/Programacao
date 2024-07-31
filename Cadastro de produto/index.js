const prompt = require("prompt-sync")()

const {
    criar,
    listar,
    atualizar,
    remover

} = require('./produto.js')
while (true) {
    console.log(`
        Menu de Produtos
    1. Adicionar
    2. Listar
    3. Atualizar
    4. REmover
    5. Sair`)

    let opcao = prompt('Escolha uma opção acima: ')
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
            console.log('Opção inválida')
            break;
    }
    
}
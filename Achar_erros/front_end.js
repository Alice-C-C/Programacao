const prompt = require("prompt-sync")();
const {
    criar,
    listar,
    atualizar,
    remover,
    idade,
} = require ('./back_end.js')

while (true) {
    console.log(`
    1. Adicionar aluno
    2. Listar os alunos
    3. Atualizar algum aluno
    4. Remover
    5. Idade alunos
    6. Sair
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
        idade()
        break;
    case '6':
        process.exit()
        break;
        
    default:
        console.log("Opção inválida")
        break;
}
    
}
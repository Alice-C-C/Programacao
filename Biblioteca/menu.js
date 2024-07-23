const prompt= require("prompt-sync")({sigint: true});
let funcoes =require('./funcao.js')


while (true){

    console.log(`
    //              ==MENU==            //
    //    1. Adicionar um novo livro    //
    //    2. Remover um livro           //
    //    3. Listar os livros           //
    //    4. Atualizar um livro         //
    //    0. Sair                       //
      `);

    let opcao = prompt("Escolha uma opção: ");
    switch (opcao) {
        case '1':
            funcoes.adicionar()
            break;
        case '2':
            funcoes.remover()
            break;
        case '3':
            funcoes.listar()
            break;
        case '4':
            funcoes.atualizar()
            break;
        case '0':
            console.log("Até logo!")
            process.exit()
            break;
        default:
            console.log('Opção inválida')
            break;
    }

}
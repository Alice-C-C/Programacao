const prompt= require("prompt-sync")({sigint: true})
let dados =[]

listar =function(){
    if(dados.length === 0){
        console.log('Nenhum livro cadastrado')
        
    }else{
        dados.forEach((dados, index) => {
            console.log(
                `
                ${index+1} . 
                Livro: ${dados.nome}. 
                Autor: ${dados.autor}. 
                ${dados.tamanho} páginas. 
                Genero: ${dados.genero_array}`
            )
        })
    }
}

adicionar =function(){
    let nome = prompt("Nome do livro: ")
    let autor = prompt("Autor: ")
    let tamanho = prompt("Número de páginas: ")
    let genero = prompt("Gênero do livro 1-Romance/ 2-Terror/ 3-Ficção / 4-Aventura/ 5-Outros ")

    let genero_array=['Romance', 'Terror', 'Ficção', 'Aventura', 'Outros'][genero -1]
        if(genero_array){
            dados.push ({nome, autor, tamanho, genero_array})
            console.log("Livro adicionado: ", dados)

        }else{
            console.log('Genero inexistente ')
        }
            
    }

remover = function(){
    if(dados == ''){
     console.log('Nenhum livro cadastrado');
    }else{
    listar()
    let delet = prompt("Qual posição do livro quer remover? ")
    if(delet > dados.length){
        console.log('Não existe livro cadastrado');
    } else if(delet =='0'){
        console.log("Não existe livro 0")
    }else{
        i = delet -1
        dados.splice(i,1)
        console.log('Removido com sucesso')
    }

}
}

atualizar =function(){
    if(dados == ''){
        console.log('Nenhum livro cadastrado');
       }else{
    listar()
    i = prompt("Digite a posição do livro para editar: ")
    if(i > dados.length){
        console.log('Não existe livro cadastrado');
    }else{
    i--

    edit = prompt('Qual dado vc quer editar: (1. Nome/ 2 .Autor/ 3. Tamanho/ 4. Genero:  ')
    if(edit =='1'|| edit =='Nome'){
        novo_nome = prompt("Qual é o novo nome? ")
        dados[i].nome = novo_nome
    }else if(edit =='2'|| edit =='Autor'){
        novo_autor = prompt("Qual é o novo autor? ")
        dados[i].autor = novo_autor
    }else if(edit =='3'|| edit =='Tamanho'){
        novo_tamanho = prompt("Qual é o novo  tamanho? ")
        dados[i].tamanho = novo_tamanho
    }else if(edit =='4'|| edit =='Genero'){
        novo_genero = prompt("Qual é o novo genero 1-Romance/ 2-Terror/ 3-Ficção / 4-Aventura/ 5-Outros ? ")
        dados[i].genero_array = ['Romance', 'Terror', 'Ficção', 'Aventura', 'Outros'][novo_genero-1]
    }else{
        console.log("Opção invalida")
        return atualizar()
    }
    
}
}
console.log("Livro atualizado")

}

module.exports.adicionar =adicionar
module.exports.listar =listar
module.exports.remover = remover
module.exports.atualizar =atualizar

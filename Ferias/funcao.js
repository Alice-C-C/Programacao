const prompt= require("prompt-sync")({sigint: true})
let dados =[]

listar =function(){
    if(dados.length === 0){
        console.log('Nenhuma atividade encontrada')

    }else{
        dados.forEach((dados, index) => {
            console.log(
                `
            Data: ${dados.data}. 
            Atividade(s): ${dados.atividade}. `
            )
        })
    }
}

adicionar =function(){
let data = prompt("Data da atividade (**/**): ")
    let atividade = prompt("Atividade realizada: ")
    
    dados.push ({data,atividade})
    console.log("Atividade adicionada: ", dados)
}

remover = function(){
    if(dados == ''){
     console.log('Nenhuma atividade encontrada');
    }else{
    listar()
    let delet = prompt("Qual posição da atividade quer remover? ")
    if(delet > dados.length){
        console.log('Posição muito alta');
    } else if(delet =='0'){
        console.log("Não existe atividade 0")
    }else{
        i = delet -1
        dados.splice(i,1)
        console.log('Removido com sucesso')
    }

}
}

atualizar =function(){
    if(dados == ''){
        console.log('Nenhuma atividade encontrada.');
       }else{
    listar()
    i = prompt("Digite a posição da atividade para editar: ")
    if(i > dados.length){
        console.log('Não existe essa posição');
    }else{
    i--

    edit = prompt('Qual dado vc quer editar: (1. Data/ 2 .Atividade) ')
    if(edit =='1'|| edit =='Data'){
        nova_data = prompt("Qual é a nova data? ")
        dados[i].data = nova_data
    }else if(edit =='2'|| edit =='Atividade'){
        nova_atividade = prompt("Qual é a nova atividade? ")
        dados[i].atividade = nova_atividade
    }else{
        console.log("Opção invalida")
        return atualizar()
    }
    
    }
    }

}

module.exports.adicionar =adicionar
module.exports.listar =listar
module.exports.remover = remover
module.exports.atualizar =atualizar

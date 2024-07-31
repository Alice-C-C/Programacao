const prompt = require("prompt-sync")()

let ultimoid = 0
let produtos =[]
criar = () => {
    let nome  = prompt('Digite o nome do produto ')
    let valor = +prompt('Digite o valor do produto: ').replace(',','.')

    if(nome != '' && !isNaN(valor) && valor !=''){
        ultimoid ++
        produtos.push({nome,valor,id: ultimoid})
        console.log('Produto cadastrado', produtos)

    }else{
        console.log('ERRO no cadastro, informações incorretas')
    }
}

listar = ()=>{
    if(produtos.length == 0){
        console.log('Não existe produto')
    }else {
        produtos.forEach(element => {
            console.log(`
            ${element.id}. 
            Produto: ${element.nome}
            Valor: ${element.valor}`)
            
        });
    }
}

atualizar =()=>{
    listar()
    if(produtos.length == 0){
        console.log('Não existe produto')
    }else{
        let id = +prompt('Digite o id que quer atualizar ')

        if(id== 0 && id> produtos.length){
        console.log('Id inexistente')
        }else{
        produtos.forEach((element, i) => {
            if(element.id == id){
                let edit = +prompt('O quer deseja editar? (1.Produto, 2.Valor): ')
                if (edit ==1) {
                    let new_nome = prompt('Digite o novo nome do produto ')
                    produtos[i].nome = new_nome
                    console.log('Produto atualizado')
                } else if(edit==2){
                    let new_valor = +prompt('Digite o novo valor do produto ').replace(',','.')

                    if(!isNaN(new_valor)){
                    produtos[i].valor = new_valor
                    console.log('Produto atualizado')
                    }else{
                        console.log('Digite um valor válido')
                        return(atualizar())
                    }
                }else{
                    console.log('Inválido')
                }
            }
        });
    }
    }
}

remover = ()=>{
    listar()
    if(produtos.length == 0){
        console.log('Não existe produto')

    }else{
    let id = +prompt('Digite o id que quer remover ')

        if(id== 0 && id> produtos.length){
        console.log('Id inexistente')
        }else{
        produtos.forEach((element, i) => {
            console.log(i);
            if(element.id == id){
                produtos.splice(i,1)
            }else{
                console.log('Inválido')
            }            
        });
        }
    }
}

module.exports ={
    criar,
    listar,
    remover,
    atualizar
}
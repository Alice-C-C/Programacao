const prompt = require("prompt-sync")()
let ultimoid = 1
let telefones=[]

let usuario=[{
    id: 1,
    email: 'ali@',
    nome: 'aaa',
    telefones: [45545,45]
},{
    id: 2,
    email: 'aaaa',
    nome: 'aaa',
    telefones: [45545,45]
}, {
    id: 3,
    email: 'bbb',
    nome: 'aaa',
    telefones: [45545,45]
}]
let criar =() =>{
    let email = prompt("Qual é o email ?")
    conferiremail(email)
    let nome = prompt('Digite o nome de usuario: ')
    addtele()
    ultimoid++
    usuario.push({email, nome, telefones, id: ultimoid})
    console.log('Cadastro realizado', usuario)
}

let conferiremail =(conf) =>{
    usuario.forEach(element => {
        if(element.email == conf){
            console.log("Email já cadastrado")
            return criar()
        }
            });
}

let addtele = ()=>{
    while(true){
        let telefone = +prompt('Digite um número de telefone ou 0 para sair ')
        telefones.push(telefone)
        if(telefone == 0){
            telefones.pop()
            break
        }
    }
}

let listar =() => {
    if(usuario.length  == ''){
        console.log('Nenhum usuário cadastrado')
    }else{
        usuario.forEach(element => {
            console.log(`
            ${element.id} .
            email: ${element.email}
            Usuario: ${element.nome}
            Telefones: ${element.telefones}
            `)
        });
    }
}

let remover = () =>{
    listar()

     let id = +prompt('Qual id quer remover? ')
     if(id > usuario.length){
        console.log('Não existe')
     }else if (id == 0){
        console.log('Sem id 0')
     }else{
        usuario.forEach((element,i) => {
            if(element.id == id ){
                usuario.splice(i, 1)
                console.log('Removido com sucesso')
            }
        });
     }
}

let atualizar = () =>{
    listar()
    let id = +prompt('Qual id quer atualizar? ')
     if(id > usuario.length){
        console.log('Não existe')
     }else if (id == 0){
        console.log('Sem id 0')
     }else{
        usuario.forEach((element,i) => {
            if(element.id == id ){
                let edit = prompt('O que deseja alterar? (1.email, 2.nome, 3. Telefone): ')
                if(edit =='1'){
                 let new_email = prompt('Qual o novo email?')
                 usuario[i].email = new_email
                }else if (edit =='2'){
                    let new_nome = prompt('Qual o novo nome? ')
                    usuario[i].nome = new_nome
                }else if(edit =='3'){
                
                }else{
                    console.log('Dados inválido')
                }
                console.log('Dados atualizados')
            }
            
        });
     }


}
module.exports= {criar, listar, remover, atualizar}
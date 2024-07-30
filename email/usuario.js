let usuario=[]
let telefones=[]
let ultimoid = 0
let criar =() =>{
    let email = prompt("Qual é o email ?")
    conferiremail()
    let nome = prompt('Digite o nome de usuario: ')
    addtele()
    ultimoid++
    usuario.push({email, nome, telefones, id: ultimoid})
}

let conferiremail =() =>{
    if(usuario.email == email){
        console.log("Email já cadastrado")
        return criar()
    }
}

let addtele = ()=>{
    let telefone = +prompt('Digite um número de telefone ou 0 para sair ')
    if(telefone != 0 ){
        for (let i = 0; i < array.length; i++) {
            
        }

    }else{
        telefones.push(telefone)
    }
}

let listar =() => {
    if(usuario.length  == ''){
        console.log('Nenhum usuário cadastrado')
    }else{
        usuario.forEach(element => {
            console.log(`
            ${usuario.id},
            ${usuario.email},
            ${usuario.nome},
            ${usuario.telefones}
            `)
        });
    }
}

let remover = () =>{
    listar()

     let id = +prompt('Qual id quer remover? ')
     if(id > dados.length){
        console.log('Não existe')
     }else if (id == 0){
        console.log('Sem id 0')
     }else{
        usuario.forEach((element,i) => {
            if(element.id ==id ){
                usuario.splice(i, 1)
            }
        });
     }
}

let atualizar = () =>{
    listar()
    let id = +prompt('Qual id quer atualizar? ')
     if(id > dados.length){
        console.log('Não existe')
     }else if (id == 0){
        console.log('Sem id 0')
     }else{
        dados.forEach((element,i) => {
            if(element.id == id ){
                let edit = prompt('O que deseja alterar? (1.email, 2.nome, 3. Telefone): ')
                if(edit =='1'){
                 let new_email = prompt('Qual o novo email?')
                 dados[i].email = new_email
                }else if (edit =='2'){
                    let new_nome = prompt('Qual o novo nome? ')
                    dados[i].nome = new_nome
                }else if(edit =='3'){

                }else{
                    console.log('Dados inválido')
                }
            }
            
        });
     }


}
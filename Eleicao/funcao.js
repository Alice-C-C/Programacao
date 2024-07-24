const prompt= require("prompt-sync")({sigint: true});
let cont1=0, cont2=0, cont3=0, cont4=0, cont5 = 0

let voto =function(){
    console.log(`
    Escolha um candidato a seguir: 
    1- Alice
    2- Ibra
    3- Lorieny 
    4- Jason 
    5- Nulo/Branco 
    `)
    let voto1 = +prompt()

    candidatos =['Alice', 'Ibra', 'Lorieny', 'Jason', 'Nulo/branco'][voto1-1]
        if(voto1 <= candidatos.length){
        conf = prompt(`Confirma o voto no candidato ${candidatos}? `).toLowerCase( ) 

            if(conf == "sim"){
            contar(voto1)
            console.log("Voto computado")
            }else if(conf =='não'|| conf =='nao'){
                return voto()
            }else{
                console.log('Confirme com sim ou não')
                return voto()
            }
        }else{
            console.log("Candidato inválido")
            return(voto)
        }
}
let contar =function(voto1)
{
    if(voto1 ==1) {
        cont1++
    }else if(voto1==2){
        cont2++
    }else if(voto1==3){
        cont3++
    }else if(voto1==4){
        cont4++
    }else if(voto1==5){
        cont5++
    }
}
let resultado =function(){
    result =Math.max(cont1,cont2,cont3,cont4)
    candidatos =['Alice', 'Ibra', 'Lorieny', 'Jason', 'Nulo/branco'][result-1]
    if(cont5<result){
    console.log(`
        Resultado da eleição: Ganhador da eleição ${candidatos}
     Alice: ${cont1}
     Ibra: ${cont2}
     Lorieny: ${cont3}
     Jason: ${cont4}
     Nulo/Branco: ${cont5}
    `)
    process.exit()
    }else{
        console.log("Nenhum candidato foi eleito, favor fazer outra eleição")
        process.exit()
    }

}
module.exports.voto =voto
module.exports.contar =contar
module.exports.resultado =resultado
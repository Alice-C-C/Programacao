const prompt = require("prompt-sync")();
let menor =0, maior=0
const alunos = [
{
'nomeAluno': "Edson",
dataNascimento: 1988,
'curso': "dev",
'periodo': "noite",
},
{
'nomeAluno': "Aluno 1",
dataNascimento: 2010,
'curso': "dev",
'periodo': "noite",
},
];
const modelo = () => {
const nomeAluno = prompt("Nome do aluno: ");
const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
const curso = prompt("Descrição do curso: ");
const periodo = prompt("Qual o período: ");

// Diferença é !=, não !==
    if (nomeAluno != "" && curso != "" && periodo != "" && !isNaN(dataNascimento)) {
return {
nomeAluno,
dataNascimento,
curso,
periodo,
};
} else {
console.log("Dados inválidos");
return undefined;
}
};

const criar = () => {
    const aluno = modelo();
    if (aluno != undefined) {
// alunos.push(aluno) para adicionar no array e não alunos = (aluno) e a diferença
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso");
    console.log(alunos);
    }
    };

const listar = () => {
    if (alunos.length === 0) {
    console.log("Nenhum aluno encontrado ");
    return false;
    } else {
// é alunos e no aluno
        alunos.forEach((alunos, indice) => {
// para fazer um console num objeto dentro da array deve colocar alunos.nomeAluno e não aluno[nomeAluno]
        console.log(`
        ${indice + 1}.
        Nome do Aluno: ${alunos.nomeAluno}
        Ano de Nascimento: ${alunos.dataNascimento}
        Curso: ${alunos.curso}
        Período: ${alunos.periodo}
        ` );
        });
        return true;
        }
        };
const atualizar = () => {
    listar()
    const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;

    if(indice < alunos.length ){
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento =parseInt(prompt("Ano de nascimento(AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");


    const aluno = {
        nomeAluno,
        dataNascimento,
        curso,
        periodo,
        };
    
        if (aluno != undefined) {
// para atualizar é alunos[indice] = aluno e não alunos[indice].push(aluno)
        alunos[indice] = aluno
        console.log("Aluno atualizado com sucesso");
        console.log(alunos);
        } else {
        console.log("Falha na atualização");
        }
}else{
    console.log("Não existe tal aluno")

}
}
const remover = () => {
    listar()

    const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
// fazer validação
    if(indice < alunos.length ){
    alunos.splice(indice,1);
    console.log("Aluno removido com sucesso");
    console.log(alunos);
    }else{
        console.log("Não existe tal aluno")
    }
    };
const idade =() =>{
    alunos.forEach((alunos) => {
        let idades = 2024 - alunos.dataNascimento
        if(idades>=18){
            maior++
        }else{
            menor++
        }
        
    });
    console.log(`Há ${maior} aluno(s) maior de idade e ${menor} aluno(s) menores de idade`)
}
module.exports ={criar, listar, atualizar,remover, idade}
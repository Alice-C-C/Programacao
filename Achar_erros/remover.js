const prompt = require("prompt-sync")();

const alunos = [
    {
    nomeAluno : "Edson",
    dataNascimento : 1988,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 1",
    dataNascimento : 2010,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 2",
    dataNascimento : 1999,
    curso: "dev",
    periodo : "tarde",
    },
    ];
    const remover = () => {

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
    remover()
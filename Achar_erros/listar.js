const alunos = [
    {
    'nomeAluno': "Edson",
    dataNascimento: 1988,
    'curso': "dev",
    'periodo': "noite",
    },
    {
    'nomeAluno': "Aluno 1",
    dataNascimento : 2010,
    'curso': "dev",
    'periodo': "noite",
    },
    {
    'nomeAluno': "Aluno 2",
    dataNascimento: 1999,
    'curso': "dev",
    'periodo': "tarde",
    },
    ];
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
    listar()
const alunosTurmaA = [
    {
        name: 'Diego',
        note: 9.8
    },
    {
        name: 'Mayk',
        note: 10.0
    },
    {
        name:'Samara',
        note: 3.0
    },
    {
        name: 'Tairone',
        note: 10.0
    }
]


const alunosTurmaB = [
    {
        name: 'Kaio',
        note: 9.8
    },
    {
        name: 'Jaime',
        note: 10.0
    },
    {
        name:'Yasmim',
        note: 2.0
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) { 
        soma = soma + alunos[i].note
    }
    
    const media = soma / alunos.length
    
    return media
}


const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)


function sendMessage(media, turma) {
    if (media > 5) {
        console.log (`Parabéns, a média da turma ${turma} foi de ${media}`) 
    }  else {
    console.log(`A média da turma ${turma} é menor que 5`)
    }
}

sendMessage(media1,'alunosTurmaA')
sendMessage(media2,'alunosTurmaB' )

function reproved(aluno) {
    aluno.reprovado = false
    if (aluno.note < 5) {
        aluno.reprovado = true
    }
}


function message(aluno) {
    if (aluno.reprovado) {
        console.log(`o aluno ${aluno.name} está reprovado`)
    }
}

function alunoReprovado (alunos) {
    for (let aluno of alunos) {
        reproved(aluno);
        message(aluno)
    }
}

alunoReprovado(alunosTurmaA)
alunoReprovado(alunosTurmaB)
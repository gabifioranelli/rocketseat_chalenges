// programa que calcula a média
// das notas dos estudante e envia
// mensagem do cálculo da média

const studentsClassA = [
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
        note: 2.0
    },
    {
        bane: 'Tairone',
        note: 10.0
    }
]


const studentsClassB = [
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

function calAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.lenght; i++) {
        sum = sum + students[i].note
    }

const average = sum / students.lenght
return average

const average1 = calAverage(studentsClassA)
const average2 = calAverage(studentsClassB)


function sendMessage(average) {
    if (average > 5) {
        console.log (`Parabéns, a média da turma ${class} foi de ${average}`)
} else {
    console.log(`A média da turma ${class} é menor que 5`)
}
}

sendMessage(average1,'studentsClassA')
sendMessage(average2,'studentsClassB')
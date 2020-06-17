// programa que calcula a média
// das notas dos estudante e envia
// mensagem do cálculo da média

const students = [
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
    }
]

const average = (students[0].note + students[1].note + students[2].note) / 3

if (average > 5) {
    console.log (`Parabéns, a média foi ${average}`)
}
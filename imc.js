const person = {
    name: 'Carlos',
    weight: 84,
    heigh: 1.88
}

const imc = person.weight / (person.heigh * person.heigh)

if (imc >= 30) {
    console.log(`Carlos you are overweight, ${imc}`)
} else {
    console.log(`Carlos, you're great! IMC = ${imc}`)
}
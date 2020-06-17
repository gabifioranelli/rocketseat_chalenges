// age + contribution = 95+ > HOMEM
// age + contribution = 85+ > MULHER
const people = [
    {
        name: 'Silvana',
        sex: 'F',
        age: 48,
        contribution: 23
    },
    {
        name: 'Jorge',
        sex: 'M',
        age: 64,
        contribution: 40
    }

]

const retirementF = (people[0].age + people[0].contribution)
const retirementM = (people[1].age + people[1].contribution)

if ((retirementF >= 85) || (retirementM >= 95)) {
    console.log("Congrats, you have work hard enough ")
} else {
    console.log("Work hard!")
}
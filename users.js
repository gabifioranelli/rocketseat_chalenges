const users = [
    { name: "Carlos", skills: ['HTML', 'CSS']},
    { name: 'Jasmine', skills: ['JavaScript', 'CSS']},
    { name: 'Tuane', skills: ['HTML', 'Node.js']}
]


    for (let i = 0; i < users.length; i++) {
        console.log(`${users[i].name} trabalha com ${users[i].skills.join(', ')}`)
    }

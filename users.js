const users = [
    { name: "Carlos", skills: ['HTML', 'CSS']},
    { name: 'Jasmine', skills: ['JavaScript', 'CSS']},
    { name: 'Tuane', skills: ['HTML', 'Node.js']}
]


    // for (let i = 0; i < users.length; i++) {
    //     console.log(`${users[i].name} trabalha com ${users[i].skills.join(', ')}`)
    // }

// for (user of users) {
//     console.log(`${user.name} trabalha com ${user.skills.join(', ')}`)
// }

function checkCSS(user) {
    for (let skill of user.skills)
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    if (skill == 'CSS') {
        return true
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const usersWorkCSS = checkCSS(users[i]);
  
    if (usersWorkCSS) {
      console.log(`O usuário ${users[i].name} trabalha com CSS`);
    }
  }

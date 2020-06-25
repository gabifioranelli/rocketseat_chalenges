// realizar operações bancárias na conta de um usuário

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

// Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário,
// essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato
// {
//   type: 'credit',
//   value: 50.5
// }
// Quando uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.

// Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.

// getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo

// getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo
// getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado a seguir:
// getTransactionsCount(); // { credit: 5, debit: 3 }




// DADO UMA transação
// SE transação é do tipo CREDITO ENTÃO
//    soma no balanço
// SENÃO 
// subtrai no balanço (DEBITO)
// Adiciona no extrato do usuario

const envelope0 = {
    type: 'credit',
    value: 20
  }

const envelope1 = {
  type: 'debit',
  value: 10
}

const envelope2 = {
  type: 'credit',
  value: -10
}


// function createTransaction (transaction) {
//   if (transaction.type === 'credit') {
//     user.balance = user.balance + transaction.value
//   } else {
//     user.balance = user.balance - transaction.value
//   }
//   user.transactions.push(transaction)
  
//   console.log(user)
// }


// function createTransaction (transaction) {
//   if (transaction.type === 'credit') {
//     let credit = user.balance + transaction.value
//     user.balance = credit
//   } else {
//    let debit = user.balance - transaction.value
//    user.balance = debit
//   }
//   user.transactions.push(transaction)
  
//   console.log(user)
// }


function createTransaction (transaction) {
  if (transaction.type === 'credit') {
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }
  user.transactions.push(transaction)
}


createTransaction(envelope0)
createTransaction(envelope1)
// createTransaction(envelope2)


















// function getHigherTransactionByType (credit, debit) {
  

// }

// function getAverageTransactionValue ()

// function getTransactionsCount ()









// conta de um usuario, nessa conta se faz transações - credito ou debito
// se eu faço um transação de credito = somo no balanço do fera
// se eu faço uma transação de debito = subtraio no balanço
// adicionar no extrato do fera



// DADO UMA transação
// SE transação é do tipo CREDITO ENTÃO
//    soma no balanço
// SENÃO 
// subtrai no balanço (DEBITO)
// Adiciona no extrato do usuario 

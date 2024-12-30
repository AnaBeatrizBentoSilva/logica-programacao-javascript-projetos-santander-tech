//Entrada de dados no Node

const prompt = require("readline-sync")

const idade = prompt.question("Qual é a sua idade? ")

const idadeNumber = Number(idade)

console.log(idadeNumber, typeof idadeNumber)

//Coerção Explícita (Conversão Manual)
console.log(Number("x")) //NaN: Not a Number

console.log(String(10), typeof String(10))

console.log(Boolean(2))
console.log(Boolean(0))
console.log(Boolean(-1))

//Coerção Implícita (Conversão Automatica)

console.log(1 + "1")
console.log("10" + 5)
console.log(10 - "5")
console.log(10 * "5")
console.log(10 / "5")

let n = 1 + "1" //11 (string)
n = n - 1 // 11 - 1 = 10 (number)
console.log(n)

console.log(2 + 3 + 4 + "5") //95 (string)
console.log("5" + 2 + 3 + 4) //5234 (string)
console.log("10" - "4" - "3" - 2 + "5") //15 (string)

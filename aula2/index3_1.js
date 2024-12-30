const prompt = require("readline-sync")

const idade = Number(prompt.question("Qual é a sua idade? "))

const maiorDeIdade = idade >= 18;

//Estrutura condicionar: if/else

if(maiorDeIdade){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade.")
}


if(idade >= 18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade.")
}

const mediaDoAluno = 6.9999;

if(mediaDoAluno >= 7){
    console.log("Aprovado")
    console.log("Parabéns!!! 👏👏👏")
}else{
    console.log("Reprovado")
}

//Média >= 7 -> Aprovado
//Média < 7 e Média >= 5 -> Prova final
//Média < 5 -> Reprovado
if(mediaDoAluno >= 7){
    console.log("Aprovado!")
}else if(mediaDoAluno >= 5){
    console.log("Prova final")
}else{
    console.log("Reprovado")
}

const idadeDaPessoa = 18
const temCNH = false

if(idadeDaPessoa >= 18 && temCNH){
    console.log("Você pode dirigir!")
}else{
    console.log("Você NÃO pode ditigir!")
}
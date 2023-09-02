nome = prompt("Digite seu nome:")
//parseint
let  idade = parseInt(prompt("Digite a sua idade:"))
let altura = parseInt(prompt("Digite sua altura em cm:"))
let peso = parseInt(prompt("Digite seu peso:"))
let anoNascimento = 2023 - idade

let IMC = 0
IMC = peso / (altura * altura) 

console.log("Ola", nome, "voce tem ", idade, "anos, nasceu em", anoNascimento, ", tem", altura, "cm de altura, pesa", peso, "kg seu IMC é", IMC , "Kg/m2")

//variáveis
let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite a sua idade: "))
let altura = parseInt(prompt("Digite sua altura em cm: "))
let peso = parseInt(prompt("Digite seu peso: "))

// Ano de Nascimento e IMC 
let AnoNascimento = 0
AnoNascimento = 2023 - idade

let IMC = 0 
IMC = (peso / (altura**2))*10000
let imc = IMC.toFixed(2)




console.log("Olá", nome, "voce tem ", idade, "anos, nasceu em", AnoNascimento, ", tem", altura, "cm de altura, pesa", peso, "kg e seu IMC é", imc , "Kg/m2")

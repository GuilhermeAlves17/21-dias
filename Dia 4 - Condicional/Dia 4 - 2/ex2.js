// variáveis
let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let cnh = prompt ("Você possuí CNH? (s/n)")
let car = prompt ("Você possuí carro? (s/n)")

//if e else 
 if (idade<18 || cnh == "n"){
    console.log(nome,", você não pode dirigir.")
 }else if (idade>=18 && cnh == "s" && car == "n"){
    console.log(nome,", você pode dirigir mas não tem um carro.")
 }else if(idade>=18 && cnh == "s" && car == "s"){
    console.log(nome,", você será o motorista!")
 }else{
    console.log("Comando inválido, por favor reinicie a página.")
 }
// variáveis
let nome 
let idade 
let cnh = false
let car = false

//Pedindo informações
nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let temCNH = prompt("Você tem carteira de motorista? (s/n)")
if (temCNH == "s"){
    cnh = true
}
let temCar = prompt("Você tem carro? (s/n)")
if (temCar == "s"){
    car = true
}



//if e else 
 if (idade < 18 || !cnh) {
    console.log(nome,", você não pode dirigir.")
 }else if (idade>=18 && cnh && !car){
    console.log(nome,", você pode dirigir mas não tem um carro.")
 }else if(idade>=18 && cnh && car){
    console.log(nome,", você será o motorista!")
 }else{
    console.log("Comando inválido, por favor reinicie a página.")
 }
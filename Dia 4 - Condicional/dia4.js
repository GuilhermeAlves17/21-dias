
// == igual | != diferente | < menor que | > maior que | <= >= maior e menor ou igual //
// === é igual o valor e o tipo | !== é diferente o valor e o tipo //

// variávies
let  fome = prompt("Você está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let rest = prompt("O restaurante está aberto?")


//if e else
if (fome == "não" || dinheiro == "não"){
    console.log("Hoje a janta será em casa")  
} else if (fome == "sim" && dinheiro == "sim" && rest == "não"){
   console.log("Peça um delivery!")
}else if (fome == "sim" && dinheiro == "sim" && rest == "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido")
}else{
    console.log("Comando errado, responda com sim ou não")
}

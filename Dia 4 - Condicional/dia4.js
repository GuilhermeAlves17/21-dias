
// == igual | != diferente | < menor que | > maior que | <= >= maior e menor ou igual //
// === é igual o valor e o tipo | !== é diferente o valor e o tipo //

// variávies
let  fome = prompt("Você está com fome? (s/n)")
let dinheiro = prompt("Você tem dinheiro? (s/n)")
let rest = prompt("O restaurante está aberto? (s/n) ")


//if e else
if (fome == "n" || dinheiro == "n"){
    console.log("Hoje a janta será em casa")  
} else if (fome == "s" && dinheiro == "s" && rest == "n"){
   console.log("Peça um delivery!")
}else if (fome == "s" && dinheiro == "s" && rest == "s"){
    console.log("Hoje o jantar será no seu restaurante preferido")
}else{
    console.log("Comando errado, responda com s ou n")
}

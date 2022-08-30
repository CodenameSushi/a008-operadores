num1 = prompt("Escreva um numero")
num2 = prompt("Escreve outro numero")

console.log(`

O primeiro numero e maior que o segundo? ${num1 > num2}
O primeiro numero e igual ao segundo? ${num1 === num2}
O primeiro numero e divisivel pelo segundo? ${(num1 % num2) === 0}
O segundo numero e divisivel pelo primeiro? ${(num2 % num1) === 0}

`)
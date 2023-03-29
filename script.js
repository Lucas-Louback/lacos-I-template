// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.

// Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0
// O resultado deve ser: 70


// let numero = Number(prompt("Digite um numero"))
// let resposta = 0

// while (numero !== 0) {
//     resposta = resposta + numero
//     console.log("numero: ", numero)
//     numero = Number(prompt("digite um numero"))
// }
// console.log(resposta)


// let numeroUser = Number(prompt("digite um número"))

// // for (let i = 0; i <= numeroUser; i++) {
// //     console.log(i)
// // }
// let i = 0
// while (i <= numeroUser) {
//     console.log(i)
//     i++
// }
const numeros = [2, 5, 6, 8, 2, 6, 9]
// for (let i = 0; i <= numeros.length - 1; i++) {
//     console.log(`indice: ${i}\nnumero:${numeros[i]}`)
// }
let i = 0
while (i <= numeros.length - 1) { 
    console.log(`indice: ${i}\nnumero:${numeros[i]}`)
    i++
}
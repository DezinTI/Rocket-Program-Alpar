//Calculadora de Bhaskara

console.log("Calculadora de Bhaskara, digite os valores de a, b e c para calcular as raízes da equação do segundo grau.");

let a = 5;
let b = -12;
let c = -40;

if (a === 0) {
    console.log("O valor de a deve ser diferente de zero.");
} else {
let delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        console.log("A equação não possui raízes reais.");
    } else if (delta === 0) {
        let raiz = (-b) / (2 * a);
        console.log("A equação possui uma única raiz real: " + raiz);
    } else {
        let resultado1 = (-b + Math.sqrt(delta)) / (2 * a);
        let resultado2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("A primeira raiz é: " + resultado1);
        console.log("A segunda raiz é: " + resultado2);
    }
}
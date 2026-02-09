//Calculadora de Bhaskara

console.log("Calculadora de Bhaskara, digite os valores de a, b e c para calcular as raízes da equação do segundo grau.");

let a = 4;
let b = -4;
let c = -15;

let delta = b**2 - 4*a*c;

if (delta < 0) {
    console.log("A equação não possui raízes reais.");
} else {
    
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log("A primeira raiz é: " + x1);
    console.log("A segunda raiz é: " + x2);

 }

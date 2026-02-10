// Desafio 3: Adivinhe o Número - funciona apenas no console do navegador

console.log("Adivinhe o número entre 1 e 100");

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
    let palpite = parseInt(prompt("Digite seu palpite: "));
    tentativas++;

    if (palpite === numeroSecreto) {
        acertou = true;
        console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
    } 
    else if (palpite < numeroSecreto) {
        console.log("Tente um número MAIOR.");
    } 
    else {
        console.log("Tente um número MENOR.");
    }
}

let predio = [];

predio[0] = "Pedro";
predio[1] = "Maria";
predio[2] = "Fernando";

console.log(predio[0]); //mostra o parametro 0 do array "o numero 1"

console.log(predio[2]); //mostra o parametro 2 do array "o numero 3"

console.log(predio[3]); //mostra o parametro 3 do array "o numero 4" (undefined, pois não existe)

console.log(predio.length); //mostra o tamanho do array (3, pois tem 3 parametros)


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros); //mostra todos os elementos do array

console.log(numeros[0]); //mostra o primeiro elemento do array (1)
console.log(numeros[9]); //mostra o último elemento do array (10)
console.log(numeros[10]); //mostra um elemento que não existe (undefined)
console.log(numeros.length); //mostra o tamanho do array (10)

let teste = [];

for (let i = 0; i < 10; i++) {
    teste[i] = i + 1; //adiciona os números de 1 a 10 no array teste
}

console.log(teste); //mostra todos os elementos do array teste


//Desafio 4 Lista de compras

const prompt = require("prompt-sync")();

let nome = prompt("Digite o seu nome:");

console.log(`Olá, ${nome}! Bem-vindo à sua lista de compras!`);


let listaDeCompras = [];
const menu = "1 - Adicionar item\n2 - Remover item\n3 - Mostrar lista de compras\n4 - Finalizar lista de compras";
console.log(menu);

while (true) {
    let AdicionarItem = prompt("Escolha uma opção: ");
    if (AdicionarItem === "1") {
        let item = prompt("Digite o nome do item: ");
        listaDeCompras.push(item);
    } else if (AdicionarItem === "2") {
        let item = prompt("Digite o nome do item a ser removido: ");
        let index = listaDeCompras.indexOf(item);
        if (index !== -1) {
            listaDeCompras.splice(index, 1);
            console.log(`Item "${item}" removido da lista de compras.`);
        } else {
            console.log(`Item "${item}" não encontrado na lista de compras.`);
        }
    } else if (AdicionarItem === "3") {
        console.log("Lista de compras:");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } else if (AdicionarItem === "4") {
        console.log("Lista de compras finalizada!");
        break;
    } else {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        break;
    }
}
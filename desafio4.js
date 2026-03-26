// ===============================
// Desafio 4 - Lista de Compras
// Gerenciador simples no terminal
// ===============================

const prompt = require("prompt-sync")();

// array principal (começa vazio)
let listaDeCompras = [];


// -------------------------------
// FUNÇÃO: adicionar item
// -------------------------------
function adicionarItem(item) {
  listaDeCompras.push(item);
  console.log(`✅ Item "${item}" adicionado!`);
}


// -------------------------------
// FUNÇÃO: remover item
// -------------------------------
function removerItem(item) {

  // procura o índice do item
  let indice = listaDeCompras.indexOf(item);

  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`🗑️ Item "${item}" removido!`);
  } else {
    console.log("❌ Item não encontrado na lista.");
  }
}


// -------------------------------
// FUNÇÃO: exibir lista
// -------------------------------
function exibirLista() {

  if (listaDeCompras.length === 0) {
    console.log("🛒 Lista vazia.");
    return;
  }

  console.log("\n📋 Lista de Compras:");

  for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`${i + 1}. ${listaDeCompras[i]}`);
  }

  console.log();
}


// -------------------------------
// MENU PRINCIPAL
// -------------------------------
let opcao = 0;

while (opcao !== 4) {

  console.log("========== MENU ==========");
  console.log("1 - Adicionar item");
  console.log("2 - Remover item");
  console.log("3 - Exibir lista");
  console.log("4 - Sair");

  opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {

    case 1:
      let novoItem = prompt("Digite o nome do item: ");
      adicionarItem(novoItem);
      break;

    case 2:
      let itemRemover = prompt("Digite o nome do item para remover: ");
      removerItem(itemRemover);
      break;

    case 3:
      exibirLista();
      break;

    case 4:
      console.log("👋 Programa encerrado.");
      break;

    default:
      console.log("❌ Opção inválida.");
  }
}

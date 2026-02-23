//Desafio Cintia

let preco = 199.90;
let temDesconto = true;


let icms = Math.floor(Math.random() * 14) + 12;


let precoFinal = temDesconto ? preco * 0.9 : preco;


precoFinal += precoFinal * (icms / 100);



console.log("Preço original: R$", preco.toFixed(2));
console.log("Teve desconto?", temDesconto ? "Sim (10%)" : "Não");
console.log("ICMS:", icms + "%");
console.log("Preço final: R$", precoFinal.toFixed(2));

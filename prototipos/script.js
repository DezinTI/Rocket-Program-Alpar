Array.prototype.meuMap = function (callback) {
  const resultado = [];

  for (let i = 0; i < this.length; i += 1) {
    resultado.push(callback(this[i], i, this));
  }

  return resultado;
};

Array.prototype.meuFilter = function (callback) {
  const resultado = [];

  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }

  return resultado;
};

Array.prototype.meuReduce = function (callback, valorInicial) {
  let acumulador = valorInicial;
  let indiceInicial = 0;

  if (acumulador === undefined) {
    acumulador = this[0];
    indiceInicial = 1;
  }

  for (let i = indiceInicial; i < this.length; i += 1) {
    acumulador = callback(acumulador, this[i], i, this);
  }

  return acumulador;
};

Array.prototype.meuForEach = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
};

Array.prototype.meuFind = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.meuMap((n) => n * 2);
const pares = numeros.meuFilter((n) => n % 2 === 0);
const soma = numeros.meuReduce((acc, atual) => acc + atual, 0);
const primeiroMaiorQueTres = numeros.meuFind((n) => n > 3);

let textoForEach = 'meuForEach -> '; 
numeros.meuForEach((n) => {
  textoForEach += `${n} `;
});

console.log('Original:', numeros);
console.log('meuMap:', dobrados, '| map nativo:', numeros.map((n) => n * 2));
console.log('meuFilter:', pares, '| filter nativo:', numeros.filter((n) => n % 2 === 0));
console.log('meuReduce:', soma, '| reduce nativo:', numeros.reduce((acc, atual) => acc + atual, 0));
console.log('meuFind:', primeiroMaiorQueTres, '| find nativo:', numeros.find((n) => n > 3));
console.log(textoForEach);

const saida = document.getElementById('saida');
saida.textContent = [
  `Array original: ${JSON.stringify(numeros)}`,
  `meuMap: ${JSON.stringify(dobrados)}`,
  `meuFilter: ${JSON.stringify(pares)}`,
  `meuReduce: ${soma}`,
  `meuFind: ${primeiroMaiorQueTres}`,
  textoForEach
].join('\n');

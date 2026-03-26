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
  const temInicial = arguments.length > 1;
  let acumulador = temInicial ? valorInicial : this[0];
  let indiceInicial = temInicial ? 0 : 1;

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

const dobradosNativo = numeros.map((n) => n * 2);
const dobradosManual = numeros.meuMap((n) => n * 2);

const paresNativo = numeros.filter((n) => n % 2 === 0);
const paresManual = numeros.meuFilter((n) => n % 2 === 0);

const somaNativo = numeros.reduce((ac, n) => ac + n, 0);
const somaManual = numeros.meuReduce((ac, n) => ac + n, 0);

console.log("Map nativo:", dobradosNativo);
console.log("Map manual:", dobradosManual);
console.log("Filter nativo:", paresNativo);
console.log("Filter manual:", paresManual);
console.log("Reduce nativo:", somaNativo);
console.log("Reduce manual:", somaManual);

console.log("ForEach manual:");
numeros.meuForEach((n, i) => {
  console.log(`Indice ${i}:`, n);
});

const encontrado = numeros.meuFind((n) => n > 3);
console.log("Find manual (primeiro > 3):", encontrado);

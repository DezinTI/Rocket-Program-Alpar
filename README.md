🚀 Rocket Program - Alpar
📚 Instrutor: Felipe Ruffo
💻 JavaScript Básico
📅 Dia 09/02

Iniciando os estudos em JavaScript básico, com aulas via YouTube.

🟨 O que é JavaScript?

JavaScript é uma linguagem de alto nível, projetada para ser:

fácil de escrever

fácil de ler

usada por diferentes pessoas

🔹 Onde é utilizado?

✅ Front-end (navegador / páginas interativas)
✅ Back-end com Node.js
✅ APIs, sistemas web e aplicações

🔹 Interpretação vs Compilação
JavaScript → Interpretado

Executa linha por linha, durante a execução.

Java → Compilado

Compila todo o código primeiro, depois executa.

🟨 Declaração de Variáveis
🔹 var

Cria variáveis que podem mudar
❌ Escopo global (menos seguro)

var nome = "Dezinho";

🔹 let

Cria variáveis que podem mudar
✅ Respeita escopo de bloco (RECOMENDADO)

let idade = 20;

🔹 const

Valor não pode ser alterado

const PI = 3.14;

🟨 Tipos de Variáveis
🔹 String (texto)
let nome = "André";
let cidade = 'Curitiba';

🔹 Number (números)
let idade = 21;
let altura = 1.75;

🔹 Boolean (lógico)
let ativo = true;
let logado = false;

🔹 Object (objeto)

Coleção de dados relacionados

let endereco = {
  cep: "12345-000",
  rua: "Rua A",
  numero: 10
};

🔹 Array / Vetor / Lista

Guarda vários valores

let numeros = [10, 20, 30, 40];

🟨 Operadores Aritméticos
Operador	Função	Exemplo
+	adição	2 + 3 = 5
-	subtração	10 - 4 = 6
*	multiplicação	6 * 7 = 42
/	divisão	9 / 3 = 3
%	resto	10 % 3 = 1
**	potência	2 ** 3 = 8
++	incremento	x++
--	decremento	y--
🟨 Operadores Lógicos
Operador	Significado	Exemplo
&&	E	true && false
||	OU	false || true
!	NÃO	!true
??	valor padrão	null ?? "padrao"
?:	ternário	idade >= 18 ? "maior" : "menor"
🟨 Operadores Relacionais (comparação)
Operador	Função
==	igual (converte tipo)
===	estritamente igual
!=	diferente
!==	estritamente diferente
>	maior
<	menor
>=	maior ou igual
<=	menor ou igual
⚠️ Dica

Prefira sempre:

===


(evita bugs de conversão de tipo)

🟨 Operadores de Atribuição
Operador	Exemplo	Resultado
=	a = 5	atribui
+=	a += 3	soma
-=	a -= 2	subtrai
*=	a *= 2	multiplica
/=	a /= 2	divide
%=	a %= 3	resto
**=	a **= 3	potência
&&=	lógico E	
||=	lógico OU	
??=	valor padrão	
🟨 Condicionais
if / else
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

switch
let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Cadastrar");
    break;
  case 2:
    console.log("Listar");
    break;
  default:
    console.log("Inválido");
}

🟨 Loops (Repetição)
🔹 for (quando sabe quantas vezes)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

🔹 while (repete enquanto for verdadeiro)
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

🔹 do while (executa pelo menos 1 vez)
let opcao;

do {
  opcao = Number(prompt("Digite 0 para sair"));
} while (opcao !== 0);

🟨 Trabalhando com Arrays
Criar
let notas = [7, 8, 9];

Acessar
console.log(notas[0]);

Percorrer (for tradicional)
for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}

Percorrer (for-of)
for (let nota of notas) {
  console.log(nota);
}

🟨 Exemplo Completo (misturando tudo)
let notas = [7, 6, 9, 8];
let soma = 0;

for (let nota of notas) {
  soma += nota;
}

let media = soma / notas.length;

if (media >= 7) {
  console.log("Aprovado! Média:", media);
} else {
  console.log("Reprovado! Média:", media);
}

# Trabalhando com Loops

- Loop (FOR) ex: for(let i = 0; < 5; i++){
        console.log(i);
}

inicia a váriavel que controla o fluxo do loop
define a operação lógica que vai maneter o loop funcionando enquanto for verdadeiro
normalmente incrementa ou decremente a váriavel, até retornar false

- Loop (WHILE) ex: let i = 0;

while (i < 6) {
    console.log("Contagem: " + i);
    i++;
}

while = enquanto, formando  um parametro
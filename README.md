# 🟨 O que é JavaScript?

JavaScript é uma linguagem de programação de alto nível, feita para ser:

✅ fácil de escrever
✅ fácil de ler
✅ usada tanto por iniciantes quanto por profissionais

É a linguagem principal da Web.

# 🟨 Onde podemos usar?

JavaScript está em praticamente tudo:

✅ Front-end (navegador)
✅ Back-end (Node.js)
✅ APIs e sistemas web
✅ Apps mobile (React Native)
✅ Desktop (Electron)
✅ Jogos 2D/3D
✅ Automação de tarefas

🟨 Interpretado vs Compilado
🔹 JavaScript → Interpretado

Executa linha por linha durante a execução.

🔹 Java → Compilado

Compila todo o código primeiro, depois executa.

👉 JS é mais rápido para testar e aprender.

# 🟨 Variáveis

Servem para armazenar dados na memória.

🔹 var (evitar)
var nome = "Dezinho";


❌ Escopo global
❌ Pode causar bugs

🔹 let (recomendado)
let idade = 20;


✅ Pode mudar
✅ Escopo de bloco (mais seguro)

🔹 const
const PI = 3.14;


✅ Não pode mudar
Use para valores fixos.

# 🟨 Regras para nomes

✔ pode ter números (não no início)
✔ pode usar _
✔ case sensitive

nome ≠ Nome

# 🟨 Tipos de Dados
🔹 String
let nome = "André";

🔹 Number
let idade = 21;
let altura = 1.75;

🔹 Boolean
let ativo = true;

🔹 Object
let pessoa = {
  nome: "Dezinho",
  idade: 20
};

🔹 Array (lista)
let notas = [7, 8, 9];

# 🟨 Operadores Aritméticos
Operador	Função
+	soma
-	subtração
*	multiplicação
/	divisão
%	resto
**	potência
++	incremento
--	decremento
# 🟨 Operadores de Atribuição
a += 2
a -= 2
a *= 2
a /= 2
a %= 2
a **= 2

# 🟨 Operadores Lógicos
Operador	Significado
&&	E
	
!	NÃO
??	valor padrão
?:	ternário

Exemplo:

idade >= 18 ? "maior" : "menor";

# 🟨 Operadores Relacionais

⚠️ Prefira sempre ===

Operador	Uso
==	igual (converte tipo)
===	estritamente igual
!=	diferente
> < >= <=	comparação
# 🟨 Condicionais
if / else
if (idade >= 18) {
  console.log("Maior");
} else {
  console.log("Menor");
}

switch
switch(opcao){
  case 1:
    console.log("Cadastrar");
    break;
  case 2:
    console.log("Listar");
    break;
  default:
    console.log("Inválido");
}


👉 Use quando tiver muitas opções para a mesma variável.

# 🟨 Escopo
Global

Acessível em todo o código.

Local (bloco)

Só funciona dentro das { }.

if(true){
  let x = 10;
}


Aqui x só existe dentro do bloco.

# 🟨 Loops (Repetição)
🔹 for (quando sabe quantas vezes)
for (let i = 0; i < 5; i++) {
  console.log(i);
}


Estrutura:

for(início; condição; incremento)

🔹 while (enquanto for verdadeiro)
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}


⚠ cuidado com loop infinito

🔹 do...while (executa 1x garantido)
do {
  console.log("Executa primeiro");
} while(condicao);

# 🟨 Arrays
Criar
let frutas = ["banana", "maçã"];

Acessar
console.log(frutas[0]);


⚠ começa no índice 0

Percorrer
for (let fruta of frutas) {
  console.log(fruta);
}

# 🟨 Funções
Normal
function soma(a, b){
  return a + b;
}

Anônima
const soma = function(a,b){
  return a + b;
};

Arrow
const soma = (a,b) => a + b;


👉 Mais usada hoje em dia.

# 🟨 Objetos

Agrupam dados em chave: valor

let aluno = {
  nome: "Dezinho",
  idade: 20
};

Acessar
aluno.nome


👉 chamado de dot walking

# 🟨 Exemplo Completo
let notas = [7, 6, 9, 8];
let soma = 0;

for (let nota of notas) {
  soma += nota;
}

let media = soma / notas.length;

if (media >= 7) {
  console.log("Aprovado!", media);
} else {
  console.log("Reprovado!", media);
}
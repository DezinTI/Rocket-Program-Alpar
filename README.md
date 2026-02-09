# 🚀 Rocket Program - Alpar  
## 📚 Instrutor: Felipe Ruffo  
## 💻 JavaScript Básico  
### 📅 Dia 09/02

Iniciando os estudos em **JavaScript básico**, com aulas via YouTube.

---

# 🟨 O que é JavaScript?

JavaScript é uma **linguagem de alto nível**, criada para ser:

- fácil de escrever
- fácil de ler
- usada por diferentes pessoas

## 🔹 Onde é utilizado?

✅ Front-end (navegadores / páginas web interativas)  
✅ Back-end com Node.js  
✅ Apps, APIs e sistemas web

---

## 🔹 Interpretação vs Compilação

### JavaScript → Interpretado
Executa **linha por linha**, conforme o código roda.

### Java → Compilado
Compila **tudo de uma vez** antes de executar.

---

# 🟨 Declaração de Variáveis

## 🔹 var
Cria variáveis que **podem mudar**  
❌ Escopo mais solto (menos recomendado)

```js
var nome = "Dezinho";
🔹 let
Cria variáveis que podem mudar
✅ Respeita melhor o escopo (RECOMENDADO)

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
??	valor padrão se nulo	null ?? "padrao"
?:	ternário	idade >= 18 ? "maior" : "menor"
🟨 Operadores Relacionais (comparação)
Operador	Função
==	igual (com conversão)
===	estritamente igual
!=	diferente
!==	estritamente diferente
>	maior
<	menor
>=	maior ou igual
<=	menor ou igual
⚠️ Dica importante
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
🟨 Exemplos rápidos
➜ Condicional
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
➜ Loop for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
➜ Loop while
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
➜ Array
let notas = [7, 8, 9];

for (let nota of notas) {
  console.log(nota);
}
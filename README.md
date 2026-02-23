# Rocket-Program-Alpar

Repositório com projetos de prática em **HTML, CSS e JavaScript**, organizados por desafios e mini-sites.

## Estrutura de pastas

```text
Rocket-Program-Alpar/
├─ index.html                  # Página principal (portfólio)
├─ assets/
│  └─ style.css               # Estilos globais da página principal
├─ blog/                      # Área reservada para o blog (atualmente vazia)
├─ cafeteria/
│  ├─ index.html              # Página inicial da cafeteria
│  ├─ menu.html               # Página de cardápio
│  ├─ contato.html            # Página de contato
│  └─ assets/
│     └─ cafeteria.css        # Estilos do projeto cafeteria
├─ card/
│  ├─ index.html              # Cartão de perfil
│  └─ assets/
│     └─ card.css             # Estilos do card
├─ Desafios/
│  ├─ desafio1.js
│  ├─ desafio2.js
│  ├─ desafio3.js
│  ├─ desafio4.js
│  └─ desafioCintia.js        # Exercícios JavaScript
├─ empresa-table/
│  ├─ index.html              # Site com layout baseado em tabelas
│  └─ assets/
│     └─ empresa-table.css
└─ podcast/
   ├─ index.html              # Página do podcast
   └─ assets/
      └─ podcast.css
```

## Como executar

Como são páginas estáticas, você pode:

1. Abrir `index.html` diretamente no navegador, ou
2. Usar a extensão **Live Server** no VS Code para navegar entre os projetos.

## Como funciona o blog

### Estado atual

No momento, a pasta `blog/` está criada, mas **sem arquivos**.

Isso significa que:

- ainda não existe uma página principal do blog (ex.: `blog/index.html`),
- não há estilos/scripts próprios do blog,
- e o blog ainda não está linkado na navegação da página principal.

### Fluxo esperado (quando implementado)

A estrutura mais simples para o blog pode ser:

```text
blog/
├─ index.html          # Lista de posts
├─ post-1.html         # Página de um post
├─ post-2.html
└─ assets/
   └─ blog.css         # Estilos do blog
```

Funcionamento:

1. `blog/index.html` lista os artigos;
2. cada item aponta para uma página de post;
3. o usuário entra no blog pelo link adicionado em `index.html` (página principal do portfólio).

---

Se quiser, eu já posso criar essa estrutura inicial do blog (com `blog/index.html`, `blog/assets/blog.css` e 1 post de exemplo) para deixar tudo funcionando agora.

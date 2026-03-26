class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipo = "usuario";
  }

  exibirPerfil() {
    return `<p><strong>Nome:</strong> ${this.nome}</p><p><strong>Email:</strong> ${this.email}</p>`;
  }
}

class Aluno extends Usuario {
  constructor(nome, email, senha, turma) {
    super(nome, email, senha);
    this.turma = turma;
    this.tipo = "aluno";
  }

  exibirPerfil() {
    return `${super.exibirPerfil()}<p><strong>Turma:</strong> ${this.turma}</p>`;
  }
}

class Professor extends Usuario {
  constructor(nome, email, senha, materias) {
    super(nome, email, senha);
    this.materias = materias;
    this.tipo = "professor";
  }

  exibirPerfil() {
    return `${super.exibirPerfil()}<p><strong>Materias:</strong> ${this.materias.join(", ")}</p>`;
  }
}

const usuarios = [
  new Aluno("André Augustinho", "andre@escola.com", "senha123", "2A"),
  new Aluno("Teste da Silva", "teste@escola.com", "123456", "3B"),
  new Professor("Felipe Ruffo", "ruffo@escola.com", "abcdef", ["Matematica", "Fisica"]),
  new Professor("Cintia Oliveira", "cintia@escola.com", "abcdef", ["Historia", "Geografia"]),
];

console.log("Exibicao de perfis no console:");
usuarios.forEach((usuario) => {
  console.log(usuario.exibirPerfil());
});

window.SistemaEscola = {
  Usuario,
  Aluno,
  Professor,
  usuarios,
};

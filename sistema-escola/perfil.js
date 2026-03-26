const perfilContainer = document.getElementById("perfilContainer");
const btnSair = document.getElementById("btnSair");

const usuarioArmazenado = localStorage.getItem("usuarioLogado");

if (!usuarioArmazenado) {
  window.location.href = "login.html";
}

if (usuarioArmazenado) {
  const usuario = JSON.parse(usuarioArmazenado);

  perfilContainer.innerHTML = "";
  perfilContainer.innerHTML += `<p><strong>Nome:</strong> ${usuario.nome}</p>`;
  perfilContainer.innerHTML += `<p><strong>Email:</strong> ${usuario.email}</p>`;

  if (usuario.tipo === "aluno") {
    perfilContainer.innerHTML += `<p><strong>Turma:</strong> ${usuario.turma}</p>`;
  }

  if (usuario.tipo === "professor") {
    perfilContainer.innerHTML += `<p><strong>Materias:</strong> ${usuario.materias.join(", ")}</p>`;
  }
}

btnSair.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
});

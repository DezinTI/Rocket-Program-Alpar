const formLogin = document.getElementById("formLogin");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const erroLogin = document.getElementById("erroLogin");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  erroLogin.textContent = "";

  const email = campoEmail.value.trim().toLowerCase();
  const senha = campoSenha.value;

  const usuarioEncontrado = window.SistemaEscola.usuarios.find(
    (usuario) => usuario.email.toLowerCase() === email && usuario.senha === senha
  );

  if (!usuarioEncontrado) {
    erroLogin.textContent = "Email ou senha invalidos.";
    campoSenha.classList.add("is-invalid");
    return;
  }

  campoSenha.classList.remove("is-invalid");
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
  window.location.href = "perfil.html";
});

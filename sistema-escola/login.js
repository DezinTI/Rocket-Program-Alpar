const loginForm = document.getElementById('loginForm');
const erroSenha = document.getElementById('erroSenha');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim().toLowerCase();
  const senha = document.getElementById('senha').value.trim();

  erroSenha.textContent = '';

  const usuario = buscarUsuarioPorCredenciais(email, senha);

  if (!usuario) {
    erroSenha.textContent = 'E-mail ou senha invalidos.';
    document.getElementById('senha').classList.add('is-invalid');
    return;
  }

  document.getElementById('senha').classList.remove('is-invalid');
  localStorage.setItem('usuarioLogado', JSON.stringify(serializarUsuario(usuario)));
  window.location.href = 'perfil.html';
});

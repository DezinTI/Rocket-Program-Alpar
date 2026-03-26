const perfilContainer = document.getElementById('perfilContainer');
const sairBtn = document.getElementById('sairBtn');

const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioLogado'));
const usuarioReconstruido = reconstruirUsuario(usuarioSalvo);

if (!usuarioReconstruido) {
  window.location.href = 'index.html';
}

if (usuarioReconstruido) {
  perfilContainer.innerHTML += `
    <div class="perfil-item">
      <h2 class="h5">Dados de Acesso</h2>
      <p class="mb-0">${usuarioReconstruido.exibirPerfil()}</p>
    </div>
  `;
}

sairBtn.addEventListener('click', () => {
  localStorage.removeItem('usuarioLogado');
  window.location.href = 'index.html';
});

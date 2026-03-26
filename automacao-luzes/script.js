class CentralDeLuzes {
  static instancia = null;

  constructor() {
    if (CentralDeLuzes.instancia) {
      return CentralDeLuzes.instancia;
    }

    this.estado = {};
    CentralDeLuzes.instancia = this;
  }

  static getInstance() {
    if (!CentralDeLuzes.instancia) {
      CentralDeLuzes.instancia = new CentralDeLuzes();
    }

    return CentralDeLuzes.instancia;
  }

  ligar(comodo) {
    this.estado[comodo] = true;
    return `Luz do ${comodo} ligada`;
  }

  desligar(comodo) {
    this.estado[comodo] = false;
    return `Luz do ${comodo} desligada`;
  }
}

const central = CentralDeLuzes.getInstance();
const mensagem = document.getElementById('mensagem');

const atualizarComodo = (comodo, ligado) => {
  const divComodo = document.getElementById(`comodo-${comodo}`);

  if (!divComodo) {
    return;
  }

  divComodo.classList.toggle('on', ligado);
};

document.querySelectorAll('button[data-comodo]').forEach((botao) => {
  botao.addEventListener('click', () => {
    const comodo = botao.dataset.comodo;
    const acao = botao.dataset.acao;

    const texto = acao === 'ligar'
      ? central.ligar(comodo)
      : central.desligar(comodo);

    mensagem.textContent = texto;
    mensagem.className = `alert ${acao === 'ligar' ? 'alert-success' : 'alert-secondary'}`;
    atualizarComodo(comodo, acao === 'ligar');
  });
});

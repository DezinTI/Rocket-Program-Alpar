class CentralDeLuzes {
  static instancia;

  constructor() {
    if (CentralDeLuzes.instancia) {
      return CentralDeLuzes.instancia;
    }

    CentralDeLuzes.instancia = this;
  }

  static getInstance() {
    if (!CentralDeLuzes.instancia) {
      CentralDeLuzes.instancia = new CentralDeLuzes();
    }

    return CentralDeLuzes.instancia;
  }

  ligar(comodo) {
    this.atualizarComodo(comodo, true);
  }

  desligar(comodo) {
    this.atualizarComodo(comodo, false);
  }

  atualizarComodo(comodo, ligada) {
    const status = document.getElementById("status");
    const boxComodo = document.querySelector(`.comodo[data-comodo="${comodo}"]`);

    if (!boxComodo) {
      return;
    }

    boxComodo.classList.toggle("acesa", ligada);
    status.textContent = `Luz do ${comodo} ${ligada ? "ligada" : "desligada"}.`;
  }
}

const central = CentralDeLuzes.getInstance();
const botoes = document.querySelectorAll("button[data-comodo]");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const comodo = botao.dataset.comodo;
    const acao = botao.dataset.acao;

    if (acao === "ligar") {
      central.ligar(comodo);
    } else {
      central.desligar(comodo);
    }
  });
});

const form = document.getElementById("validacao-form");
const toast = document.getElementById("toast");

const campos = {
  nome: {
    input: document.getElementById("nome"),
    message: document.getElementById("nome-msg"),
    regex: /^[A-Za-zÀ-ÿ\s]+$/,
    invalidText: "Invalido: use apenas letras e espacos."
  },
  email: {
    input: document.getElementById("email"),
    message: document.getElementById("email-msg"),
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    invalidText: "Invalido: informe um email no formato padrao."
  },
  cpf: {
    input: document.getElementById("cpf"),
    message: document.getElementById("cpf-msg"),
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    invalidText: "Invalido: use o formato 000.000.000-00."
  }
};

Object.values(campos).forEach(({ input }) => {
  input.addEventListener("input", () => validarCampo(input.id));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeValido = validarCampo("nome");
  const emailValido = validarCampo("email");
  const cpfValido = validarCampo("cpf");

  if (nomeValido && emailValido && cpfValido) {
    showToast("Todos os campos estao validos.", "success");
    return;
  }

  showToast("Envio bloqueado: existem campos invalidos.", "error");
});

function validarCampo(chave) {
  const campo = campos[chave];
  const valor = campo.input.value.trim();
  const valido = campo.regex.test(valor);

  campo.input.classList.remove("valid", "invalid");
  campo.message.classList.remove("valid", "invalid");

  if (!valor) {
    campo.message.textContent = "Campo obrigatorio.";
    campo.input.classList.add("invalid");
    campo.message.classList.add("invalid");
    return false;
  }

  if (valido) {
    campo.message.textContent = "Valido";
    campo.input.classList.add("valid");
    campo.message.classList.add("valid");
    return true;
  }

  campo.message.textContent = campo.invalidText;
  campo.input.classList.add("invalid");
  campo.message.classList.add("invalid");
  return false;
}

function showToast(text, type) {
  toast.textContent = text;
  toast.className = "toast";
  toast.classList.add("show", type);

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.className = "toast";
  }, 2400);
}

const form = document.getElementById("formContato");
const mensagemEnvio = document.getElementById("mensagemEnvio");

function marcarCampo(campo, valido) {
  campo.classList.remove("is-valid", "is-invalid");
  campo.classList.add(valido ? "is-valid" : "is-invalid");
}

function campoValido(campo) {
  if (campo.type === "checkbox") {
    return campo.checked;
  }
  return campo.checkValidity();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const campos = Array.from(form.querySelectorAll("input, select, textarea"));
  let formularioValido = true;

  campos.forEach((campo) => {
    const valido = campoValido(campo);
    marcarCampo(campo, valido);

    if (!valido) {
      formularioValido = false;
    }
  });

  if (!formularioValido) {
    mensagemEnvio.classList.add("d-none");
    return;
  }

  mensagemEnvio.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
  mensagemEnvio.classList.remove("d-none");
  form.reset();

  campos.forEach((campo) => {
    campo.classList.remove("is-valid");
  });
});

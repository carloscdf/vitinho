const senhaCorreta = 38457218;

function verificarSenha() {
  const senhaDigitada = parseInt(document.getElementById("senhaInput").value);
  const mensagemErro = document.getElementById("mensagemErro");

  if (senhaDigitada === senhaCorreta) {
    mensagemErro.style.color = "#dcedff";
    mensagemErro.textContent = "Você acertou meu bem! Te Amoooo.";

    setTimeout(() => {
      window.location.href = "03012023.html";
    }, 1000);

  } else {
    mensagemErro.style.color = "#ff0000ff";
    mensagemErro.textContent = "Esqueceu foi? Senha incorreta!";
  }

  return false; // evita que o formulário recarregue a página
}

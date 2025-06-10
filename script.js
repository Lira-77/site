function mostrarMensagem() {
  const msg = document.getElementById('mensagem');
  const botao = document.querySelector('.cta-button');

  if (msg.textContent === "") {
    msg.textContent = "Obrigado por visitar meu site, escolha o que você quer ler sobre nas abas acima!";
    botao.textContent = "Ocultar";
  } else {
    msg.textContent = "";
    botao.textContent = "Clique Aqui";
  }
}

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotalTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
   const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  
  if (modoEscuroEstaAtivo) {
    body.classList.remove("modo-escuro");
    
    imagemBotalTrocaDeTema.setAttribute("src", "./SRC/Imagens/sun.png")
    
  } else {
      body.classList.add("modo-escuro");
      
        imagemBotalTrocaDeTema.setAttribute("src", "./SRC/Imagens/moon.png")
  
    }
  
  
} );

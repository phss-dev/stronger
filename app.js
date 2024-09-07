function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Não encontrado. Digite o nome de um procedimento para continuar!"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
  
    // Intera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Vídeo Aula Aqui!</a>
        </div>
      `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
      // Constrói o HTML para cada resultado, formatando o título, descrição e link
      
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado, digite o nome de um exercício ou musculo.<p>" 
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
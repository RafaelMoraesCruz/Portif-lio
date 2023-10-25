experiencias = [
    (experiencia = {
      imagem: "./imagens/cin.jpg",
      url: "https://portal.cin.ufpe.br/",
      nome: "Cin/Motorola",
      titulo: "Residência de software Cin/Motorola",
      descricao: "Atua criando e gerindo testes para para área de auto regression,\
       responsável pela manutenção do ambiente de testes compartilhado.\
        Auxílio a equipe de manual por meio da execução de testes automatizados,\
         organização de servidor, elaboração de documentações…"
    })];

    function create_formations(experiencias) {
        var experiencias_div = $("#experiencias");
      
        experiencias.forEach(({ imagem, url, nome, titulo, descricao }) => {
          experiencias_div.append(
            '<div class="col-sm-6 col-md-6 col-lg-6 experiencia-item"><a href=' +
              url +
              "><img src=" +
              imagem +
              ' alt="Cin-alt"/></a><h3>' +
              nome +
              "</h3><p><strong>" +
              titulo +
              "</strong></p><p>" +
              descricao +
              "</p></div>"
          );
        });
      }
      
      create_formations(experiencias);
      
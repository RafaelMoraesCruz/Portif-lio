formacoes = [
  (formacao = {
    imagem: "./imagens/MaristaSaoLuis.png",
    url: "https://marista.edu.br/saoluis/",
    nome: "Marista São Luis",
    titulo: "Ensino fundamental e médio",
  }),
  (formacao = {
    imagem: "./imagens/POLI.png",
    url: "https://upe.poli.br/",
    nome: "Universidade de Pernambuco",
    titulo: "Engenheiro Civil",
  }),
  (formacao = {
    imagem: "./imagens/Cesar.png",
    url: "https://www.cesar.school/",
    nome: "CESAR School",
    titulo: "Pós-graduação em Engenharia e análise de dados",
  }),
];

function create_formations(formacoes) {
  var formacoes_div = $("#formacoes");

  formacoes.forEach(({ imagem, url, nome, titulo }) => {
    formacoes_div.append(
      '<div class="col-sm-6 col-md-6 col-lg-4 formacao-item"><a href=' +
        url +
        "><img src=" +
        imagem +
        ' alt="MaristaSaoLuis-alt"/></a><h3>' +
        nome +
        "</h3><p>" +
        titulo +
        "</p></div>"
    );
  });
}

create_formations(formacoes);

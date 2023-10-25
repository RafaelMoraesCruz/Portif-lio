formacoes = [
  (formacao = {
    imagem: "./imagens/Cesar.png",
    url: "https://www.cesar.school/",
    nome: "CESAR School",
    titulo: "Pós-graduação em Engenharia e análise de dados",
    descricao: 'Pós graduação voltada para dados,\
     envolvendo data science\
     e suas principais tecnologias com python,\
     algumas práticas com cloud(AWS)\
     e uma metodologia bem "hands-on".\
     com a apresentação de uma monografia ao final.',
  }),
  (formacao = {
    imagem: "./imagens/cin.jpg",
    url: "https://portal.cin.ufpe.br/",
    nome: "Cin/Motorola",
    titulo: "Residência de software Cin/Motorola",
    descricao: "O programa de residência conta com a parte letiva\
    possuindo 15 cadeiras ao total voltadas para testes, data science e desenvolvimento\
    com a apresentação de uma monografia ao final.",
  }),
  (formacao = {
    imagem: "./imagens/POLI.png",
    url: "https://upe.poli.br/",
    nome: "Universidade de Pernambuco",
    titulo: "Engenheiro Civil",
    descricao: "Formado em engenharia Civil,\n\
     trabalhei 2 anos dentro de obras liderando equipes.", 
  }),
];

function create_formations(formacoes) {
  var formacoes_div = $("#formacoes");

  formacoes.forEach(({ imagem, url, nome, titulo, descricao }) => {
    formacoes_div.append(
      '<div class="col-sm-6 col-md-6 col-lg-6 formacao-item"><a href=' +
        url +
        "><img src=" +
        imagem +
        ' alt="MaristaSaoLuis-alt"/></a><h3>' +
        nome +
        "</h3><p><strong>" +
        titulo +
        "</strong></p><p>" +
        descricao +
        "</p></div>"
    );
  });
}

create_formations(formacoes);

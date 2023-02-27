PROJETOS = [
  (projeto1 = {
    titulo: "Drum-Ki",
    tecnologias: "HTML, CSS, Javascript",
    url: "https://rafaelmoraescruz.github.io/Drum-Kit/",
    descricao: "projeto",
    image: "./imagens/bateria.jpg",
  }),
  (projeto2 = {
    titulo: "Análise Pokemon",
    tecnologias: "Python(pandas, seaborn, matplotlib)",
    url: "https://github.com/RafaelMoraesCruz/Estudo-dataSet-Pokemon--p-s-",
    descricao: "projeto",
    image: "./imagens/pokemon.jpg",
  }),
  (projeto3 = {
    titulo: "Bootstrap Trainning",
    tecnologias: "HTML, CSS, bootstrap",
    url: "https://rafaelmoraescruz.github.io/Bootstrap-Trainning/",
    descricao: "projeto",
    image: "./imagens/bootstraptrainning.webp",
  }),
  (projeto4 = {
    titulo: "FrontEnd DeepCode",
    tecnologias: "html, css, bootstrap, javascript",
    url: "https://github.com/RafaelMoraesCruz/FrontEndDeepCode",
    descricao: "projeto",
    image: "./imagens/deepcode.webp",
  }),
  (projeto5 = {
    titulo: "BackEnd DeepCode",
    tecnologias: "Java, SpringBoot",
    url: "https://github.com/RafaelMoraesCruz/ProjetoDeepCodeBackEnd",
    descricao: "projeto",
    image: "./imagens/deepcode2.jpg",
  }),
  (projeto6 = {
    titulo: "Acidentes cidade do Recife",
    tecnologias: "Python(pandas, plotly, dash, streamlit...)",
    url: "https://github.com/RafaelMoraesCruz/dashboard-cesar-completo",
    descricao: "projeto",
    image: "./imagens/acidente-de-transito.jpg",
  }),
];

function create_projetos_cards(PROJETOS) {
  var projetos_div = $("#projetos-row");

  PROJETOS.forEach(({ titulo, tecnologias, url, descricao, image }) => {
    projetos_div.append(
      '<div class="col col-lg-3 col-md-6"><div class="card text-bg-primary" style="width: 20rem;"><img src="' +
        image +
        '"class="card-img-top" alt="card-img"><div class="card-body"><h5 class="card-title">' +
        titulo +
        '</h5><p class="card-text">' +
        tecnologias +
        "</p><a href=" +
        url +
        ' class="btn btn-light">Check project</a></div></div></div>'
    );
  });
}

create_projetos_cards(PROJETOS);

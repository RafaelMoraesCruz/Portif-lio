PROJETOS = [
  (projeto1 = {
    titulo: "Análise Herois Dota2",
    tecnologias: "Python, Pandas, Streamlit, Matplotlib",
    url: "https://github.com/RafaelMoraesCruz/Heroes-Dota2",
    descricao: "projeto",
    image: "./imagens/dota2.jpg",
  }),
  (projeto2 = {
    titulo: "Análise Pokemon",
    tecnologias: "Python, Pandas, Seaborn, Matplotlib",
    url: "https://github.com/RafaelMoraesCruz/Estudo-dataSet-Pokemon--p-s-",
    descricao: "projeto",
    image: "./imagens/pokemon.jpg",
  }),
  (projeto3 = {
    titulo: "Coleta Seletiva Recife",
    tecnologias: "Python, Pandas, bs4, Streamlit",
    url: "https://github.com/RafaelMoraesCruz/pontos_coleta_recife",
    descricao: "projeto",
    image: "./imagens/coleta-seletiva.jfif",
  }),
  (projeto4 = {
    titulo: "FrontEnd DeepCode",
    tecnologias: "HTML, CSS, Bootstrap, Javascript",
    url: "https://github.com/RafaelMoraesCruz/FrontEndDeepCode",
    descricao: "projeto",
    image: "./imagens/deepcode.webp",
  }),
  (projeto5 = {
    titulo: "BackEnd DeepCode",
    tecnologias: "Java, SpringBoot, JUnit",
    url: "https://github.com/RafaelMoraesCruz/ProjetoDeepCodeBackEnd",
    descricao: "projeto",
    image: "./imagens/deepcode2.jpg",
  }),
  (projeto6 = {
    titulo: "Acidentes cidade do Recife",
    tecnologias: "Python, Pandas, Dash, Streamlit",
    url: "https://github.com/RafaelMoraesCruz/dashboard-cesar-completo",
    descricao: "projeto",
    image: "./imagens/acidente-de-transito.jpg",
  }),
  (projeto7 = {
    titulo: "estudo-uso-kw-brasil",
    tecnologias: "Python, pandas, Matplotlib, SKLearn",
    url: "https://github.com/RafaelMoraesCruz/estudo-uso-kw-brasil",
    descricao: "projeto",
    image: "./imagens/energia.jpg",
  }),
  (projeto8 = {
    titulo: "modelos-descritivos",
    tecnologias: "Python, pandas, Matplotlib, SKLearn",
    url: "https://github.com/RafaelMoraesCruz/modelos-descritivos-nao-supervisionado",
    descricao: "projeto",
    image: "./imagens/machine_learning.jpg",
  }),
  (projeto9 = {
    titulo: "Drum-Ki",
    tecnologias: "HTML, CSS, Javascript",
    url: "https://rafaelmoraescruz.github.io/Drum-Kit/",
    descricao: "projeto",
    image: "./imagens/bateria.jpg",
  }),
  (projeto10 = {
    titulo: "Bootstrap Trainning",
    tecnologias: "HTML, CSS, Bootstrap",
    url: "https://rafaelmoraescruz.github.io/Bootstrap-Trainning/",
    descricao: "projeto",
    image: "./imagens/bootstraptrainning.webp",
  }),
];

function create_projetos_cards(PROJETOS) {
  var projetos_div = $("#projetos-row");

  PROJETOS.forEach(({ titulo, tecnologias, url, descricao, image }) => {
    projetos_div.append(
      '<div class="col col-lg-3 col-md-6"><div class="card text-bg-primary" style="width: 20rem;"><img src="' +
        image +
        '"class="card-img-top" alt="card-img"><div class="card-body"><h5 class="card-title"><b>' +
        titulo +
        '</b></h5><p class="card-text"><i>' +
        tecnologias +
        "</i></p><a href=" +
        url +
        ' class="btn btn-light">Projeto</a></div></div></div>'
    );
  });
}

create_projetos_cards(PROJETOS);

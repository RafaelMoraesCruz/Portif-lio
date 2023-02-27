CURSOS = [
  (curso = {
    nome: "Deep Code (Qualiti Inivative Learning)",
    descricao:
      "Atividades e grupos: Criação de CRUD(back and front end) usando: Java (Spring), MySQL, HTML,CSS, Javascript.",
  }),
  (curso = {
    nome: "Formação Python para Data Science (Alura)",
    descricao:
      "Scraping com Python: coleta de dados na web, Python para Data Science: linguagem e Numpy, Python para Data Science: Funções, Pacotes e Pandas, Python para Data Science, Python Pandas: tratando e analisando dados, Pandas: formatos diferentes de entrada e saída (IO), Data Visualization: explorando com Seaborn, Data Science: análise de series temporais, Corretor Ortográfico em Python: aplicando técnicas de NLP",
  }),
  (curso = {
    nome: "The complete 2022 Web Development bootcamp (Udemy)",
    descricao: "HTML, CSS, Javascript, Node, React, Web3 and DApps",
  }),
  (curso = {
    nome: "Java 2022 completo (Udemy)",
    descricao:
      "Fundamentos Java, Orientação a Objeto, Programação Funcional, MySQL, Spring Boot, JPA, Hibernate",
  }),
  (curso = {
    nome: "Python 3 (Curso em vídeos)",
    descricao:
      "Fundamentos do python, lógica de programação, Orientação a objeto",
  }),
  (curso = {
    nome: "React com Typescript",
    descricao:
      "Componentização, CSS com react, Props, State, Selecionando um item, Finalizando a aplicação.",
  }),
  (curso = {
    nome: "Métodos ágeis de A a Z: o curso completo (Udemy)",
    descricao:
      "Scrum, Lean, Kanban, Design Sprint, Spotify Squad, Smart, eXtreme Programming, Trello, Asana...",
  }),
  (curso = {
    nome: "Data empowerment (CESAR School)",
    descricao:
      "Métricas, KPI, visualização de dados, storytelling, compreensão da metodologia de trabalho...",
  }),
  (curso = {
    nome: "MySQL (Curso em vídeo)",
    descricao:
      "Uso básico do MySQl (CREATE, SELECT, UPDATE, INSERT, DROP, DELETE,JOIN)",
  }),
  (curso = {
    nome: "Git e Github (Curso em Video)",
    descricao:
      "uso básico de git e github (clone, push & pull, branchs, pull request, commits...)",
  }),
];


function create_cursos_cards(CURSOS) {
    var cursos_div = $("#accordionFlushExample");

    CURSOS.forEach(({ nome, descricao },index) => {
      cursos_div.append('<div class="accordion-item"><h2 class="accordion-header" id="flush-heading'+index+'"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse'+index+'" aria-expanded="false" aria-controls="flush-collapse'+index+'">'+ nome + '</button></h2><div id="flush-collapse'+index+'" class=" accordion-collapse collapse" aria-labelledby="flush-heading'+index+'" data-bs-parent="#accordionFlushExample"><div class="accordion-body">'+descricao+'</div></div></div>'
      );});
  }

create_cursos_cards(CURSOS)

const livro = {
  nome: "FrontEnd",
  capa: "Fina",
  cor: "Verde",
  paginas: 100,
  assunto: "Programação - O Início",
  editora: "Saraiva",

  vendido: true,
  
  famoso: function () {
    this.famoso = true;
    console.log("É mundialmente conhecido.")
  },

  ajudante: function () {
    this.ajudante = false;
    console.log("Ajudou milhares de iniciantes da programação.")
  },

  avaliacao: function(){
    this.avalicao = false;
    console.log("Tem 5 estrelas como avaliação.")
  },


  mostrarInfo: function () {
    console.log(`Nome: ${this.nome}`);
    console.log(`Capa: ${this.capa}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Páginas: ${this.paginas}`);
    console.log(`Assunto: ${this.assunto}`);
    console.log(`Editora: ${this.editora}`);
    console.log(`Este livro já foi vendido? ${this.vendido ? "Sim." : "Não."}`);
  }
};
	
livro.mostrarInfo();
livro.famoso();
livro.ajudante();
livro.avaliacao();
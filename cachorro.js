
const zéquinha = {
  nome: "zéquinha",
  raça: "pitbull",
  cor: "marrom",
  idade: 6,
  tamanho: "pequeno",
  vacinado: "não",
  patas: 3,

  ZéquinhaEstáBem: false,
  
  levantar: function () {
    this.levanta = true;
    console.log("Zéquinha consegue se levantar, mas, com muita dificuldade.")
  },

  correr: function () {
    this.corre = false;
    console.log("Zéquinha não consegue correr, se tenta, ele cai.")
  },

  pular: function(){
    this.pula = false;
    console.log("Zéquinha não consegue pular, de jeito nenhum.")
  },


  mostrarInfo: function () {
    console.log(`Nome: ${this.nome}`);
    console.log(`Raça: ${this.raça}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Tamanho: ${this.tamanho}`);
    console.log(`Vacinado: ${this.vacinado}`);
    console.log(`Patas: ${this.patas}`);
    console.log(`Zéquinha se meteu em uma briga com outros três cachorros da raça Pastor Alemão e acabou perdendo uma pata. Ele está bem? ${this.ZéquinhaEstáBem ? "Sim." : "Não."}`);
  }
};
	
zéquinha.mostrarInfo();
zéquinha.levantar();
zéquinha.correr();
zéquinha.pular();

const pessoa = {
    nome: "Milena",
    cpf: 58945620077,
    idade: 25,
    anoNascimento: 2000,
    corPele: "branca",
    altura: 1.60,
    peso: 53,
    nacionalidade: "brasileira",
    acordada: true,


    andando: function(){
        this.andar = false;
        console.log("Milena não está andando")

    },

    correndo: function(){
        this.correr = false;
        console.log("Milena não está correndo");
    },

    exercitando: function(){
        this.exercitar = false;
        console.log("Milena está se exercitando");
    },

    falando: function(){
        this.falar = true;
        console.log("Milena está falando");
    },

    ouvindo: function(){
        this.ouvir = true;
        console.log("Milena está ouvindo");
    },

    mostrarInfo: function(){
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Ano de Nascimento: ${this.anoNascimento}`);
        console.log(`Cor da pele: ${this.corPele}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Nacionalidade: ${this.nacionalidade}`);

        console.log (`Milena está acordada? ${this.acordada ? "Sim" : "Não"}`);
    }
};

pessoa.mostrarInfo();
pessoa.andando();
pessoa.correndo();
pessoa.exercitando();
pessoa.falando();
pessoa.ouvindo();
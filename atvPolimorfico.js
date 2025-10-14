/**
 * HERANÇA
 * SUPERCLASS(CLASSE PAI)
 */

class Veiculo{
    constructor(marca, modelo, ano,){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.capacidade_base = 5;
        this.capacidade_em_pe = this.capacidade_base;
    }

    /* métodos da classe */
    estilo(){
        console.log(`Este veículo é fabricado pela seguinte marca: ${this.marca}`);
    }

    estetica(){
        console.log(`Este veículo é do modelo: ${this.modelo}`);
    }

    fabricacao(){
        console.log(`Este veículo foi fabricado no ano de: ${this.ano}`);
    }

    calcular_capacidade_total(){
        let capacidade_total = this.capacidade_base; // Exemplo de cálculo
        console.log(`A capacidade total do veículo é de: ${capacidade_total}`);
    }
}

// classe que herda de Veículo
class Carro extends Veiculo{
    constructor(marca, modelo, ano){
        super(marca, modelo, ano); // chamando o construtor da classe pai
        }


    // métodos compartilhados
    estilo(){
        console.log(`Este veículo é fabricado pela seguinte marca: ${this.marca}`);
    }

    estetica(){
        console.log(`Este veículo é do modelo: ${this.modelo}`);
    }

    fabricacao(){
        console.log(`Este veículo foi fabricado no ano de: ${this.ano}`);
    }

    calcular_capacidade_total(){
        let capacidade_total = this.capacidade_base; // Exemplo de cálculo
        console.log(`A capacidade total do veículo é de: ${capacidade_total} lugares.
            //`);
    }
}



// criando um carro
const meuCarro = new Carro("Toyota", "Corolla", 2020);
meuCarro.estilo(); // Este veículo é fabricado pela seguinte marca: Toyota
meuCarro.estetica(); // Este veículo é do modelo: Corolla
meuCarro.fabricacao(); // Este veículo foi fabricado no ano de: 2020
meuCarro.calcular_capacidade_total(); // A capacidade total do veículo é: 5 lugares.




// classe que herda de Veículo
class Onibus extends Veiculo{
    constructor(marca, modelo, ano){
        super(marca, modelo, ano); // chamando o construtor da classe pai
    }

    estilo(){
        console.log(`Este veículo é fabricado pela seguinte marca: ${this.marca}`);
    }

    estetica(){
        console.log(`Este veículo é do modelo: ${this.modelo}`);
    }

    fabricacao(){
        console.log(`Este veículo foi fabricado no ano de: ${this.ano}`);
    }

    calcular_capacidade_total(){
        let capacidade_total = this.capacidade_base + 45; // Exemplo de cálculo
        console.log(`A capacidade total do veículo é de: ${capacidade_total} pessoas.`);
    }

    calcular_capacidade_em_pe(){
        let capacidade_em_pe = this.capacidade_base + 10; // Exemplo de cálculo
        console.log(`A capacidade total de pessoas em pé no veículo é de: ${capacidade_em_pe} pessoas.
            //`);
    }
}
    

// criando um Ônibus
const meuOnibus = new Onibus("Mercedes", "Carris", 2010);
meuOnibus.estilo(); // Este veículo é fabricado pela seguinte marca: Mercedes
meuOnibus.estetica(); // Este veículo é do modelo: Carris
meuOnibus.fabricacao(); // Este veículo foi fabricado no ano de: 2010
meuOnibus.calcular_capacidade_total(); // A capacidade total do veículo é: 50 pessoas.
meuOnibus.calcular_capacidade_em_pe(); // A capacidade total do veículo é de: 15 pessoas.


// classe que herda de Veículo
class Moto extends Veiculo{
    constructor(marca, modelo, ano){
        super(marca, modelo, ano); // chamando o construtor da classe pai
    }

    estilo(){
        console.log(`Este veículo é fabricado pela seguinte marca: ${this.marca}`);
    }

    estetica(){
        console.log(`Este veículo é do modelo: ${this.modelo}`);
    }

    fabricacao(){
        console.log(`Este veículo foi fabricado no ano de: ${this.ano}`);
    }

    calcular_capacidade_total(){
        let capacidade_total = this.capacidade_base - 3; // Exemplo de cálculo
        console.log(`A capacidade total do veículo é: ${capacidade_total} lugares.`);
    }
}

// criando uma Moto
const minhaMoto = new Moto("Kawasaki", "Ninja", 2018);
minhaMoto.estilo(); // Este veículo é fabricado pela seguinte marca: Kawasaki
minhaMoto.estetica(); // Este veículo é do modelo: Ninja
minhaMoto.fabricacao(); // Este veículo foi fabricado no ano de: 2018
minhaMoto.calcular_capacidade_total(); // A capacidade total do veículo é: 2 lugares.
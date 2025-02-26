class Cliente {
    // em um vídeo que assisti, vi que é bom se criar o hábito de usar o construtor na criação de objetos para evitar repetições no código
    constructor(nome, idade, telefone, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }

    getInfoFormatada() {
        return `--------------------\nInformações do Cliente\n${this.nome}\n--------------------\n\nTelefone:\nDDD: ${this.telefone.ddd}\nNúmero: ${this.telefone.numero}\n\n--------------------\nEndereço:\nRua: ${this.endereco.rua}\nNúmero: ${this.endereco.numero}\nCidade: ${this.endereco.cidade}\nEstado: ${this.endereco.estado}\n--------------------`;
    }
}

//classes vão armazenar as informações de cada cliente

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }
}

let clientes = [
    new Cliente("Carlos Conrado Heinz", 30, new Telefone("11", "9999346999"), new Endereco("Av. Paulista", "987", "São Paulo", "SP")),
    new Cliente("Ana Luiza Lima", 25, new Telefone("62", "9834543588"), new Endereco("Rua das Flores", "123", "Rio de Janeiro", "RJ")),
    new Cliente("Beatriz Vianna", 22, new Telefone("45", "97643634637"), new Endereco("Rua Central", "456", "Belo Horizonte", "MG"))
];

//usando o sort e localcompare para ordenar os clientes

clientes.sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(cliente => console.log(cliente.getInfoFormatada()));



//alterne de 0 a 2 para conseguir o nome do cliente que desejar em maiusculo ou minusculo
console.log(clientes[2].getNomeMaiusculo()); 
console.log(clientes[0].getNomeMinusculo()); 
        
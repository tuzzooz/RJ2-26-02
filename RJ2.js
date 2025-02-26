class Cliente {
    constructor(nome, idade, telefone, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    getInfoFormatada() {
        return `--------------------\nInformações do Cliente\n${this.nome}\n--------------------\n\nTelefone:\nDDD: ${this.telefone.ddd}\nNúmero: ${this.telefone.numero}\n\n--------------------\nEndereço:\nRua: ${this.endereco.rua}\nNúmero: ${this.endereco.numero}\nCidade: ${this.endereco.cidade}\nEstado: ${this.endereco.estado}\n--------------------`;
    }
}

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
    new Cliente("Ana Luiza Lima", 25, new Telefone("21", "9834543588"), new Endereco("Rua das Flores", "123", "Rio de Janeiro", "RJ")),
    new Cliente("Beatriz Itoshi", 22, new Telefone("31", "97643634637"), new Endereco("Rua Central", "456", "Belo Horizonte", "MG"))
];

clientes.sort((a, b) => a.nome.localeCompare(b.nome))
        .forEach(cliente => console.log(cliente.getInfoFormatada()));

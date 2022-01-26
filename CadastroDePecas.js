let PesoDaPeca = 125
const PesoMinimo = 100

if (PesoDaPeca > PesoMinimo) {                                                      // Verifica Se a Peça Possui o Peso Mínimo para ser Cadastrada.
    var Peso = true
    console.log("Peso da Peca Valido");
} else {
    console.log("Peso da Peca Invalido");
}

const CapacidadeDaCaixa = 10
let QuantidadeDePecas = 9

if (QuantidadeDePecas < CapacidadeDaCaixa) {                                        // Verifica se a Caixa Possui Capacidade para Armazenar a Peça.
    console.log("Ainda Ha Espaco na Caixa");
    QuantidadeDePecas++
    var Capacidade = true
} else {
    console.log("Capacidade Maxima da Caixa Excedida")
}

let NomeDaPeca = 'Chave Allen';

if (NomeDaPeca.length >= 3) {                                                       // Verifica se o Nome da Peça Atinge os Requisitos de Caracteres
    console.log("Nome da Peca Valido");
    var Nome = true
} else {
    console.log("O Nome da Peca Deve Conter 3 ou mais Caracteres");
}

if (Peso == true && Capacidade == true && Nome == true) {                            // Faz uma Verificação Final para Conferir se Todos os Requisitos foram Atingidos
    console.log ("Cadastro da Peca Concluido com Sucesso.");
} else {
    console.log ("O Cadastro Nao Pode ser Concluido, Verifique os Dados Inseridos e Tente Novamente.");
}

// data 
// Atributos: dia, mes e ano
// metodo: exibir -> "dia/mes/ano"

const data = {
    dia: 04,
    mes: 09,
    ano: 1998,
    exibirDataNc: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(data.exibirDataNc());
const d1 = {
    dia: 04,
    mes: 09,
    ano: 1998,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 16,
    mes: 05,
    ano: 1997,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia: 17,
    mes: 07,
    ano: 1997,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
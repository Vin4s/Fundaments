function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function () {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }
};

const d1 = criarData(4, 9, 1998);
const d2 = criarData(16, 5, 1997);
const d3 = criarData(17,07, 1997);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
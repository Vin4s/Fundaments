const futuro = Date.now() + 1;
let quantidade = 0;

while(Date.now() < futuro) {
    quantidade++;
}


console.log('Qtde: ' + quantidade);
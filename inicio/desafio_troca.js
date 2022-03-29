let a = 7;
let b = 94;


console.log("valor de a= "+ a);
console.log("valor de b= "+ b);
// depois da troca... a = 94 e b = 7
{ //console.log ("agora a vale b e b vale a")
    let temp = a;
    a = b;
    b = temp;
}
console.log("Trocando Valores")
console.log("valor de a= "+ a);
console.log("valor de b= "+ b);
let saldoConta = 6767;
let precoIngresso = 910;

console.log("Tentando comprar o ingresso...")

if(saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso;
    console.log("Compra realizada, bom show!");
    console.log("Seu troco é R$: " + troco);
}else{
    console.log("Saldo Insuficiente. Faltam R$: " + (precoIngresso - saldoConta))
}

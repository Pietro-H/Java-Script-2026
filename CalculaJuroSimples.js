function CalculaJuroSimples(capital, taxa, tempo){
    let juros = capital * (taxa/100) * tempo;
    
    let montante = capital + juros;

    return montante;
}

let conta01 = CalculaJuroSimples(5000, 4, 6);
console.log("O montante é R$: " + conta01);




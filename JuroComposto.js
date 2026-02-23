function JuroComposto(capital, taxaMensal, meses) {
  
  let montante = capital * (1 + (taxaMensal / 100)) ** meses;
  
  return montante
}

let conta01 = JuroComposto(1000,2,4);
console.log("Montante final R$: " + conta01.toFixed(2));

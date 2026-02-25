function calculaIMC(peso, altura){
    let imc = peso / (altura ** 2);

    console.log("seu IMC é, " + imc.toFixed (2));

    if (imc <18.5){
        console.log("clasificação: Abaixo do peso");
    }
    else if (imc >= 18.5 && imc <= 24.9){
        console.log("Classificação: Peso normal");
    }
    else if (imc >= 25 && imc <= 29.9){
        console.log("Classificação: Sobrepeso");
    }
    else {
        console.log("Classificação: Obesidade");
    }

}

calculaIMC(100, 1.79)
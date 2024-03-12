function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculoscpf(rndInt) {
    let conta = 0;
    let contador = 10;

    for (let i = 0; i < rndInt.length - 2; i++) {
        conta += contador * parseInt(rndInt[i]);
        contador--;
    }

    let digito1 = 11 - (conta % 11);
    if (digito1 > 9) {
        digito1 = 0;
    }

    contador = 11;
    conta = 0;

    for (let i = 0; i < rndInt.length - 1; i++) {
        conta += contador * parseInt(rndInt[i]);
        contador--;
    }

    let digito2 = 11 - (conta % 11);
    if (digito2 > 9) {
        digito2 = 0;
    }

    return [digito1, digito2];
}

function checar() {
    let rndInt;
    let cpfValido = false;

    while (!cpfValido) {
        rndInt = randomIntFromInterval(10000000000, 99999999999);
        rndInt = String(rndInt).padStart(11, '0');
        const [digito1, digito2] = calculoscpf(rndInt);

        if (parseInt(rndInt[9]) === digito1 && parseInt(rndInt[10]) === digito2) {
            cpfValido = true;
            console.log('Seu CPF é válido: ' + rndInt);
        } else {
            console.log('Seu CPF é inválido: ' + rndInt);
        }
    }
}

checar();

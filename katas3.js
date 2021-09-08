const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];




function showResults(tit, parametro) {
    const corpo = document.querySelector('body');
    const menu = document.createElement('div');
    const adc = document.createElement('p');
    const titulo = document.createElement("h3");

    titulo.innerText = tit;
    menu.appendChild(titulo);

    corpo.appendChild(menu);
    adc.innerText = "(" + parametro + ")";
    menu.appendChild(adc);
}


function kata1() {
    let guardar = [];
    for (let c = 1; c <= 25; c++) {

        guardar.push(" " + c + " ");
    }
    return showResults(" Numeros de 1 a 25", guardar)
}

kata1();

function kata2() {
    let guardar = [];
    for (let c = 25; c >= 1; c--) {

        guardar.push(" " + c + " ");
    }
    return showResults(" Numeros de 1 a 25", guardar)
}

kata2();

function kata3() {

    let guarda = [];
    for (let c = -1; c >= -25; c--) {

        guarda.push(" " + c + " ")
    }
    return showResults("Numeros -1 a -25", guarda)
}

kata3();

function kata4() {
    let guardar = [];
    for (let c = -25; c <= -1; c++) {

        guardar.push(" " + c + " ")
    }
    return showResults("Numeros -25 a -1 ", guardar)
}
kata4();

function kata5() {
    let guardar = [];

    for (let c = 25; c >= -25; c--) {
        if (c % 2 == 1 || c % -2 == -1) {
            guardar.push(" " + c + " ")
        }
    }
    return showResults("Numeros impares de 25 a -25", guardar)
}
kata5();

function kata6() {
    let guardar = [];

    for (let c = 3; c <= 100; c++) {
        if (c % 3 == 0) {
            guardar.push(" " + c + " ")
        }
    }
    return showResults("Numeros Divisiveis por 3. de 3 ate o 100", guardar)
}

kata6();

function kata7() {
    let guardar = [];

    for (let c = 7; c <= 100; c++) {
        if (c % 7 == 0) {
            guardar.push(" " + c + " ");
        }
    }
    return showResults("Numeros divisiveis por 7. de 7 ate o 100", guardar)
}
kata7();
function kata8() {
    let guardar = []

    for (let c = 100; c >= 1; c--) {
        if (c % 3 == 0 || c % 7 == 0) {
            guardar.push(" " + c + " ")
        }
    }
    return showResults("Numeros divisiveis por 3 e 7 apartir de 100", guardar)
}
kata8();

function kata9() {
    let guardar = [];

    for (let c = 1; c <= 100; c++) {
        if (c % 2 == 1 && c % 5 === 0) {
            guardar.push(" " + c + " ")
        }
    }
    return showResults("Numeros impares e divisiveis por 5 ", guardar)
}
kata9();

function kata10() {

    let opa = [];
    for (let c = 0; c <= sampleArray.length; c++) {

        opa.push(sampleArray[c])
    }

    return showResults("Os 20 elementos do array", opa)


}
kata10();

function kata11() {

    let opa = [];
    for (let c = 0; c <= sampleArray.length; c++) {
        if (sampleArray[c] % 2 == 0) {
            opa.push(" " + sampleArray[c] + " ")
        }
    }
    return showResults("Numeros pares do array ", opa)
}
kata11();

function kata12() {

    let opa = [];
    for (let c = 0; c <= sampleArray.length; c++) {
        if (sampleArray[c] % 2 == 1) {

            opa.push(" " + sampleArray[c] + " ")
        }
    }
    return showResults("Numeros impares do array", opa)
}
kata12();

function kata13() {

    let opa = [];
    for (let c = 0; c <= sampleArray.length; c++) {
        if (sampleArray[c] % 8 == 0) {

            opa.push(" " + sampleArray[c] + " ")
        }
    }
    return showResults("Numeros divisiveis por 8 no array", opa)
}
kata13();

function kata14() {

    let armazenar = []
    for (let c = 0; c <= sampleArray[c]; c++) {

        let quadrado = sampleArray[c] * sampleArray[c];
        armazenar.push(" " + quadrado + " ")
    }

    return showResults("Numero quadrado do array", armazenar)
}
kata14();

function kata15() {

    let soma = 0;
    for (let c = 0; c <= 20; c++) {
        soma += c;
    }
    return showResults("Soma dos Numeros de 1 a 20", soma)
}
kata15();

function kata16() {

    let soma = [];
    for (let c = 0; c <= sampleArray.length; c++) {

        soma += c;
    }
    return showResults("Soma so Array", soma)
}
kata16();


function kata17() {

    let menos = sampleArray[0];
    for (let c = 0; c < sampleArray.length; c++) {
        if (sampleArray[c] < menos) {
            menos = sampleArray[c];

        }
    }
    return showResults("Menor Numero do Array", menos);
}

kata17();

function kata18() {
    
    let mais = sampleArray[0];
    for (let c = 0; c < sampleArray.length; c++) {
        if (sampleArray[c] > mais) {
            mais = sampleArray[c]
        }
    }

    return showResults("Maior Numnero do Array", mais)
}

kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

var prompt = require('prompt-sync')();

const lista = [];

function obterEntrada() {
    return prompt("Insira o texto, ou SAIR para encerrar: ");
}

function exibirListaOrdenada(lista) {
    lista.sort();
    console.log('Propriedades inseridas:');
    lista.forEach(item => {
        console.log(item);
    });
}

function main() {
    while (true) {
        const entrada = obterEntrada().toLowerCase();
        if (entrada === 'sair') {
            exibirListaOrdenada(lista);
            break;
        } else {
            lista.push(entrada);
        }
    }
}

main();

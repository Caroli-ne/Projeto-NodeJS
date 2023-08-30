var prompt = require('prompt-sync')();

const lista = [];

function listaOrdenada () {
    var entrada = prompt ("Insira o texto, ou SAIR para encerrar: ");
    if (entrada.toUpperCase()  === 'SAIR') {
        lista.sort()
        console.log('Propriedades inseridas:')
        lista.forEach(item => {
            console.log (item)
        })
    }else{
        listaOrdenada()
    }
}

listaOrdenada()
"use strict"

var hora = 0;
var min = 0;
var seg = 0;

var tempo = 1000; // Valor de 1 segundo em milésimos
var cronometro;

function comecar() {

    cronometro = setInterval(timer, tempo);
}

function parar() {
    clearInterval(cronometro);
}

function reiniciar() {
    clearInterval(cronometro);
    hora = 0;
    min = 0;
    seg = 0;

    document.getElementById('contador').innerText = '00:00:00'
}

function timer() {

    seg++;

    if(seg == 60) {
        seg = 0;
        min++;

        if (min == 60) {
            min = 0;
            hora++;
        }

    }

    var format = (hora < 10 ? '0' + hora : hora) + ':' + (min < 10 ? '0' + min: min) + ':' + (seg < 10 ? '0' + seg : seg);

    document.getElementById('contador').innerText = format;

}
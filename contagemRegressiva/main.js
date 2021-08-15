 'use strict';

 const formatarDigito = (digito) => `0${digito}`.slice(-2);

 const atualizarTempo = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const quantidadeSegundos = tempo % 60;
    const quantidadeMinutos = Math.floor((tempo % (60 * 60)) / 
    60);
    const quantidadeHoras = Math.floor((tempo % (60 * 60 *24)) / (60 * 60));
    const quantidadeDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(quantidadeSegundos);
    minutos.textContent = formatarDigito(quantidadeMinutos);
    horas.textContent = formatarDigito(quantidadeHoras);
    dias.textContent = formatarDigito(quantidadeDias);
 }

 const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);

     const contar = () => {
        if (tempo == 0) {
            pararContagem();
        }
        atualizarTempo (tempo);
         tempo--;
     }
     const id = setInterval(contar, 1000);
 }

 const tempoRestante = () => {
     const dataEvento = new Date ('2021-09-18 12:25:50');
     const dataHoje = Date.now();
     return Math.floor((dataEvento - dataHoje) / 1000);
 }

 contagemRegressiva(tempoRestante());
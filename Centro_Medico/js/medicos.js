let menu = document.querySelector('#menu-botao');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const servicos = document.getElementById('servicos');
const agenda1 = document.getElementById('agenda1');
const agenda2 = document.getElementById('agenda2');
const agenda3 = document.getElementById('agenda3');
const agenda4 = document.getElementById('agenda4');
const aparecer = document.getElementById('aparecer');
const confirmar = document.getElementById('confirmar');
const dia = document.getElementById('dia');

let horario1 = document.getElementById('horario1');
let horario2 = document.getElementById('horario2');
let horario3 = document.getElementById('horario3');
let horario4 = document.getElementById('horario4');
let horario5 = document.getElementById('horario5');
let horario6 = document.getElementById('horario6');
let horario7 = document.getElementById('horario7');
let horario8 = document.getElementById('horario8');
let horario9 = document.getElementById('horario9');
let horario10 = document.getElementById('horario10');
let horario11 = document.getElementById('horario11');
let horario12 = document.getElementById('horario12');
let horario13 = document.getElementById('horario13');
let horario14 = document.getElementById('horario14');
let horario15 = document.getElementById('horario15');
let horario16 = document.getElementById('horario16');
let horario17 = document.getElementById('horario17');
let horario18 = document.getElementById('horario18');
let horario19 = document.getElementById('horario19');
let horario20 = document.getElementById('horario20');
let horario21 = document.getElementById('horario21');
let horario22 = document.getElementById('horario22');
let horario23 = document.getElementById('horario23');
let horario24 = document.getElementById('horario24');
let horario25 = document.getElementById('horario25');
let horario26 = document.getElementById('horario26');
let horario27 = document.getElementById('horario27');
let horario28 = document.getElementById('horario28');
let horario29 = document.getElementById('horario29');
let horario30 = document.getElementById('horario30');
let horario31 = document.getElementById('horario31')

const agenConsulta1 = document.getElementById('agenConsulta1')




function mostraInfo(elemento) {
    if (elemento.value == 1) {
        agenda3.style = 'display:none;'

        agenda1.style = 'display:block;'
        agenda2.style = 'display:block;'

    } else if (elemento.value == 2) {

        agenda1.style = 'display:none;'
        agenda2.style = 'display:none;'

        agenda3.style = 'display:block;'


    } else if (elemento.value == 3) {

    }

}

function horario1On() {
    aparecer.style = 'width: 99%; height: 100%; margin-top: 8rem; font-size: 3rem; background: #FFF;'
    aparecer.innerHTML =

        `
        <section class="servicos" id="servicos" style="">
            <div class="conteudo">
                <h1 class="cabecalho" style="margin-top: 0rem;"> Confirmar <span>Sua Consulta</span> </h1>
                <p style="text-align: center; font-size: 2rem;"> 

                    Você está agendando uma consulta de
                    
                    <span id="tipo" style="color:var(--green)"> </span> 

                    com 

                <span id="tipo_nome" style="color:var(--green)"> </span> 

                    no dia 

                <span id="tipo_dia" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_mes" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_ano" style="color:var(--green)"> </span> 
                
                    as 
                    
                </span> <span id="tipo_hora" style="color:var(--green)"> </span>:

                </p>

                <p style="text-align: center; font-size: 3rem; "> <a href="index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

    horario1.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'



    horario1.id = 'selecionado';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';


}

function horario2On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'selecionado';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario3On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'selecionado';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario4On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'selecionado';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario5On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'selecionado';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario6On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'selecionado';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario7On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'selecionado';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario8On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'selecionado';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario9On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'selecionado';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario10On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'selecionado';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario11On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'selecionado';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario12On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'selecionado';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario13On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'selecionado';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario14On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'selecionado';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario15On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'selecionado';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario16On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'selecionado';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario17On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'selecionado';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario18On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'selecionado';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario19On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'selecionado';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario20On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'selecionado';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario21On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'selecionado';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario22On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'selecionado';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario23On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'selecionado';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario24On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'selecionado';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario25On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'selecionado';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario26On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'selecionado';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario27On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'selecionado';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario28On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'selecionado';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario29On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'selecionado';
    horario30.id = 'horario30';
    horario31.id = 'horario31';

}

function horario30On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: var(--green); color: #fff; cursor: pointer;'
    horario31.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'selecionado';
    horario31.id = 'horario31';

}

function horario31On() {

    horario1.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario2.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario3.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario4.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario5.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario6.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario7.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario8.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario9.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario10.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario11.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario12.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario13.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario14.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario15.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario16.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario17.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario18.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario19.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario20.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario21.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario22.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario23.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario24.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario25.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario26.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario27.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario28.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario29.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario30.style = 'background-color: #fff; color: black; cursor: pointer; border: 1px solid var(--green);'
    horario31.style = 'background-color: var(--green); color: #fff; cursor: pointer;'

    horario1.id = 'horario1';
    horario2.id = 'horario2';
    horario3.id = 'horario3';
    horario4.id = 'horario4';
    horario5.id = 'horario5';
    horario6.id = 'horario6';
    horario7.id = 'horario7';
    horario8.id = 'horario8';
    horario9.id = 'horario9';
    horario10.id = 'horario10';
    horario11.id = 'horario11';
    horario12.id = 'horario12';
    horario13.id = 'horario13';
    horario14.id = 'horario14';
    horario15.id = 'horario15';
    horario16.id = 'horario16';
    horario17.id = 'horario17';
    horario18.id = 'horario18';
    horario19.id = 'horario19';
    horario20.id = 'horario20';
    horario21.id = 'horario21';
    horario22.id = 'horario22';
    horario23.id = 'horario23';
    horario24.id = 'horario24';
    horario25.id = 'horario25';
    horario26.id = 'horario26';
    horario27.id = 'horario27';
    horario28.id = 'horario28';
    horario29.id = 'horario29';
    horario30.id = 'horario30';
    horario31.id = 'selecionado';

}

/* Agendar Consulta Com Médico 1 Ortopedia */
function agenConsulta1On() {

    if ((horario1.id == 'selecionado' || horario2.id == 'selecionado' || horario3.id == 'selecionado' || horario4.id == 'selecionado' || horario5.id == 'selecionado' || horario6.id == 'selecionado' || horario7.id == 'selecionado' || horario8.id == 'selecionado' || horario9.id == 'selecionado' || horario10.id == 'selecionado' || horario11.id == 'selecionado' || horario12.id == 'selecionado' || horario13.id == 'selecionado' || horario14.id == 'selecionado' || horario15.id == 'selecionado' || horario16.id == 'selecionado' || horario17.id == 'selecionado' || horario18.id == 'selecionado' || horario19.id == 'selecionado' || horario20.id == 'selecionado' || horario21.id == 'selecionado' || horario22.id == 'selecionado' || horario23.id == 'selecionado' || horario24.id == 'selecionado' || horario25.id == 'selecionado' || horario26.id == 'selecionado' || horario27.id == 'selecionado' || horario28.id == 'selecionado' || horario29.id == 'selecionado' || horario30.id == 'selecionado' || horario31.id == 'selecionado') && (conv.value != 'Selecione o seu Convênio')) {

        aparecer.style = 'width: 99%; height: 100%; margin-top: 8rem; font-size: 3rem; background: #FFF;'
        aparecer.innerHTML =

            `
        <section class="servicos" id="servicos">
            <div class="conteudo" style="margin-bottom: 21rem;">
                <h1 class="cabecalho" style="margin-top: 0rem;"> Confirmar <span>Sua Consulta</span> </h1>
                <p style="text-align: center; font-size: 2.5rem;"> 

                    Você está agendando uma consulta de
                    
                    <span id="tipo" style="color:var(--green)"> </span> 

                    com 

                <span id="tipo_nome" style="color:var(--green)"> </span> 

                    no dia 

                <span id="tipo_dia" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_mes" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_ano" style="color:var(--green)"> </span> 
                
                    as 
                    
                </span> <span id="tipo_hora" style="color:var(--green)"> </span>

                    utilizando o seu convênio 

                </span> <span id="tipo_conv" style="color:var(--green)"> </span>:

                </p>

                <p style="text-align: center; font-size: 3rem; "> <a href="consultas.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style = 'display:none;'
        agenda1.style = 'display:none;'
        agenda2.style = 'display:none;'
        agenda3.style = 'display:none;'

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia");
        let select_mes = document.getElementById("mes");
        let select_ano = document.getElementById("ano");
        let select_conv = document.getElementById("conv");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome1.innerHTML;
        tipo_hora.innerHTML = selecionado.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}



/*Medico 2 Ortopedia */

function consultaOnm2() {
    aparecer.style = 'width: 99%; height: 100%; margin-top: 8rem; font-size: 3rem; background: #FFF;'
    aparecer.innerHTML =

        `
        <section class="servicos" id="servicos" style="">
            <div class="conteudo">
                <h1 class="cabecalho" style="margin-top: 0rem;"> Confirmar <span>Sua Consulta</span> </h1>
                <p style="text-align: center; font-size: 2rem;"> 

                    Você está agendando uma consulta de
                    
                    <span id="tipo" style="color:var(--green)"> </span> 

                    com 

                <span id="tipo_nome" style="color:var(--green)"> </span> 

                    no dia 

                <span id="tipo_dia" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_mes" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_ano" style="color:var(--green)"> </span> 
                
                    as 
                    
                </span> <span id="tipo_hora" style="color:var(--green)"> </span>:

                </p>

                <p style="text-align: center; font-size: 3rem; "> <a href="index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

    servicos.style = 'display:none;'
    agenda1.style = 'display:none;'
    agenda2.style = 'display:none;'
    agenda3.style = 'display:none;'
    agenda4.style = 'display:none;'

    const tipo = document.getElementById('tipo');
    const tipo_nome = document.getElementById('tipo_nome');
    const tipo_hora = document.getElementById('tipo_hora');
    const tipo_dia = document.getElementById('tipo_dia');
    const tipo_mes = document.getElementById('tipo_mes');
    const tipo_ano = document.getElementById('tipo_ano');

    let select_dia = document.getElementById("dia");
    let select_mes = document.getElementById("mes");
    let select_ano = document.getElementById("ano");
    let select_tipo_consulta = document.getElementById("consulta_tipo");

    tipo_nome.innerHTML = nome2.innerHTML;
    tipo_hora.innerHTML = consultam2.innerHTML;
    tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
    tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
    tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
    tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML

}

function consultaOn2m2() {
    aparecer.style = 'width: 99%; height: 100%; margin-top: 8rem; font-size: 3rem; background: #FFF;'
    aparecer.innerHTML =

        `
        <section class="servicos" id="servicos" style="">
            <div class="conteudo">
                <h1 class="cabecalho" style="margin-top: 0rem;"> Confirmar <span>Sua Consulta</span> </h1>
                <p style="text-align: center; font-size: 2rem;"> 

                    Você está agendando uma consulta de
                    
                    <span id="tipo" style="color:var(--green)"> </span> 

                    com 

                <span id="tipo_nome" style="color:var(--green)"> </span> 

                    no dia 

                <span id="tipo_dia" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_mes" style="color:var(--green)"> </span> 

                    de 
                    
                <span id="tipo_ano" style="color:var(--green)"> </span> 
                
                    as 
                    
                </span> <span id="tipo_hora" style="color:var(--green)"> </span>:

                </p>

                <p style="text-align: center; font-size: 3rem; "> <a href="index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

    servicos.style = 'display:none;'
    agenda1.style = 'display:none;'
    agenda2.style = 'display:none;'
    agenda3.style = 'display:none;'
    agenda4.style = 'display:none;'

    const tipo = document.getElementById('tipo');
    const tipo_nome = document.getElementById('tipo_nome');
    const tipo_hora = document.getElementById('tipo_hora');
    const tipo_dia = document.getElementById('tipo_dia');
    const tipo_mes = document.getElementById('tipo_mes');
    const tipo_ano = document.getElementById('tipo_ano');

    var select_dia = document.getElementById("dia");
    var select_mes = document.getElementById("mes");
    var select_ano = document.getElementById("ano");
    var select_tipo_consulta = document.getElementById("consulta_tipo");

    tipo_nome.innerHTML = nome2.innerHTML;
    tipo_hora.innerHTML = consulta2m2.innerHTML;
    tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
    tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
    tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
    tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML

}

horario1.addEventListener('click', horario1On);
horario2.addEventListener('click', horario2On);
horario3.addEventListener('click', horario3On);
horario4.addEventListener('click', horario4On);
horario5.addEventListener('click', horario5On);
horario6.addEventListener('click', horario6On);
horario7.addEventListener('click', horario7On);
horario8.addEventListener('click', horario8On);
horario9.addEventListener('click', horario9On);
horario10.addEventListener('click', horario10On);
horario11.addEventListener('click', horario11On);
horario12.addEventListener('click', horario12On);
horario13.addEventListener('click', horario13On);
horario14.addEventListener('click', horario14On);
horario15.addEventListener('click', horario15On);
horario16.addEventListener('click', horario16On);
horario17.addEventListener('click', horario17On);
horario18.addEventListener('click', horario18On);
horario19.addEventListener('click', horario19On);
horario20.addEventListener('click', horario20On);
horario21.addEventListener('click', horario21On);
horario22.addEventListener('click', horario22On);
horario23.addEventListener('click', horario23On);
horario24.addEventListener('click', horario24On);
horario25.addEventListener('click', horario25On);
horario26.addEventListener('click', horario26On);
horario27.addEventListener('click', horario27On);
horario28.addEventListener('click', horario28On);
horario29.addEventListener('click', horario29On);
horario30.addEventListener('click', horario30On);
horario31.addEventListener('click', horario31On);

agenConsulta1.addEventListener('click', agenConsulta1On);


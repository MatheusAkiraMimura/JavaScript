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
const aparecer = document.getElementById('aparecer');
const confirmar = document.getElementById('confirmar');


const agenda1 = document.getElementById('agenda1');
const agenda2 = document.getElementById('agenda2');
const agenda3 = document.getElementById('agenda3');
const agenda4 = document.getElementById('agenda4');
const agenda5 = document.getElementById('agenda5');
const agenda6 = document.getElementById('agenda6');

const agendaDados1 = document.getElementById('agenda_dados1');
const agendaDados2 = document.getElementById('agenda_dados2');
const agendaDados3 = document.getElementById('agenda_dados3');
const agendaDados4 = document.getElementById('agenda_dados4');
const agendaDados5 = document.getElementById('agenda_dados5');
const agendaDados6 = document.getElementById('agenda_dados6');

const mostrarAgendaDados1 = document.getElementById('mostrar_agenda_dados1');
const mostrarAgendaDados2 = document.getElementById('mostrar_agenda_dados2');
const mostrarAgendaDados3 = document.getElementById('mostrar_agenda_dados3');
const mostrarAgendaDados4 = document.getElementById('mostrar_agenda_dados4');
const mostrarAgendaDados5 = document.getElementById('mostrar_agenda_dados5');
const mostrarAgendaDados6 = document.getElementById('mostrar_agenda_dados6');

const agenConsulta1 = document.getElementById('agenConsulta1')
const agenConsulta2 = document.getElementById('agenConsulta2')
const agenConsulta3 = document.getElementById('agenConsulta3')
const agenConsulta4 = document.getElementById('agenConsulta4')
const agenConsulta5 = document.getElementById('agenConsulta5')
const agenConsulta6 = document.getElementById('agenConsulta6')


// Pegar todas as divs com a class="horario" dentro do container
var divs = document.getElementsByClassName("horario");

// Percorre as divs e adiciona a classe selecionado na div atual / clicada
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    var selecionado = document.getElementsByClassName("selecionado");
    var seleciona = document.getElementById("seleciona")

    // Se não houver div selecionada
    if (selecionado.length > 0) {
      selecionado[0].className = selecionado[0].className.replace(" selecionado", "");
      seleciona.id = "vazio"
      seleciona.style = ""
    }

    // Adiciona a classe selecionado na div atual / clicada
    this.className += " selecionado";

    this.id = "seleciona";

    var seleciona = document.getElementById("seleciona")
    seleciona.style = "background:var(--green); color: #fff;border-radius: .5rem;border: 2px solid black;text-align: center;"
  
  });
}


function mostraInfo(elemento) {
    if (elemento.value == 1) {
        agenda2.style = 'display:none;'
        agenda3.style = 'display:none;'

        agenda1.style = 'display:block;'

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        window.scrollBy(0, 300)

    } else if (elemento.value == 2) {

        agenda1.style = 'display:none;'
        agenda3.style = 'display:none;'

        agenda2.style = 'display:block;'

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        window.scrollBy(0, 300)


    } else if (elemento.value == 3) {
        agenda1.style = 'display:none;'
        agenda2.style = 'display:none;'

        agenda3.style = 'display:block;'

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        window.scrollBy(0, 300)
    }

}

/* Mostrar agenda Médico 1 Ortopedia */
function mostrarAgendaDados1On () {
    agendaDados2.style ='display:none;'

    agendaDados1.style ='display:block;'

    mostrarAgendaDados2.style = 'background: #fff;'

    mostrarAgendaDados1.style = 'background: rgb(168, 255, 233);'

    window.scrollBy(0, 550)

}

/* Mostrar agenda Médico 2 Ortopedia */
function mostrarAgendaDados2On () {
    agendaDados1.style ='display:none;'

    agendaDados2.style ='display:block;'

    mostrarAgendaDados1.style = 'background: #fff;'

    mostrarAgendaDados2.style = 'background: rgb(168, 255, 233);'

    window.scrollBy(0, 400) 

}

/* Mostrar agenda Médico 1 Pilates */
function mostrarAgendaDados3On () {
    agendaDados4.style ='display:none;'

    agendaDados3.style ='display:block;'

    mostrarAgendaDados4.style = 'background: #fff;'

    mostrarAgendaDados3.style = 'background: rgb(168, 255, 233);'

    window.scrollBy(0, 550)

}

/* Mostrar agenda Médico 2 Pilates */
function mostrarAgendaDados4On () {
    agendaDados3.style ='display:none;'

    agendaDados4.style ='display:block;'

    mostrarAgendaDados3.style = 'background: #fff;'

    mostrarAgendaDados4.style = 'background: rgb(168, 255, 233);'

    window.scrollBy(0, 400) 

}

/* Mostrar agenda Médico 1 RPG */
function mostrarAgendaDados5On () {
    agendaDados6.style ='display:none;'

    agendaDados5.style ='display:block;'

    mostrarAgendaDados6.style = 'background: #fff;'

    mostrarAgendaDados5.style = 'background: rgb(168, 255, 233);'

    window.scrollBy(0, 550)

}

/* Mostrar agenda Médico 2 RPG */
function mostrarAgendaDados6On () {
    agendaDados5.style ='display:none;'

    agendaDados6.style ='display:block;'

    mostrarAgendaDados5.style = 'background: #fff;'

    mostrarAgendaDados6.style = 'background: rgb(168, 255, 233);'

    window.scrollBy(0, 400) 

}

/* Agendar Consulta Com Médico 1 Ortopedia */
function agenConsulta1On() {

    if ((seleciona.id == 'seleciona') && (conv1.value != 'Selecione o seu Convênio')) {

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

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'
        

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia1");
        let select_mes = document.getElementById("mes1");
        let select_ano = document.getElementById("ano1");
        let select_conv = document.getElementById("conv1");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome1.innerHTML;
        tipo_hora.innerHTML = seleciona.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}

/* Agendar Consulta Com Médico 2 Ortopedia */
function agenConsulta2On() {

    if ((seleciona.id == 'seleciona') && (conv2.value != 'Selecione o seu Convênio')) {

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

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia2");
        let select_mes = document.getElementById("mes2");
        let select_ano = document.getElementById("ano2");
        let select_conv = document.getElementById("conv2");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome2.innerHTML;
        tipo_hora.innerHTML = seleciona.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}

/* Agendar Consulta Com Médico 1 Pilates */
function agenConsulta3On() {

    if ((seleciona.id == 'seleciona') && (conv3.value != 'Selecione o seu Convênio')) {

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

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia3");
        let select_mes = document.getElementById("mes3");
        let select_ano = document.getElementById("ano3");
        let select_conv = document.getElementById("conv3");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome3.innerHTML;
        tipo_hora.innerHTML = seleciona.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}

/* Agendar Consulta Com Médico 2 Pilates */
function agenConsulta4On() {

    if ((seleciona.id == 'seleciona') && (conv4.value != 'Selecione o seu Convênio')) {

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

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia4");
        let select_mes = document.getElementById("mes4");
        let select_ano = document.getElementById("ano4");
        let select_conv = document.getElementById("conv4");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome4.innerHTML;
        tipo_hora.innerHTML = seleciona.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}

/* Agendar Consulta Com Médico 1 RPG */
function agenConsulta5On() {

    if ((seleciona.id == 'seleciona') && (conv5.value != 'Selecione o seu Convênio')) {

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

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia5");
        let select_mes = document.getElementById("mes5");
        let select_ano = document.getElementById("ano5");
        let select_conv = document.getElementById("conv5");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome5.innerHTML;
        tipo_hora.innerHTML = seleciona.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}

/* Agendar Consulta Com Médico 2 RPG */
function agenConsulta6On() {

    if ((seleciona.id == 'seleciona') && (conv6.value != 'Selecione o seu Convênio')) {

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

        agendaDados1.style = 'display:none;'
        agendaDados2.style = 'display:none;'
        agendaDados3.style = 'display:none;'
        agendaDados4.style = 'display:none;'
        agendaDados5.style = 'display:none;'
        agendaDados6.style = 'display:none;'

        const tipo = document.getElementById('tipo');
        const tipo_nome = document.getElementById('tipo_nome');
        const tipo_hora = document.getElementById('tipo_hora');
        const tipo_dia = document.getElementById('tipo_dia');
        const tipo_mes = document.getElementById('tipo_mes');
        const tipo_ano = document.getElementById('tipo_ano');
        const tipo_conv = document.getElementById('tipo_conv');

        let select_dia = document.getElementById("dia6");
        let select_mes = document.getElementById("mes6");
        let select_ano = document.getElementById("ano6");
        let select_conv = document.getElementById("conv6");
        let select_tipo_consulta = document.getElementById("consulta_tipo");

        tipo_nome.innerHTML = nome6.innerHTML;
        tipo_hora.innerHTML = seleciona.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo_conv.innerHTML = select_conv.options[select_conv.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
    }
}

mostrarAgendaDados1.addEventListener('click', mostrarAgendaDados1On);
mostrarAgendaDados2.addEventListener('click', mostrarAgendaDados2On);
mostrarAgendaDados3.addEventListener('click', mostrarAgendaDados3On);
mostrarAgendaDados4.addEventListener('click', mostrarAgendaDados4On);
mostrarAgendaDados5.addEventListener('click', mostrarAgendaDados5On);
mostrarAgendaDados6.addEventListener('click', mostrarAgendaDados6On);

agenConsulta1.addEventListener('click', agenConsulta1On);
agenConsulta2.addEventListener('click', agenConsulta2On);
agenConsulta3.addEventListener('click', agenConsulta3On);
agenConsulta4.addEventListener('click', agenConsulta4On);
agenConsulta5.addEventListener('click', agenConsulta5On);
agenConsulta6.addEventListener('click', agenConsulta6On);



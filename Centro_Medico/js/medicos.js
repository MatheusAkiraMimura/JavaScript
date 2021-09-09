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


const agenConsulta1 = document.getElementById('agenConsulta1')
const agenConsulta2 = document.getElementById('agenConsulta2')
const agenConsulta3 = document.getElementById('agenConsulta3')


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

    console.log(seleciona.innerHTML)
  
  });
}


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


agenConsulta1.addEventListener('click', agenConsulta1On);
agenConsulta2.addEventListener('click', agenConsulta2On);
agenConsulta3.addEventListener('click', agenConsulta3On);


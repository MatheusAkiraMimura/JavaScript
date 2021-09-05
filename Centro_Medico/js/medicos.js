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

const consultam1 = document.getElementById('consultam1');
const consulta2m1 = document.getElementById('consulta2m1');

const consultam2 = document.getElementById('consultam2');
const consulta2m2 = document.getElementById('consulta2m2');




function mostraInfo(elemento) {
    if (elemento.value == 1) {
        agenda3.style = 'display:none;'
        agenda4.style = 'display:none;'

        agenda1.style = 'display:block;'
        agenda2.style = 'display:block;'
           
    } else if (elemento.value == 2) {

        agenda1.style = 'display:none;'
        agenda2.style = 'display:none;'

        agenda3.style = 'display:block;'
        agenda4.style = 'display:block;'
        
                    
    } else if (elemento.value == 3) {
        
    }

}

function consultaOnm1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consultam1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
        
      
}

function consultaOn2m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta2m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn3m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta3m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn4m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta4m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn5m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta5m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn6m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta6m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn7m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta7m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn8m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta8m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn9m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta9m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn10m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta10m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn11m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta11m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn12m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta12m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn13m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta13m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn14m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta14m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn15m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta15m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn16m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta16m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn17m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta17m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn18m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta18m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn19m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta19m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn20m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta20m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn21m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta21m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn22m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta22m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn23m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta23m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn24m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta24m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn25m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta25m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn26m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta26m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn27m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta27m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn28m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta28m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn29m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta29m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn30m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta30m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn31m1 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

        tipo_nome.innerHTML = nome.innerHTML;
        tipo_hora.innerHTML = consulta31m1.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}










function consultaOnm2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consultam2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn2m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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

function consultaOn3m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta3m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn4m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta4m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn5m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta5m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn6m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta6m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn7m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta7m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn8m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta8m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn9m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta9m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn10m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta10m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn11m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta11m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn12m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta12m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn13m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta13m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn14m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta14m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn15m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta15m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn16m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta16m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn17m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta17m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn18m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta18m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn19m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta19m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn20m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta20m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn21m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta21m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn22m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta22m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn23m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta23m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn24m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta24m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn25m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta25m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn26m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta26m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn27m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta27m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn28m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consult28m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn29m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta29m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn30m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta30m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}

function consultaOn31m2 () {
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

                <p style="text-align: center; font-size: 3rem; "> <a href="../index.html" style = "color:green;"> Confirmar <a/>  

                <span style="font-size: 3rem; margin-left: 4rem;"> <a href="../agenda.html" style = "color:red;"> Cancelar <a/>  </span> 
                
                </p> 
        </section>
        `;

        servicos.style ='display:none;'
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
        tipo_hora.innerHTML = consulta31m2.innerHTML;
        tipo_dia.innerHTML = select_dia.options[select_dia.selectedIndex].innerHTML
        tipo_mes.innerHTML = select_mes.options[select_mes.selectedIndex].innerHTML
        tipo_ano.innerHTML = select_ano.options[select_ano.selectedIndex].innerHTML
        tipo.innerHTML = select_tipo_consulta.options[select_tipo_consulta.selectedIndex].innerHTML
      
}






consultam1.addEventListener ( 'click', consultaOnm1 );
consulta2m1.addEventListener ( 'click', consultaOn2m1 );
consulta3m1.addEventListener ( 'click', consultaOn3m1 );
consulta4m1.addEventListener ( 'click', consultaOn4m1 );
consulta5m1.addEventListener ( 'click', consultaOn5m1 );
consulta6m1.addEventListener ( 'click', consultaOn6m1 );
consulta7m1.addEventListener ( 'click', consultaOn7m1 );
consulta8m1.addEventListener ( 'click', consultaOn8m1 );
consulta9m1.addEventListener ( 'click', consultaOn9m1 );
consulta10m1.addEventListener ( 'click', consultaOn10m1 );
consulta11m1.addEventListener ( 'click', consultaOn11m1 );
consulta12m1.addEventListener ( 'click', consultaOn12m1 );
consulta13m1.addEventListener ( 'click', consultaOn13m1 );
consulta14m1.addEventListener ( 'click', consultaOn14m1 );
consulta15m1.addEventListener ( 'click', consultaOn15m1 );
consulta16m1.addEventListener ( 'click', consultaOn16m1 );
consulta17m1.addEventListener ( 'click', consultaOn17m1 );
consulta18m1.addEventListener ( 'click', consultaOn18m1 );
consulta19m1.addEventListener ( 'click', consultaOn19m1 );
consulta20m1.addEventListener ( 'click', consultaOn20m1 );
consulta21m1.addEventListener ( 'click', consultaOn21m1 );
consulta22m1.addEventListener ( 'click', consultaOn22m1 );
consulta23m1.addEventListener ( 'click', consultaOn23m1 );
consulta24m1.addEventListener ( 'click', consultaOn24m1 );
consulta25m1.addEventListener ( 'click', consultaOn25m1 );
consulta26m1.addEventListener ( 'click', consultaOn26m1 );
consulta27m1.addEventListener ( 'click', consultaOn27m1 );
consulta28m1.addEventListener ( 'click', consultaOn28m1 );
consulta29m1.addEventListener ( 'click', consultaOn29m1 );
consulta30m1.addEventListener ( 'click', consultaOn30m1 );
consulta31m1.addEventListener ( 'click', consultaOn31m1 );


consultam2.addEventListener ( 'click', consultaOnm2 );
consulta2m2.addEventListener ( 'click', consultaOn2m2 );




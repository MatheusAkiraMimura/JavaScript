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


const agenda1 = document.getElementById('agenda1');
const agenda2 = document.getElementById('agenda2');



function mostraInfo(elemento) {
    if (elemento.value == 1) {
        agenda1.innerHTML =
            `
            <h1 class="cabecalho"> 1º Opção de <span>Médico</span> </h1>

        <div class="row" id="medOp">

            <div class="row" style=" margin-top: 2rem; width:70rem;">


                <form action="">

                    <span
                        style="width: 30rem; margin-right: -2rem; font-size: 1.6rem; color: var(--black); text-transform: none; padding: 1rem;">
                        <img src="img/doc-1.jpg" alt="" width="260rem">
                        <h3 style="font-size: 2.5rem;">Taisa Figueiredo</h3>
                        <p class="medico_tipo" style="font-size: 2rem">Ortopedia</p>

                    </span>

                    <p style="font-size: 2rem; text-align: left; margin-top: 1rem;  margin-left: 2rem;">CRM: 123456</p>
                    <p style="font-size: 2rem; text-align: left; margin-top: 1rem;  margin-left: 2rem;">RQE: 12345611
                    </p>

                    <p style="font-size: 3.5rem; text-align: center; margin-top: 3.8rem;">Formação</p>

                    <p
                        style="font-size: 2.6rem; text-align: left; margin-top: 1rem; color: var(--green); margin-left: 2rem;">
                        Medicina
                    </p>

                    <p
                        style="font-size: 2rem; text-align: left; margin-top: 0.5rem; color: rgb(90, 90, 90); margin-left: 2rem;">
                        Universidade Estadual de Campinas
                    </p>

                    <p
                        style="font-size: 2.6rem; text-align: left; margin-top: 3.7rem; color: var(--green); margin-left: 2rem;">
                        Residência Médica
                    </p>

                    <p
                        style="font-size: 2rem; text-align: left; margin-top: 0.5rem; color: rgb(90, 90, 90); margin-left: 2rem;">
                        Hospital Sírio Libanês
                    </p>

                </form>

            </div>

            <!-- Inicio Calendário-->

            <div class="row" style=" margin-top: 2rem; width:70rem;">


                <form action="">

                    <h3 style="font-size: 3.5rem; text-align: center; margin-top: 1rem; margin-bottom: 1rem;">Agende a <span
                            style="color:var(--green); ">Sua Consulta</span></h3>

                    <select class="serv" name="teste" style="width: 8rem;  margin-bottom: 2rem;"
                        onchange="javascript:mostraInfo(this);">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="01">13</option>
                        <option value="02">14</option>
                        <option value="03">15</option>
                        <option value="04">16</option>
                        <option value="05">17</option>
                        <option value="06">18</option>
                        <option value="07">19</option>
                        <option value="08">20</option>
                        <option value="09">21</option>
                        <option value="10">22</option>
                        <option value="11">23</option>
                        <option value="12">24</option>
                        <option value="10">25</option>
                        <option value="11">26</option>
                        <option value="12">27</option>
                        <option value="10">28</option>
                        <option value="11">29</option>
                        <option value="12">30</option>
                        <option value="12">31</option>
                    </select>

                    <select class="serv" name="teste" style="width: 15rem;  margin-bottom: 2rem;"
                        onchange="javascript:mostraInfo(this);">
                        <option value="01">Janeiro</option>
                        <option value="02">Fevereiro</option>
                        <option value="03">Março</option>
                        <option value="04">Abril</option>
                        <option value="05">Maio</option>
                        <option value="06">Junho</option>
                        <option value="07">Julho</option>
                        <option value="08">Agosto</option>
                        <option value="09" selected>Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>

                    <select class="serv" name="teste" style="width: 10rem; margin-bottom: 2rem;"
                        onchange="javascript:mostraInfo(this);">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>


                    </select>

                    <div class="box-container">

                        <div class="box">08:00</div>

                        <div class="box">08:20</div>

                        <div class="box">08:40 </div>

                        <div class="box">09:00</div>

                        <div class="box">09:20</div>

                        <div class="box">09:40</div>

                        <div class="box">10:00 </div>

                        <div class="box">10:20 </div>

                        <div class="box">10:40 </div>

                        <div class="box">11:00 </div>

                        <div class="box">11:20 </div>

                        <div class="box">11:40 </div>

                        <div class="box">12:00</div>

                        <div class="box">12:20 </div>

                        <div class="box">12:40 </div>

                        <div class="box">13:00</div>

                        <div class="box">13:20 </div>

                        <div class="box">13:40 </div>

                        <div class="box">14:00 </div>

                        <div class="box">14:20 </div>

                        <div class="box">14:40 </div>

                        <div class="box">15:00 </div>

                        <div class="box">15:20 </div>

                        <div class="box">15:40 </div>

                        <div class="box">16:00 </div>

                        <div class="box">16:20 </div>

                        <div class="box">16:40 </div>

                        <div class="box">17:00 </div>

                        <div class="box">17:20 </div>

                        <div class="box">17:40 </div>

                        <div class="box">18:00 </div>


                    </div>
                </form>

            </div>

            <!-- Fim Calendário-->

        </div>
                        
                    `;
                    
        agenda2.innerHTML =
            `
            <h1 class="cabecalho"> 2º Opção de <span>Médico</span> </h1>

        <div class="row">

            <div class="row" style=" margin-top: 2rem; width:70rem;">


                <form action="">

                    <span
                        style="width: 30rem; margin-right: -2rem; font-size: 1.6rem; color: var(--black); text-transform: none; padding: 1rem;">
                        <img src="img/doc-3.jpg" alt="" width="260rem">
                        <h3 style="font-size: 2.5rem;">Lucas Camara Corrêa</h3>
                        <p class="medico_tipo" style="font-size: 2rem">Ortopedia</p>

                    </span>

                    <p style="font-size: 2rem; text-align: left; margin-top: 1rem;  margin-left: 2rem;">CRM: 123456</p>
                    <p style="font-size: 2rem; text-align: left; margin-top: 1rem;  margin-left: 2rem;">RQE: 12345611
                    </p>

                    <p style="font-size: 3.5rem; text-align: center; margin-top: 3rem;">Formação</p>

                    <p
                        style="font-size: 2.6rem; text-align: left; margin-top: 1rem; color: var(--green); margin-left: 2rem;">
                        Medicina
                    </p>

                    <p
                        style="font-size: 2rem; text-align: left; margin-top: 0.5rem; color: rgb(90, 90, 90); margin-left: 2rem;">
                        USP Universidade de São Paulo
                    </p>

                    <p
                        style="font-size: 2.6rem; text-align: left; margin-top: 3.7rem; color: var(--green); margin-left: 2rem;">
                        Residência Médica
                    </p>

                    <p
                        style="font-size: 2rem; text-align: left; margin-top: 0.5rem; color: rgb(90, 90, 90); margin-left: 2rem;">
                        SUS-SP
                    </p>

                </form>

            </div>

            <!-- Inicio Calendário-->

            <div class="row" style=" margin-top: 2rem; width:70rem;">


                <form action="">

                    <h3 style="font-size: 3.7rem; text-align: center; margin-top: 1rem;">Agende a <span
                            style="color:var(--green); ">Sua Consulta</span></h3>

                    <select class="serv" name="teste" style="width: 8rem;  margin-bottom: 2rem;"
                        onchange="javascript:mostraInfo(this);">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="01">13</option>
                        <option value="02">14</option>
                        <option value="03">15</option>
                        <option value="04">16</option>
                        <option value="05">17</option>
                        <option value="06">18</option>
                        <option value="07">19</option>
                        <option value="08">20</option>
                        <option value="09">21</option>
                        <option value="10">22</option>
                        <option value="11">23</option>
                        <option value="12">24</option>
                        <option value="10">25</option>
                        <option value="11">26</option>
                        <option value="12">27</option>
                        <option value="10">28</option>
                        <option value="11">29</option>
                        <option value="12">30</option>
                        <option value="12">31</option>
                    </select>

                    <select class="serv" name="teste" style="width: 15rem;  margin-bottom: 2rem;"
                        onchange="javascript:mostraInfo(this);">
                        <option value="01">Janeiro</option>
                        <option value="02">Fevereiro</option>
                        <option value="03">Março</option>
                        <option value="04">Abril</option>
                        <option value="05">Maio</option>
                        <option value="06">Junho</option>
                        <option value="07">Julho</option>
                        <option value="08">Agosto</option>
                        <option value="09" selected>Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>

                    <select class="serv" name="teste" style="width: 10rem; margin-bottom: 2rem;"
                        onchange="javascript:mostraInfo(this);">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>


                    </select>

                    <div class="box-container">

                        <div class="box">08:00</div>

                        <div class="box">08:20</div>

                        <div class="box">08:40 </div>

                        <div class="box">09:00</div>

                        <div class="box">09:20</div>

                        <div class="box">09:40</div>

                        <div class="box">10:00 </div>

                        <div class="box">10:20 </div>

                        <div class="box">10:40 </div>

                        <div class="box">11:00 </div>

                        <div class="box">11:20 </div>

                        <div class="box">11:40 </div>

                        <div class="box">12:00</div>

                        <div class="box">12:20 </div>

                        <div class="box">12:40 </div>

                        <div class="box">13:00</div>

                        <div class="box">13:20 </div>

                        <div class="box">13:40 </div>

                        <div class="box">14:00 </div>

                        <div class="box">14:20 </div>

                        <div class="box">14:40 </div>

                        <div class="box">15:00 </div>

                        <div class="box">15:20 </div>

                        <div class="box">15:40 </div>

                        <div class="box">16:00 </div>

                        <div class="box">16:20 </div>

                        <div class="box">16:40 </div>

                        <div class="box">17:00 </div>

                        <div class="box">17:20 </div>

                        <div class="box">17:40 </div>

                        <div class="box">18:00 </div>


                    </div>
                </form>

            </div>

            <!-- Fim Calendário-->

        </div>

    
                        
                    `;
    } else if (elemento.value == 2) {
        serv.innerHTML =
            `
            <div class="home">
                <div class="imagem">
                    <img src="img/pilates.png" style="border-radius: 100px; width: 75%; margin-bottom: 2rem;" alt="">
                </div>

                <div class="conteudo" >
                
                    <h3 style="text-align: center;">Pilates </h3>
                    <p>Corpo saudável, bem estar físico e psíquico, é possível com atividades físicas que agradam nossa mente. </p>

                    <p>O pilates identifica os objetivos do paciente, preveni e trata com exercícios, adaptando e adequando a cada tipo do paciente, baseando-se em princípios de respiração, controle, concentração, estabilização, fluidez de movimento e precisão buscando reeducação postural, aumento do tônus muscular e flexibilidade corporal.
                    </p>

                    <p>Tendo como objetivo o retorno às atividades com qualidade de vida e bem estar.
                    </p>

                    <p>Os tratamentos incluem recursos terapêuticos como eletroterapia, alongamento, fortalecimento muscular e terapias manuais.</p>

                    <p><b>Tratamento indicado:</b> Fortalecimento muscular, Prevenção de lesões, Melhora da flexibilidade corporal, Bem estar</p>

                    <p><b>Médicos:</b> </p>
                </div>
            </div>
                        
                    `;

                    
    } else if (elemento.value == 3) {
        serv.innerHTML = 
        `
        <div class="home">
            <div class="imagem">
                <img src="img/rpg.png" style="border-radius: 100px; width: 86%; margin-top: 1rem; margin-bottom: 10rem;" alt="">
            </div>

            <div class="conteudo" >
            
                <h3 style="text-align: center;">Reeducação Postural Global (RPG) </h3>
                <p>A Reeducação Postural Global, conhecida popularmente por RPG, consiste na reorganização postural do corpo, através do alongamento do tecido muscular retraído, proporcionando benefícios para os músculos que mantêm a postura. </p>

                <p>A RPG trata das desarmonias do corpo humano, sempre levando em consideração as necessidades individuais de cada paciente. Vale lembrar que a RPG é uma técnica realizada, exclusivamente, por fisioterapeutas.
                </p>

                <p>Apresenta resultados positivos para diversos problemas, por meio da reeducação do corpo. Podendo auxiliar no tratamento de patologias, como problemas ortopédicos, labirintite, hérnia de disco, artrite, artrose, distúrbios circulatórios, entre outros, sendo indicada não apenas para quem sente dores, mas também para quem busca mais equilíbrio e bem-estar.
                </p>

                <p><b>Médicos:</b></p>
            </div>
        </div>
                    
                `;
    }

}



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


const serv = document.getElementById('serv');



function mostraInfo(elemento) {
    if (elemento.value == 1) {
        serv.innerHTML =
            `
            <div class="home">
                <div class="imagem">
                    <img src="img/acupuntura.png" style="border-radius: 100px; width: 86%; margin-top: 1rem; margin-bottom: 10rem;" alt="">
                </div>

                <div class="conteudo" >
                
                    <h3 style="text-align: center; margin-top: -3rem;">Acupuntura </h3>
                    <p>Sua aplicação é feita diretamente no músculo responsável pela formação da linha ou ruga de expressão, causando seu relaxamento temporário.   </p>

                    <p>Pode ser aplicada nas linhas frontais, “pés-de-galinha” e vincos entre as sobrancelhas. 
                    </p>

                    <p>A duração do efeito terapêutico é de aproximadamente 4 a 6 meses. 
                    </p>

                    <p>Faça uma avaliação com nossa médica. Estamos à disposição para orientá-lo quanto ao melhor tratamento para o seu caso. 
                    </p>

                    <p><b>Médico(a):</b>
                    </p>
                </div>
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



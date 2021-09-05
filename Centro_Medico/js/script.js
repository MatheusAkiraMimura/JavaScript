let menu = document.querySelector('#menu-botao');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const med = document.getElementById ( 'med' );
const pac = document.getElementById ( 'pac' );
const outros = document.getElementById ( 'outros' );
const entrar = document.getElementById ( 'entrar' );
const apagar = document.getElementById ( 'apagar' );




function medOn () {
    outros.style = ''
    pac.style = ''
    apagar.style ='display:none;'

    entrar.innerHTML = 
            `
                        <p style="font-size: 1.8rem; text-align: left; padding-left: 0.2rem; padding-top: 1rem;  "><b>E-mail:</b> </p>
                        <input type="email" placeholder="Digite seu e-mail" class="box" id="email" required>
            
                        <p style="font-size: 1.8rem; text-align: left; padding-left: 0.2rem; padding-top: 1rem; "><b>Senha:</b> </p>
                        <input type="password" placeholder="Digite sua senha" class="box" id="senha"  required>
            
                        <input type="submit" value="ENTRAR" class="botao" style="width:50%; font-size: 2rem; display:none;">

                        <a href="outros.html" class="botao" style="width:60%; font-size: 2rem;">ENTRAR</a>
                        
                    `;

    med.style = 'background-color: var(--green); color: #fff'
}

function pacOn () {
    outros.style = ''
    med.style = ''
    apagar.style ='display:none;'

    entrar.innerHTML = 
            `
            
            <div id="entrar">

                        <p style="font-size: 1.8rem; text-align: left; padding-left: 0.2rem; padding-top: 1rem;  "><b>E-mail:</b> </p>
                        <input type="email" placeholder="Digite seu e-mail" class="box" id="email" required>
            
                        <p style="font-size: 1.8rem; text-align: left; padding-left: 0.2rem; padding-top: 1rem; "><b>Senha:</b> </p>
                        <input type="password" placeholder="Digite sua senha" class="box" id="senha"  required>
            
                        <a href="agenda.html" class="botao" style="width:60%; font-size: 2rem;">ENTRAR</a>

                        <p  style="font-size: 1.8rem; text-align: center; padding-left: 0.2rem; padding-top: 1rem; ">Não tem conta ainda?</p>

                        <a href="cadastrar.html" class="botao" style="width:11rem; font-size: 2rem; padding-left: 1rem">Cadastrar</a>

            </div>
                    `;

        pac.style = 'background-color: var(--green); color: #fff;'
}

function outrosOn () {
    med.style = ''
    pac.style = ''
    apagar.style ='display:none;'

    entrar.innerHTML = 
            `
                        <p style="font-size: 1.8rem; text-align: left; padding-left: 0.2rem; padding-top: 1rem;  "><b>E-mail:</b> </p>
                        <input type="email" placeholder="Digite seu e-mail" class="box" id="email" required>
            
                        <p style="font-size: 1.8rem; text-align: left; padding-left: 0.2rem; padding-top: 1rem; "><b>Senha:</b> </p>
                        <input type="password" placeholder="Digite sua senha" class="box" id="senha"  required>
            
                        <input type="submit" value="ENTRAR" class="botao" style="width:50%; font-size: 2rem; display:none;">

                        <a href="outros.html" class="botao" style="width:60%; font-size: 2rem;">ENTRAR</a>
                      

                        
                    `;

    outros.style = 'background-color: var(--green); color: #fff'
}


med.addEventListener ( 'click', medOn );
pac.addEventListener ( 'click', pacOn );
outros.addEventListener ( 'click', outrosOn );
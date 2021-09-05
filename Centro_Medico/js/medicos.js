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
const agenda3 = document.getElementById('agenda3');
const agenda4 = document.getElementById('agenda4');



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



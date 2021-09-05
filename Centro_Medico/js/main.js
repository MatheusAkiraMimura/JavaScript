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
const serv2 = document.getElementById('serv2');
const serv3 = document.getElementById('serv3');



function mostraInfo(elemento) {
    if (elemento.value == 1) {
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv.style = 'display: block;'
    

    } else if (elemento.value == 2) {
        serv3.style = 'display: none;'
        serv.style = 'display: none;'
        serv2.style = 'display: block;'
 

                    
    } else if (elemento.value == 3) {
        serv2.style = 'display: none;'
        serv.style = 'display: none;'
        serv3.style = 'display: block;'
        
    }

}



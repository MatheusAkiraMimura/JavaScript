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
const serv4 = document.getElementById('serv4');
const serv5 = document.getElementById('serv5');
const serv6 = document.getElementById('serv6');
const serv7 = document.getElementById('serv7');
const serv8 = document.getElementById('serv8');
const serv9 = document.getElementById('serv9');
const serv10 = document.getElementById('serv10');
const serv11 = document.getElementById('serv11');
const serv12 = document.getElementById('serv12');
const serv13 = document.getElementById('serv13');
const serv14 = document.getElementById('serv14');
const serv15 = document.getElementById('serv15');
const serv16 = document.getElementById('serv16');
const serv17 = document.getElementById('serv17');




function mostraInfo(elemento) {
    if (elemento.value == 1) {
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv.style = 'display: block;'
    

    } else if (elemento.value == 2) {
        serv.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv2.style = 'display: block;'
 

                    
    } else if (elemento.value == 3) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv3.style = 'display: block;'
        
    } else if (elemento.value == 4) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv4.style = 'display: block;'
        
    } else if (elemento.value == 5) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv5.style = 'display: block;'
        
    } else if (elemento.value == 6) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv6.style = 'display: block;'
        
    } else if (elemento.value == 7) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv7.style = 'display: block;'
        
    } else if (elemento.value == 8) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv8.style = 'display: block;'
        
    } else if (elemento.value == 9) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv9.style = 'display: block;'
        
    } else if (elemento.value == 10) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv10.style = 'display: block;'
        
    } else if (elemento.value == 11) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv11.style = 'display: block;'
        
    } else if (elemento.value == 12) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv12.style = 'display: block;'
        
    } else if (elemento.value == 13) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv13.style = 'display: block;'
        
    } else if (elemento.value == 14) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv14.style = 'display: block;'
        
    } else if (elemento.value == 15) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv15.style = 'display: block;'
        
    } else if (elemento.value == 16) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv17.style = 'display: none;'

        serv16.style = 'display: block;'
        
    } else if (elemento.value == 17) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'

        serv17.style = 'display: block;'
        
    } 

}



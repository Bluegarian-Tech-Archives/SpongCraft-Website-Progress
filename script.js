'use strict';

let notDoneMsg = 'Alert: This website is currently still under development and is not finished yet! PLEASE NO COMPLAINS!! Thank you! ☻';
alert(notDoneMsg);

function waitLoadBtnScrollTop() {
    document.getElementById('btnScrollTop').addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
}




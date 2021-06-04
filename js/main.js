'use strict';


const fireplace = document.getElementById("fireplaces");
function cambiofireplace(num) {
    fireplace.src = `img/Frames/scene${num}.png`
}


function timeOut(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cambiofireplace(num));
        }, 120);
    });
}


async function animacion() {
    for (let index = 1; index <=30 ; index++) {
        await timeOut(index);
    }
    
    animacion();
}


animacion();

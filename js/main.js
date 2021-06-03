'use strict';

/** 
 * TODO1. Función que agregue un delay cada 0.5s.
 * TODO2. Función que seleccione la imagen y la cambie de acuerdo a cada contador.
 * TODO3. Integración de script en Página.
 **/

//Selector de img con id fireplace.
const fireplace = document.getElementById("fireplaces");
function cambiofireplace(num) {
    fireplace.src = `img/Frames/scene${num}.png`
}

// Funcion que devuelve una promesa con un tiempo de espera de 0.5s
function timeOut(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cambiofireplace(num));
        }, 120);
    });
}

// Función tipo asincrona para llamar a timeOut
// dentro de un ciclo que es igual al numero de imágenes.
async function animacion() {
    for (let index = 1; index <=30 ; index++) {
        await timeOut(index);
    }
    //Reinicio de función haciendo un ciclo infinito.   
    animacion();
}

//Iniciado de función animación cuando se carga la página.
animacion();

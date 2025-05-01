import _ from 'underscore';

import './style.css'

const btnPlay = document.getElementById("btnPlay");
if (btnPlay) {
  btnPlay.addEventListener("click", function () {
    window.location.href = "story.html"; //te lleva a la pantalla de la historia
  });
}


const btnReturn = document.getElementById("btnReturn");
if (btnReturn) {
  btnReturn.addEventListener("click", function () {
    history.back(); // Regresa a la página anterior
  });
}

const btnStart = document.getElementById("btnStart");
if (btnStart) {
  btnStart.addEventListener("click", function () {
    window.location.href = "game.html";
  });
}

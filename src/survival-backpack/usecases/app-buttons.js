 const btnPlay = document.getElementById("btnPlay");
 const miAudio = document.getElementById("miAudio");
 const fadeOverlay = document.getElementById("fade-out-overlay");

if (btnPlay && miAudio && fadeOverlay) {
  btnPlay.addEventListener("click", function () {
    miAudio.play().then(() => {
      miAudio.addEventListener("ended", () => {
        fadeOverlay.style.opacity = "1"; // Inicia la transición
        setTimeout(() => {
          window.location.href = "story.html"; // Redirige después de la animación
        }, 2000);
      });
    }).catch(error => console.error("Error al reproducir audio:", error));
  });
}

const btnOptions = document.getElementById("btnOptions");
if (btnOptions) {
  btnOptions.addEventListener("click", function () {
    window.location.href = "results.html";
  });
}

const btnCredits = document.getElementById("btnCredits");
if (btnCredits) {
  btnCredits.addEventListener("click", function () {
    window.location.href = "credits.html";
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



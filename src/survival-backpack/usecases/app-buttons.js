 
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

const btnShowOptimization = document.getElementById("showOptimization");
if(btnShowOptimization){
  btnShowOptimization.addEventListener("click", function () {
    const optimizedContainer = document.querySelector(".optimized-results");
    const button = document.getElementById("showOptimization");
    const audio1 = document.getElementById("optimizationAudio");
    const audio2 = document.getElementById("hideAudio");
  
    // Alternar visibilidad del contenedor
    if (optimizedContainer.style.display === "none" || optimizedContainer.innerHTML === "") {
        optimizedContainer.style.display = "flex"; // Mostrar resultados
        optimizedContainer.innerHTML = ""; // Limpiar antes de insertar nuevos datos
        button.textContent = "Hide it!"; // Cambiar texto del botón
        audio2.pause();
        audio2.currentTime = 0;
        audio1.play();
  
  
        const percentage = 100;
  
        userBackpacks.forEach((mochilaRef, index) => {
            const mochilaOpt = optimizeBackpacks[index];
  
            const div = document.createElement("div");
            div.classList.add("mochila");
            div.innerHTML = `
                <h2>S. Backpack ${index + 1}</h2>
                <p><strong>Total Weight:</strong> ${mochilaOpt.pesoTotal} grams</p>
                <p><strong>Items:</strong> ${mochilaOpt.ruta.filter(item => item !== "start").join(", ") || "Ninguno"}</p>
                <p><strong>Optimization Percentage:</strong> ${percentage}%</p>
            `;
            optimizedContainer.appendChild(div);
        });
  
    } else {
        optimizedContainer.style.display = "none"; // Ocultar resultados
        optimizedContainer.innerHTML = ""; // Limpiar contenido
        button.textContent = "Show 100% Optimization"; // Cambiar texto del botón
        audio1.pause(); // ⏸ Pausar el audio cuando se oculta
        audio2.play();
        audio1.currentTime = 0; // Reiniciar audio para la próxima vez
    }
  });
}

function mostrarOptimización() {
  const contenedor = document.getElementById("resultados");

  if (!contenedor) {
      console.error("Error: el elemento 'resultados' no existe en el DOM.");
      return;
  }

  contenedor.innerHTML = ""; // Limpiar contenido anterior

  userBackpacks.forEach((mochilaRef, index) => {
      const mochilaOpt = optimizeBackpacks[index];

      if (!mochilaOpt) {
          console.error(`Error: No se encontró la mochila optimizada en el índice ${index}`);
          return;
      }

      const percentage = ((mochilaRef.pesoTotal / mochilaOpt.pesoTotal) * 100).toFixed(2);

      const div = document.createElement("div");
      div.classList.add("mochila");
      div.innerHTML = `
          <h2>S. Backpack ${index + 1}</h2>
          <p><strong>Total Weight:</strong> ${mochilaRef.pesoTotal} grams</p>
          <p><strong>Items:</strong> ${mochilaRef.ruta.filter(item => item !== "start").join(", ") || "Ninguno"}</p>
          <p><strong>Optimization Percentage:</strong> ${percentage}%</p>
      `;
      contenedor.appendChild(div);
  });
}

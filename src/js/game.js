document.addEventListener("DOMContentLoaded", () => {
    const objetos = document.querySelectorAll(".objeto");
    const mochila = document.getElementById("mochilaContenido");
    const pesoDiv = document.getElementById("pesoTotal");
  
    let pesoTotal = 0;
    const pesoMaximo = 5000; // Límite de peso
  
    objetos.forEach(obj => {
      obj.addEventListener("click", () => {
        const nombre = obj.dataset.nombre;
        const peso = parseInt(obj.dataset.peso);
  
        if (pesoTotal + peso > pesoMaximo) {
          alert("¡Has superado el límite de peso de la mochila!");
          return;
        }
  
        // Ocultar el objeto original
        obj.style.visibility = "hidden"; // Usamos visibility en vez de display
  
        // Clonar y mostrar en la mochila
        const imagenClonada = obj.cloneNode(true);
        imagenClonada.style.width = "50px";
        imagenClonada.style.margin = "5px";
        imagenClonada.style.visibility = "visible"; // Asegura que el clon sea visible
        mochila.appendChild(imagenClonada);
  
        pesoTotal += peso;
        pesoDiv.textContent = `${pesoTotal} gramos`;
      });
    });
  });
  
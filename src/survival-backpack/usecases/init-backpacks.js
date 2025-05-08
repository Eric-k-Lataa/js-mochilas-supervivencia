
document.addEventListener("DOMContentLoaded", () => {
    inicializarMochilas();
});

function inicializarMochilas() {
    const objetos = document.querySelectorAll(".objeto");
    const mochilas = [
        document.getElementById("mochila1"),
        document.getElementById("mochila2"),
        document.getElementById("mochila3")
    ];
    const botones = [
        document.getElementById("btnTerminar1"),
        document.getElementById("btnTerminar2"),
        document.getElementById("btnTerminar3")
    ];
    const pesoTotal = [0, 0, 0]; // Almacena peso de cada mochila
    const rutas = [[], [], []];  // Almacena objetos seleccionados en cada mochila
    const pesoMaximo = 5000;      // Límite de peso por mochila
    let mochilaActual = 0;        // Índice de la mochila actual

    objetos.forEach(obj => {
        obj.addEventListener("click", () => {
            if (mochilaActual >= mochilas.length) {
                alert("Todas las mochilas están llenas.");
                return;
            }

            const nombre = obj.dataset.nombre;
            const peso = parseInt(obj.dataset.peso);

            if (pesoTotal[mochilaActual] + peso > pesoMaximo) {
                alert("¡Has superado el límite de peso en esta mochila!");
                return;
            }

            obj.style.visibility = "hidden";

            const imagenClonada = obj.cloneNode(true);
            imagenClonada.style.width = "50px";
            imagenClonada.style.margin = "5px";
            imagenClonada.style.visibility = "visible";
            mochilas[mochilaActual].appendChild(imagenClonada);

            pesoTotal[mochilaActual] += peso;
            rutas[mochilaActual].push(nombre); // Guarda el objeto seleccionado en la mochila
            document.getElementById(`peso${mochilaActual + 1}`).textContent = `${pesoTotal[mochilaActual]} gramos`;
        });
    });

    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            if (index === mochilaActual) { 
                boton.disabled = true; // Deshabilita el botón actual
                mochilaActual++; // Cambia a la siguiente mochila
                
                if (mochilaActual < botones.length) {
                    botones[mochilaActual].disabled = false; // Activa el siguiente botón
                } else {
                    guardarResultados(); // Guarda los datos en localStorage
                    window.location.href = "results.html"; // Redirige a la nueva página
                }
            }
        });
    });

    // Deshabilitar todos los botones excepto el primero al inicio
    botones.forEach((boton, index) => {
        if (index !== 0) boton.disabled = true;
    });

    function guardarResultados() {
        const resultados = {
            pesoTotal: pesoTotal,
            rutas: rutas
        };

        localStorage.setItem("mochilaResultados", JSON.stringify(resultados)); // Guardar en localStorage
    }
}


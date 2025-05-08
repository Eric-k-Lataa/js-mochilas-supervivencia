import { distributeItems } from "./distribute-items.js";
import { createObjectList } from './create-object-list.js';
document.addEventListener("DOMContentLoaded", () => {
    const resultados = document.getElementById("resultados");

    const userResults = JSON.parse(localStorage.getItem("mochilaResultados")); // Recuperar datos

    if (!userResults || !userResults.pesoTotal || !userResults.rutas) {
        resultados.innerHTML = "<p>Error: No hay datos disponibles.</p>";
        console.error("No se encontraron resultados en localStorage.");
        return;
    }

    console.log("Datos recuperados:", userResults); // Verificar si se cargan correctamente

    mostrarOptimización(userResults.rutas.map((ruta, index) => ({
        pesoTotal: userResults.pesoTotal[index],
        ruta: ruta
    }))); // ✅ Transformar los datos y pasarlos correctamente
});


const numBackpacks = 3;
const itemsList = createObjectList().objectList;
const backpacksWeights = [5000, 5000, 5000];

const { optimizeBackpacks } = distributeItems(numBackpacks,itemsList,backpacksWeights);

// console.log("Survival_Backpack 1: ", optimizeBackpacks[0]);
// console.log("Survival_Backpack 2: ", optimizeBackpacks[1]);
// console.log("Survival_Backpack 3: ", optimizeBackpacks[2]);
// const userBackpacks = [
//   { pesoTotal: 3260, ruta: ["1-Tent", "2-Linterna", "1-Swiss_Army_knife"] },
//   { pesoTotal: 2250, ruta: ["2-Sleeping_bag", "1-Frying_pan", "1-Clothes"] },
//   { pesoTotal: 4500, ruta: ["3-Clothes", "2-Swiss_Army_knife", "0-Tent"] }
// ];


const btnShowOptimization = document.getElementById("showOptimization");
if (btnShowOptimization) {
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

        // ✅ Definir userBackpacks dinámicamente
        const userResults = JSON.parse(localStorage.getItem("mochilaResultados"));

        if (!userResults || !userResults.pesoTotal || !userResults.rutas) {
            console.error("Error: No hay datos válidos en localStorage.");
            return;
        }

        const userBackpacks = userResults.rutas.map((ruta, index) => ({
            pesoTotal: userResults.pesoTotal[index],
            ruta: ruta
        }));

        // ✅ Iterar 3 veces por las tres mochilas
        userBackpacks.forEach((mochilaRef, index) => {
            const mochilaOpt = optimizeBackpacks ? optimizeBackpacks[index] : null;

            if (!mochilaOpt) {
                console.error(`Error: No se encontró la mochila optimizada en el índice ${index}`);
                return;
            }

            const div = document.createElement("div");
            div.classList.add("mochila");
            div.innerHTML = `
                <h2>S. Backpack ${index + 1}</h2>
                <p><strong>Total Weight:</strong> ${mochilaOpt.pesoTotal} grams</p>
                <p><strong>Items:</strong> ${mochilaOpt.ruta.filter(item => item !== "start").join(", ") || "None"}</p>
                <p><strong>Optimization Percentage:</strong> ${percentage}%</p>
            `;
            optimizedContainer.appendChild(div);
        });

    } else {
        optimizedContainer.style.display = "none"; // Ocultar resultados
        optimizedContainer.innerHTML = ""; // Limpiar contenido
        button.textContent = "Show 100% Optimization"; // Cambiar texto del botón
        audio1.pause();
        audio2.play();
        audio1.currentTime = 0;
    }
  });
}


function mostrarOptimización(userBackpacks) {
    const contenedor = document.getElementById("resultados");

    if (!contenedor) {
        console.error("Error: el elemento 'resultados' no existe en el DOM.");
        return;
    }

    if (!Array.isArray(userBackpacks)) {
        console.error("Error: userBackpacks no es un array.");
        return;
    }

    contenedor.innerHTML = ""; // Limpiar contenido anterior

    userBackpacks.forEach((mochilaRef, index) => {
        const mochilaOpt = optimizeBackpacks[index];

        if (!mochilaOpt) {
            console.error(`Error: No se encontró la mochila optimizada en el índice ${index}`);
            return;
        }

        let percentage=0; 

        if(((mochilaRef.pesoTotal / mochilaOpt.pesoTotal) * 100) <= 100){
            percentage=((mochilaRef.pesoTotal / mochilaOpt.pesoTotal) * 100).toFixed(2);
        }else{
            percentage=100;
        }

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

document.addEventListener("DOMContentLoaded", () => {
  const resultados = document.getElementById("resultados");
});


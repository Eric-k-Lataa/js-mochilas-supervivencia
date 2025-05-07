export function subtractObjects(lista1, lista2) {
    return lista1.map(objeto => {
        if (typeof objeto !== "string") {
            console.error(`Error: ${objeto} no es un string`);
            return objeto; // Devuelve el objeto sin cambios si no es un string
        }

        const [numLista, nombreLista] = objeto.split("-"); // Divide número y nombre
        const prohibido = lista2.find(p => p.includes(nombreLista));

        if (prohibido) {
            const [numProhibido] = prohibido.split("-"); 
            const nuevoValor = parseInt(numLista) - parseInt(numProhibido); 

            // Asegurar que el resultado no sea negativo
            return nuevoValor > 0 ? `${nuevoValor}-${nombreLista}` : `0-${nombreLista}`; 
        }

        return objeto; // Si no está prohibido, se mantiene igual
    });
}


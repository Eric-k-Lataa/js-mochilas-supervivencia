export function addObjects(lista1, lista2) {
    return lista1.map(objeto => {
        if (typeof objeto !== "string") {
            console.error(`Error: ${objeto} no es un string`);
            return objeto; // Devuelve el objeto sin cambios si no es un string
        }

        const [numLista, nombreLista] = objeto.split("-"); // Divide número y nombre
        const extra = lista2.find(p => p.includes(nombreLista));

        if (extra) {
            const [numExtra] = extra.split("-"); 
            const nuevoValor = parseInt(numLista) + parseInt(numExtra); 

            return `${nuevoValor}-${nombreLista}`; // Retorna la nueva cantidad del objeto
        }

        return objeto; // Si no hay cambios, se mantiene igual
    });
}

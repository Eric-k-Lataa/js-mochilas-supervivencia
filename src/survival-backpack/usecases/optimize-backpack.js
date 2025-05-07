import { createGraph } from "./create-graph";

/**
 * Esta función calcula la lista de objetos óptima 
 * @returns {{ etapas: Array, distancias: Map }} Retorna la estructura de datos optimizada
 */
export function optimizeBackpack(objetoActual, etapaActual, ruta, pesoTotal, maximoRequerido, objetosProhibidos) {
    // Corrección: Usar desestructuración de objetos
    const { distancias, etapas } = createGraph();
    
    // Verificamos si hemos llegado a la última etapa
    if (etapaActual >= etapas.length) {
        // Si la ruta contiene un objeto prohibido, descartamos la ruta
        if (ruta.some(objeto => objetosProhibidos.includes(objeto))) {
            return { ruta: null, pesoTotal: Infinity };
        }
        if (pesoTotal <= maximoRequerido) {
            return { ruta, pesoTotal };
        } else {
            return { ruta: null, pesoTotal: Infinity }; // Ignorar rutas que exceden el límite
        }
    }
    
    let minRuta = null;
    let maxPeso = 0;
    
    // Obtener los siguientes objetos en la etapa actual
    const siguientes = etapas[etapaActual][objetoActual] || [];
    
    for (const objetoSiguiente of siguientes) {
        const nuevaDistancia = pesoTotal + (distancias.get(`${objetoActual},${objetoSiguiente}`) ?? 0);
        const nuevaRuta = [...ruta, objetoSiguiente];

        const resultado = optimizeBackpack(objetoSiguiente, etapaActual + 1, nuevaRuta, nuevaDistancia, maximoRequerido, objetosProhibidos);
        
        if (resultado.pesoTotal > maxPeso && resultado.pesoTotal <= maximoRequerido) {
            maxPeso = resultado.pesoTotal;
            minRuta = resultado.ruta;
        }
    }

    return { ruta: minRuta, pesoTotal: maxPeso };
}

/**
 * Esta función calcula la lista de objetos óptima 
 * @returns { etapas: Array, distancias: Map } retorna un objeto con las etapas y otro con las distancias
 */
export const createGraph = () => {

    // Estructura para 6 etapas
    const etapas = [
        {  // Etapa 0: origen
            "inicio": ["0-Linterna", "1-Linterna", "2-Linterna", "3-Linterna"]
            //"inicio": ["0-Casa", "1-Casa", "2-Casa", "3-Casa"]
        },
        {  // Etapa 1
            "0-Linterna": ["0-Sarten", "1-Sarten", "2-Sarten", "3-Sarten"],
            "1-Linterna": ["0-Sarten", "1-Sarten", "2-Sarten", "3-Sarten"],
            "2-Linterna": ["0-Sarten", "1-Sarten", "2-Sarten", "3-Sarten"],
            "3-Linterna": ["0-Sarten", "1-Sarten", "2-Sarten", "3-Sarten"]
        },
        {  // Etapa 2
            "0-Sarten": ["0-Navaja", "1-Navaja", "2-Navaja", "3-Navaja"],
            "1-Sarten": ["0-Navaja", "1-Navaja", "2-Navaja", "3-Navaja"],
            "2-Sarten": ["0-Navaja", "1-Navaja", "2-Navaja", "3-Navaja"],
            "3-Sarten": ["0-Navaja", "1-Navaja", "2-Navaja", "3-Navaja"]
        },
        {  // Etapa 3
            "0-Navaja": ["0-Ropa", "1-Ropa", "2-Ropa", "3-Ropa"],
            "1-Navaja": ["0-Ropa", "1-Ropa", "2-Ropa", "3-Ropa"],
            "2-Navaja": ["0-Ropa", "1-Ropa", "2-Ropa", "3-Ropa"],
            "3-Navaja": ["0-Ropa", "1-Ropa", "2-Ropa", "3-Ropa"]
        },
        {  // Etapa 4
            "0-Ropa": ["0-Bolsa", "1-Bolsa", "2-Bolsa", "3-Bolsa"],
            "1-Ropa": ["0-Bolsa", "1-Bolsa", "2-Bolsa", "3-Bolsa"],
            "2-Ropa": ["0-Bolsa", "1-Bolsa", "2-Bolsa", "3-Bolsa"],
            "3-Ropa": ["0-Bolsa", "1-Bolsa", "2-Bolsa", "3-Bolsa"]
        },
        {  // Etapa 5: último salto
            "0-Bolsa": ["0-Casa", "1-Casa", "2-Casa", "3-Casa"],
            "1-Bolsa": ["0-Casa", "1-Casa", "2-Casa", "3-Casa"],
            "2-Bolsa": ["0-Casa", "1-Casa", "2-Casa", "3-Casa"],
            "3-Bolsa": ["0-Casa", "1-Casa", "2-Casa", "3-Casa"]
        }
    ];

    // Distancias entre ciudades
    const distancias = new Map([
        ["inicio,0-Linterna", 0],
        ["inicio,1-Linterna", 120],
        ["inicio,2-Linterna", 240],
        ["inicio,3-Linterna", 360],

        ["0-Linterna,0-Sarten", 0],
        ["0-Linterna,1-Sarten", 300],
        ["0-Linterna,2-Sarten", 600],
        ["0-Linterna,3-Sarten", 900],

        ["1-Linterna,0-Sarten", 0],
        ["1-Linterna,1-Sarten", 300],
        ["1-Linterna,2-Sarten", 600],
        ["1-Linterna,3-Sarten", 900],

        ["2-Linterna,0-Sarten", 0],
        ["2-Linterna,1-Sarten", 300],
        ["2-Linterna,2-Sarten", 600],
        ["2-Linterna,3-Sarten", 900],

        ["3-Linterna,0-Sarten", 0],
        ["3-Linterna,1-Sarten", 300],
        ["3-Linterna,2-Sarten", 600],
        ["3-Linterna,3-Sarten", 900],

        ["0-Sarten,0-Navaja", 0],
        ["0-Sarten,1-Navaja", 20],
        ["0-Sarten,2-Navaja", 40],
        ["0-Sarten,3-Navaja", 60],

        ["1-Sarten,0-Navaja", 0],
        ["1-Sarten,1-Navaja", 20],
        ["1-Sarten,2-Navaja", 40],
        ["1-Sarten,3-Navaja", 60],

        ["2-Sarten,0-Navaja", 0],
        ["2-Sarten,1-Navaja", 20],
        ["2-Sarten,2-Navaja", 40],
        ["2-Sarten,3-Navaja", 60],

        ["3-Sarten,0-Navaja", 0],
        ["3-Sarten,1-Navaja", 20],
        ["3-Sarten,2-Navaja", 40],
        ["3-Sarten,3-Navaja", 60],

        ["0-Navaja,0-Ropa", 0],
        ["0-Navaja,1-Ropa", 750],
        ["0-Navaja,2-Ropa", 1500],
        ["0-Navaja,3-Ropa", 2250],

        ["1-Navaja,0-Ropa", 0],
        ["1-Navaja,1-Ropa", 750],
        ["1-Navaja,2-Ropa", 1500],
        ["1-Navaja,3-Ropa", 2250],

        ["2-Navaja,0-Ropa", 0],
        ["2-Navaja,1-Ropa", 750],
        ["2-Navaja,2-Ropa", 1500],
        ["2-Navaja,3-Ropa", 2250],

        ["3-Navaja,0-Ropa", 0],
        ["3-Navaja,1-Ropa", 750],
        ["3-Navaja,2-Ropa", 1500],
        ["3-Navaja,3-Ropa", 2250],

        ["0-Ropa,0-Bolsa", 0],
        ["0-Ropa,1-Bolsa", 600],
        ["0-Ropa,2-Bolsa", 1200],
        ["0-Ropa,3-Bolsa", 1800],

        ["1-Ropa,0-Bolsa", 0],
        ["1-Ropa,1-Bolsa", 600],
        ["1-Ropa,2-Bolsa", 1200],
        ["1-Ropa,3-Bolsa", 1800],

        ["2-Ropa,0-Bolsa", 0],
        ["2-Ropa,1-Bolsa", 600],
        ["2-Ropa,2-Bolsa", 1200],
        ["2-Ropa,3-Bolsa", 1800],

        ["3-Ropa,0-Bolsa", 0],
        ["3-Ropa,1-Bolsa", 600],
        ["3-Ropa,2-Bolsa", 1200],
        ["3-Ropa,3-Bolsa", 1800],

        ["0-Bolsa,0-Casa", 0],
        ["0-Bolsa,1-Casa", 3000],
        ["0-Bolsa,2-Casa", 6000],
        ["0-Bolsa,3-Casa", 9000],

        ["1-Bolsa,0-Casa", 0],
        ["1-Bolsa,1-Casa", 3000],
        ["1-Bolsa,2-Casa", 6000],
        ["1-Bolsa,3-Casa", 9000],

        ["2-Bolsa,0-Casa", 0],
        ["2-Bolsa,1-Casa", 3000],
        ["2-Bolsa,2-Casa", 6000],
        ["2-Bolsa,3-Casa", 9000],

        ["3-Bolsa,0-Casa", 0],
        ["3-Bolsa,1-Casa", 3000],
        ["3-Bolsa,2-Casa", 6000],
        ["3-Bolsa,3-Casa", 9000],
    ]);
    
    return { etapas, distancias };
}

// export default crearDeck;
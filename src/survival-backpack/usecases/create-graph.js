/**
 * Esta función calcula la lista de objetos óptima 
 * @returns { etapas: Array, distancias: Map } retorna un objeto con las etapas y otro con las distancias
 */
export const createGraph = () => {
    // Tent Sleeping_bag Clothes Swiss_Army_knife Frying_pan Flashlight First_aid_kit
    // Estructura para 6 etapas
    const etapas = [
        {  // Etapa 0: origen
            "start": ["0-First_aid_kit", "1-First_aid_kit", "2-First_aid_kit", "3-First_aid_kit"]
        },
        {  // Etapa 1
            "0-First_aid_kit": ["0-Flashlight", "1-Flashlight", "2-Flashlight", "3-Flashlight"],
            "1-First_aid_kit": ["0-Flashlight", "1-Flashlight", "2-Flashlight", "3-Flashlight"],
            "2-First_aid_kit": ["0-Flashlight", "1-Flashlight", "2-Flashlight", "3-Flashlight"],
            "3-First_aid_kit": ["0-Flashlight", "1-Flashlight", "2-Flashlight", "3-Flashlight"],
        }, 
        {  // Etapa 2
            "0-Flashlight": ["0-Frying_pan", "1-Frying_pan", "2-Frying_pan", "3-Frying_pan"],
            "1-Flashlight": ["0-Frying_pan", "1-Frying_pan", "2-Frying_pan", "3-Frying_pan"],
            "2-Flashlight": ["0-Frying_pan", "1-Frying_pan", "2-Frying_pan", "3-Frying_pan"],
            "3-Flashlight": ["0-Frying_pan", "1-Frying_pan", "2-Frying_pan", "3-Frying_pan"]
        },
        {  // Etapa 3
            "0-Frying_pan": ["0-Swiss_Army_knife", "1-Swiss_Army_knife", "2-Swiss_Army_knife", "3-Swiss_Army_knife"],
            "1-Frying_pan": ["0-Swiss_Army_knife", "1-Swiss_Army_knife", "2-Swiss_Army_knife", "3-Swiss_Army_knife"],
            "2-Frying_pan": ["0-Swiss_Army_knife", "1-Swiss_Army_knife", "2-Swiss_Army_knife", "3-Swiss_Army_knife"],
            "3-Frying_pan": ["0-Swiss_Army_knife", "1-Swiss_Army_knife", "2-Swiss_Army_knife", "3-Swiss_Army_knife"]
        },
        {  // Etapa 4
            "0-Swiss_Army_knife": ["0-Clothes", "1-Clothes", "2-Clothes", "3-Clothes"],
            "1-Swiss_Army_knife": ["0-Clothes", "1-Clothes", "2-Clothes", "3-Clothes"],
            "2-Swiss_Army_knife": ["0-Clothes", "1-Clothes", "2-Clothes", "3-Clothes"],
            "3-Swiss_Army_knife": ["0-Clothes", "1-Clothes", "2-Clothes", "3-Clothes"]
        },
        {  // Etapa 5
            "0-Clothes": ["0-Sleeping_bag", "1-Sleeping_bag", "2-Sleeping_bag", "3-Sleeping_bag"],
            "1-Clothes": ["0-Sleeping_bag", "1-Sleeping_bag", "2-Sleeping_bag", "3-Sleeping_bag"],
            "2-Clothes": ["0-Sleeping_bag", "1-Sleeping_bag", "2-Sleeping_bag", "3-Sleeping_bag"],
            "3-Clothes": ["0-Sleeping_bag", "1-Sleeping_bag", "2-Sleeping_bag", "3-Sleeping_bag"]
        },
        {  // Etapa 6: último salto
            "0-Sleeping_bag": ["0-Tent", "1-Tent", "2-Tent", "3-Tent"],
            "1-Sleeping_bag": ["0-Tent", "1-Tent", "2-Tent", "3-Tent"],
            "2-Sleeping_bag": ["0-Tent", "1-Tent", "2-Tent", "3-Tent"],
            "3-Sleeping_bag": ["0-Tent", "1-Tent", "2-Tent", "3-Tent"]
        }
    ];

    // Distancias entre ciudades
    const distancias = new Map([
        ["start,0-First_aid_kit", 0],
        ["start,1-First_aid_kit", 180],
        ["start,2-First_aid_kit", 360],
        ["start,3-First_aid_kit", 440],

        ["0-First_aid_kit,0-Flashlight", 0],
        ["0-First_aid_kit,1-Flashlight", 120],
        ["0-First_aid_kit,2-Flashlight", 240],
        ["0-First_aid_kit,3-Flashlight", 360],

        ["1-First_aid_kit,0-Flashlight", 0],
        ["1-First_aid_kit,1-Flashlight", 120],
        ["1-First_aid_kit,2-Flashlight", 240],
        ["1-First_aid_kit,3-Flashlight", 360],

        ["2-First_aid_kit,0-Flashlight", 0],
        ["2-First_aid_kit,1-Flashlight", 120],
        ["2-First_aid_kit,2-Flashlight", 240],
        ["2-First_aid_kit,3-Flashlight", 360],

        ["3-First_aid_kit,0-Flashlight", 0],
        ["3-First_aid_kit,1-Flashlight", 120],
        ["3-First_aid_kit,2-Flashlight", 240],
        ["3-First_aid_kit,3-Flashlight", 360],

        ["0-Flashlight,0-Frying_pan", 0],
        ["0-Flashlight,1-Frying_pan", 300],
        ["0-Flashlight,2-Frying_pan", 600],
        ["0-Flashlight,3-Frying_pan", 900],

        ["1-Flashlight,0-Frying_pan", 0],
        ["1-Flashlight,1-Frying_pan", 300],
        ["1-Flashlight,2-Frying_pan", 600],
        ["1-Flashlight,3-Frying_pan", 900],

        ["2-Flashlight,0-Frying_pan", 0],
        ["2-Flashlight,1-Frying_pan", 300],
        ["2-Flashlight,2-Frying_pan", 600],
        ["2-Flashlight,3-Frying_pan", 900],

        ["3-Flashlight,0-Frying_pan", 0],
        ["3-Flashlight,1-Frying_pan", 300],
        ["3-Flashlight,2-Frying_pan", 600],
        ["3-Flashlight,3-Frying_pan", 900],

        ["0-Frying_pan,0-Swiss_Army_knife", 0],
        ["0-Frying_pan,1-Swiss_Army_knife", 20],
        ["0-Frying_pan,2-Swiss_Army_knife", 40],
        ["0-Frying_pan,3-Swiss_Army_knife", 60],

        ["1-Frying_pan,0-Swiss_Army_knife", 0],
        ["1-Frying_pan,1-Swiss_Army_knife", 20],
        ["1-Frying_pan,2-Swiss_Army_knife", 40],
        ["1-Frying_pan,3-Swiss_Army_knife", 60],

        ["2-Frying_pan,0-Swiss_Army_knife", 0],
        ["2-Frying_pan,1-Swiss_Army_knife", 20],
        ["2-Frying_pan,2-Swiss_Army_knife", 40],
        ["2-Frying_pan,3-Swiss_Army_knife", 60],

        ["3-Frying_pan,0-Swiss_Army_knife", 0],
        ["3-Frying_pan,1-Swiss_Army_knife", 20],
        ["3-Frying_pan,2-Swiss_Army_knife", 40],
        ["3-Frying_pan,3-Swiss_Army_knife", 60],

        ["0-Swiss_Army_knife,0-Clothes", 0],
        ["0-Swiss_Army_knife,1-Clothes", 750],
        ["0-Swiss_Army_knife,2-Clothes", 1500],
        ["0-Swiss_Army_knife,3-Clothes", 2250],

        ["1-Swiss_Army_knife,0-Clothes", 0],
        ["1-Swiss_Army_knife,1-Clothes", 750],
        ["1-Swiss_Army_knife,2-Clothes", 1500],
        ["1-Swiss_Army_knife,3-Clothes", 2250],

        ["2-Swiss_Army_knife,0-Clothes", 0],
        ["2-Swiss_Army_knife,1-Clothes", 750],
        ["2-Swiss_Army_knife,2-Clothes", 1500],
        ["2-Swiss_Army_knife,3-Clothes", 2250],

        ["3-Swiss_Army_knife,0-Clothes", 0],
        ["3-Swiss_Army_knife,1-Clothes", 750],
        ["3-Swiss_Army_knife,2-Clothes", 1500],
        ["3-Swiss_Army_knife,3-Clothes", 2250],

        ["0-Clothes,0-Sleeping_bag", 0],
        ["0-Clothes,1-Sleeping_bag", 600],
        ["0-Clothes,2-Sleeping_bag", 1200],
        ["0-Clothes,3-Sleeping_bag", 1800],

        ["1-Clothes,0-Sleeping_bag", 0],
        ["1-Clothes,1-Sleeping_bag", 600],
        ["1-Clothes,2-Sleeping_bag", 1200],
        ["1-Clothes,3-Sleeping_bag", 1800],

        ["2-Clothes,0-Sleeping_bag", 0],
        ["2-Clothes,1-Sleeping_bag", 600],
        ["2-Clothes,2-Sleeping_bag", 1200],
        ["2-Clothes,3-Sleeping_bag", 1800],

        ["3-Clothes,0-Sleeping_bag", 0],
        ["3-Clothes,1-Sleeping_bag", 600],
        ["3-Clothes,2-Sleeping_bag", 1200],
        ["3-Clothes,3-Sleeping_bag", 1800],

        ["0-Sleeping_bag,0-Tent", 0],
        ["0-Sleeping_bag,1-Tent", 3000],
        ["0-Sleeping_bag,2-Tent", 6000],
        ["0-Sleeping_bag,3-Tent", 9000],

        ["1-Sleeping_bag,0-Tent", 0],
        ["1-Sleeping_bag,1-Tent", 3000],
        ["1-Sleeping_bag,2-Tent", 6000],
        ["1-Sleeping_bag,3-Tent", 9000],

        ["2-Sleeping_bag,0-Tent", 0],
        ["2-Sleeping_bag,1-Tent", 3000],
        ["2-Sleeping_bag,2-Tent", 6000],
        ["2-Sleeping_bag,3-Tent", 9000],

        ["3-Sleeping_bag,0-Tent", 0],
        ["3-Sleeping_bag,1-Tent", 3000],
        ["3-Sleeping_bag,2-Tent", 6000],
        ["3-Sleeping_bag,3-Tent", 9000],
    ]);
    
    return { etapas, distancias };
}

// export default crearDeck;
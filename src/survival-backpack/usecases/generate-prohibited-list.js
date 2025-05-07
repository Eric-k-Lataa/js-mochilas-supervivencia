export function generateProhibitedList(objectList) {
    const prohibitedList = [];

    objectList.forEach(objeto => {
        const [numObj, nombreObj] = objeto.split("-").map(item => isNaN(item) ? item : parseInt(item));

        for (let i = numObj + 1; i <= 3; i++) { // Solo valores mayores y menores o iguales a 3
            prohibitedList.push(`${i}-${nombreObj}`);
        }
    });

    return prohibitedList;
}

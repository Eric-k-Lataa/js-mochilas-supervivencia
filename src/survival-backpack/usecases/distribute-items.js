import { generateProhibitedList } from './generate-prohibited-list';
import { optimizeBackpack } from './optimize-backpack';
import { subtractObjects } from './subtract-objects';

export function distributeItems(numBackpacks, itemsList, BackpacksWeights) {

    let prohibitedItems = [];
    const missingItems = itemsList;
    let missingItemsArray = Array.isArray(missingItems) ? missingItems : Object.values(missingItems) || [];

    let optimizeBackpacks = new Array(numBackpacks);
    let backpack;
    for( let i = 0; i < numBackpacks; i++ ) {
        backpack = optimizeBackpack("start", 0, ["start"], 0, BackpacksWeights[i], prohibitedItems);

        optimizeBackpacks[i] = backpack;
        console.log(`backpack ${i}: `, backpack);
        console.log("optimizade: ",optimizeBackpacks[i].ruta);
        missingItemsArray = subtractObjects(missingItemsArray, optimizeBackpacks[i].ruta);
        prohibitedItems = generateProhibitedList(missingItemsArray);
    }

    return { optimizeBackpacks };
};
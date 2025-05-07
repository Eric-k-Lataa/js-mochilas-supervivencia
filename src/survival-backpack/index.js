
import { optimizeBackpack, createGraph, subtractObjects, createObjectList, generateProhibitedList, distributeItems } from './usecases';

const numBackpacks = 3;
const itemsList = createObjectList().objectList;
const backpacksWeights = [5000, 5000, 5000];

const { optimizeBackpacks } = distributeItems(numBackpacks,itemsList,backpacksWeights);

console.log("Mochila 1: ", optimizeBackpacks[0]);
console.log("Mochila 2: ", optimizeBackpacks[1]);
console.log("Mochila 3: ", optimizeBackpacks[2]);





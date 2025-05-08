
import { optimizeBackpack, createGraph, subtractObjects, createObjectList, generateProhibitedList, distributeItems } from './usecases';

const numBackpacks = 3;
const itemsList = createObjectList().objectList;
const backpacksWeights = [5000, 5000, 5000];

const { optimizeBackpacks } = distributeItems(numBackpacks,itemsList,backpacksWeights);

console.log("Survival_Backpack 1: ", optimizeBackpacks[0]);
console.log("Survival_Backpack 2: ", optimizeBackpacks[1]);
console.log("Survival_Backpack 3: ", optimizeBackpacks[2]);
const userBackpacks = [
  { pesoTotal: 3260, ruta: ["1-Tent", "2-Linterna", "1-Swiss_Army_knife"] },
  { pesoTotal: 2250, ruta: ["2-Sleeping_bag", "1-Frying_pan", "1-Clothes"] },
  { pesoTotal: 4500, ruta: ["3-Clothes", "2-Swiss_Army_knife", "0-Tent"] }
];
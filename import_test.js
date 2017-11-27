import {Aborigine} from "./aborigine.js";

let mouse = new Aborigine(4);
mouse.whatEating("Зерно");
mouse.onWhomHunts("yoyo");
console.log(mouse.hunts);
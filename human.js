import {Animal} from "./animal.js";

export class Human extends Animal {
    constructor(paws) {
        super(paws);
        this.hunts = true;
    }
        onWhomHunts(value) {
            console.log("Охотится на " + value);
    }
}
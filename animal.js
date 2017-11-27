export class Animal {
    constructor(paws){
        this.paws = paws;
        this.eat = true;
        this.onWhomHunts = function (value) {
            console.log("Охотится на " + value);
        };
        this.whatEating = function (value) {
            console.log("Еда - " + value);
        }
    }
}
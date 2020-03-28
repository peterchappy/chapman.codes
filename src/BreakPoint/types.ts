export class MaxWidthPx {
    width: number;

    constructor(x: number){
        this.width = x;
    }

    toString(){
        return `(max-width: ${this.width}px)`
    }
}



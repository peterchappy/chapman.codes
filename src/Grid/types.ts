export class GridCSSItem {

}

export class GridSpan extends GridCSSItem {
    value: number

    constructor(x:number){
        super();
        this.value = x
    }

    toString(){
        return `span ${this.value}`
    }
}

export class FR extends GridCSSItem {
    value: number

    constructor(x:number){
        super();
        this.value = x
    }

    toString(){
        return `${this.value}fr`
    }
}

export class Repeat extends GridCSSItem {
    x: number
    y: number;

    constructor(x:number, y:number){
        super();
        this.x = x
        this.y = y
    }

    toString(){
        return `repeat(${this.x}, ${this.y})`
    }
}

export type ResponsiveGridValue = [number,number] | GridSpan

export type ResponsiveMapping<T> = {
    xs: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}

export type ResponsiveGridMapping = ResponsiveMapping<ResponsiveGridValue>


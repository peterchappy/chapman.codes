export class MinWidthPx {
  width: number;

  constructor(x: number) {
    this.width = x;
  }

  toString() {
    return `(min-width: ${this.width}px)`;
  }
}

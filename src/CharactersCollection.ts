export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data.slice(0, leftIndex);
    const middleHand = this.data.slice(leftIndex + 1, rightIndex);
    const rightHand = this.data.slice(rightIndex + 1);
    this.data =
      leftHand +
      this.data[rightIndex] +
      middleHand +
      this.data[leftIndex] +
      rightHand;
  }
}

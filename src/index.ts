class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    for (let i = this.collection.length; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const key = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = key;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

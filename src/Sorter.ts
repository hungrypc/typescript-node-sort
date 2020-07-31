export class Sorter<T> {
  constructor(public collection: T[]) {
    this.collection = collection
  }

  sort(): void {
  //   const { length } = this.collection
  //   let noSwaps
  //   for (let i = length; i > 0; i--) {
  //     noSwaps = true
  //     for (let j = 0; j < i - 1; j++) {
  //       if (this.collection[j] > this.collection[j+1]) {
  //         let temp = this.collection[j]
  //         this.collection[j] = this.collection[j+1]
  //         this.collection[j+1] = temp
  //         noSwaps = false
  //       }
  //     }
  //     if (noSwaps) break
  //   }
  }
}
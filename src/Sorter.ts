interface Collection {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export class Sorter {
  constructor(public collection: Collection) {
    this.collection = collection
  }

  sort(): void {
    const { length } = this.collection
    let noSwaps
    for (let i = length; i > 0; i--) {
      noSwaps = true
      for (let j = 0; j < i - 1; j++) {
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1)
          noSwaps = false
        }
      }
      if (noSwaps) break
    }
  }
}
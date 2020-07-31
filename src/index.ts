class Sorter<T> {
  constructor(public collection: T[]) {
    this.collection = collection
  }

  sort(): void {

  }
}

const sorter = new Sorter<number>([10, 2, -3, 0])
sorter.sort()
console.log(sorter.collection)
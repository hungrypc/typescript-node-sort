export class NumbersCollection {
  constructor(public data: number[]) {
    this.data = data
  }

  get length(): number {
    return this.data.length
  }

  // comparison happens here, returns boolean => should swap
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  // swapping logic happens here
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = temp
  }
}
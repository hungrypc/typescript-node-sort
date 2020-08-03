export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void
  abstract length: number

  sort(): void {
    const { length } = this
    let noSwaps
    for (let i = length; i > 0; i--) {
      noSwaps = true
      for (let j = 0; j < i - 1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1)
          noSwaps = false
        }
      }
      if (noSwaps) break
    }
  }
}
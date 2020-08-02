export class Node {
  next: Node | null = null

  constructor(public value: number) { }
}

export class LinkedList {
  head: Node | null = null

  add(data: number): void {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      return
    }
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
  }

  get length(): number {
    if (!this.head) return 0

    let length = 1
    let currentNode = this.head
    while (currentNode.next) {
      length++
      currentNode = currentNode.next
    }

    return length
  }

  at (index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    let counter = 0
    let currentNode: Node | null = this.head
    while (currentNode) {
      if (counter === index) return currentNode
      counter++
      currentNode = currentNode.next
    }

    throw new Error('Index out of bounds')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).value > this.at(rightIndex).value
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('nothing to swap')
    }

    
    // const leftNode = this.at(leftIndex)
    // const leftNodePrev = this.at(leftIndex-1)
    // const rightNode = this.at(rightIndex)
    // const rightNodeNext = this.at(rightIndex+1)

    // leftNodePrev.next = rightNode
    // rightNode.next = leftNode
    // leftNode.next = rightNodeNext
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const temp = leftNode.value
    leftNode.value = rightNode.value
    rightNode.value = temp    
  }

  print(): void {
    if (!this.head) {
      return
    }

    let currentNode: Node | null = this.head
    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}
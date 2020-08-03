import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'


const numbersCollection = new NumbersCollection([10, 2, -3, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('asdfgh')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(4)
linkedList.add(10)
linkedList.add(-3)
linkedList.add(2)
linkedList.print()
console.log('---')
linkedList.sort()
linkedList.print()
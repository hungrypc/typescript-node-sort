import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { Node, LinkedList } from './LinkedList'


const numbersCollection = new NumbersCollection([10, 2, -3, 0])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)

const charactersCollection = new CharactersCollection('asdfgh')
const sorter2 = new Sorter(charactersCollection)
sorter2.sort()
console.log(sorter2.collection)


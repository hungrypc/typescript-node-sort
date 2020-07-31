import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection' 

const numbersCollection = new NumbersCollection([10, 2, -3, 0])
const charactersCollection = new CharactersCollection('asdfgh')
const sorter = new Sorter(numbersCollection)
const sorter2 = new Sorter(charactersCollection)
sorter.sort()
sorter2.sort()
console.log(sorter.collection)
console.log(sorter2.collection)
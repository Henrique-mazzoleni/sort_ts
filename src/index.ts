import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const arraySorter = new Sorter(numbersCollection);
arraySorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Hello There!');
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(-3);
linkedList.add(1);
linkedList.add(-24);
linkedList.print();

const listSorter = new Sorter(linkedList);
listSorter.sort();
linkedList.print();
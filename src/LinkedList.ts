import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(value: number): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currNode = this.head;
    while (currNode.next) currNode = currNode.next;
    currNode.next = newNode;
  }

  get length(): number {
    let length = 0;
    let tail = this.head;
    while (tail) {
      tail = tail.next;
      length++;
    }
    return length;
  }

  at(index: number): Node | null {
    let tail = this.head;
    for (let i = 0; i < index; i++) {
      if (!tail) return null;
      tail = tail.next;
    }
    return tail;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftValue = this.at(leftIndex)?.value;
    const rightValue = this.at(rightIndex)?.value;
    if (!leftValue || !rightValue) return false;
    return leftValue > rightValue;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    if (!leftNode || !rightNode) return;

    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  print(): void {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

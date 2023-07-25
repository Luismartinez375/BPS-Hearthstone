export class CardClass {
  cardId: any;
  cardName: any;
  cardSet: any;
  type: any;
  rarity: any;
  attack: any;
  health: any;
  text: any;
  race: any;
  playerClass: any;
  img: any;
  mechanics?: string[];
}

export class LinkedListNode<T> {
  index: number;
  value: T[];
  next: LinkedListNode<T> | null;

  constructor(index: number, value: T[]) {
    this.index = index;
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
   head: LinkedListNode<T> | null;
   tail: LinkedListNode<T> | null;
   currentIndex: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.currentIndex = 0;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  append(value: T[]): void {
    const newNode = new LinkedListNode(this.currentIndex, value);
    this.currentIndex++;

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    // Connect the tail to the head to make the list circular
    if (this.head !== null) {
      this.tail!.next = this.head;
    }
  }

  print(): void {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    do {
      console.log(`Index ${current.index}:`, current.value);
      current = current.next!;
    } while (current !== this.head);
  }

  getTail(): T[] | null {
    return this.tail?.value || null;
  }

  // Get the first 8 elements of the list as a regular array
    getItemsBetweenIndexes(startIndex: number, endIndex: number): [CardClass[]] {
    const elements: [any[]] = [[]];
    if (this.head !== null) {
      let current = this.head;
      while (current.index !== startIndex && current !== this.tail) {
        current = current.next!;
      }

      let count = startIndex;
      while (current !== null && count <= endIndex) {
        elements.push(current.value);
        current = current.next!;
        count++;
      }
    }
    return elements;
  }
}

export const SplitIntoSmallerLists = (list: CardClass[], chunkSize: number): LinkedList<CardClass> => {
  const linkedList = new LinkedList<CardClass>();

  for (let i = 0; i < list.length; i += chunkSize) {
    linkedList.append(list.slice(i, i + chunkSize));
  }

  return linkedList;
};



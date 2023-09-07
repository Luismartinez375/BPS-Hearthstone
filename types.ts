import { JsonProperty, Serializable } from 'ts-jackson';

@Serializable()
export class IdClass {
  @JsonProperty('place_id')
  id: any;
}

@Serializable()
export class PlaceClass {
  @JsonProperty('business_status')
  business_status: any;
  @JsonProperty('geometry')
  geometry: any;
  @JsonProperty('name')
  name: any;
  @JsonProperty('opening_hours')
  opening_hours: any;
  @JsonProperty('formatted_phone_number')
  phone: any;
  @JsonProperty('place_id')
  place_id: any;
  @JsonProperty('rating')
  rating: any;
  @JsonProperty('vicinity')
  vicinity: any;
  @JsonProperty('website')
  website: any;
}

@Serializable()
export class CardClass {
  @JsonProperty('cardId')
  cardid: any;
  @JsonProperty('name')
  cardname: any;
  @JsonProperty('cardSet')
  cardset: any;
  @JsonProperty('type')
  type: any;
  @JsonProperty('rarity')
  rarity: any;
  @JsonProperty('attack')
  attack: any;
  @JsonProperty('health')
  health: any;
  @JsonProperty('text')
  text: any;
  @JsonProperty('race')
  race: any;
  @JsonProperty('playerClass')
  playerclass: any;
  @JsonProperty('img')
  img?: any;
  @JsonProperty('mechanics')
  mechanics?: any;
  @JsonProperty('cost')
  mana?: any;
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

export class LinkedList<T> {
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

  getTail(): LinkedListNode<T> | null {
    return this.tail || null;
  }

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

export const SplitIntoSmallerLists = (
  list: CardClass[],
  chunkSize: number
): LinkedList<CardClass> => {
  const linkedList = new LinkedList<CardClass>();

  for (let i = 0; i < list.length; i += chunkSize) {
    linkedList.append(list.slice(i, i + chunkSize));
  }

  return linkedList;
};

export class ClassType {
  name: string;
  icon: string;

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }
}

export const classes: ClassType[] = [
  new ClassType('Mage', 'public/mage_emblem/mage emblem@3x.webp'),
  new ClassType('Druid', 'public/druid_emblem/druid emblem@3x.webp'),
  new ClassType('Hunter', 'public/hunter_emblem/hunter emblem@3x.webp'),
  new ClassType('Priest', 'public/priest_emblem/preist emblem@3x.webp'),
];

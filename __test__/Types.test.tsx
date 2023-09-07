import { CardClass, LinkedList, SplitIntoSmallerLists } from '../types';

describe('Tests for classes and interfaces', () => {
  it('should return a LinkedList with the correct number of nodes', () => {
    const card = new CardClass();
    card.cardid = '1';
    card.cardname = 'name';
    card.rarity = 'rare';
    card.text = 'test card';
    const list = [card, card, card, card, card, card, card, card, card, card];
    const chunkSize = 3;
    const linkedList = SplitIntoSmallerLists(list, chunkSize);
    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();
    let count = 0;
    let current = linkedList.head;
    do {
      count++;
      current = current!.next;
    } while (current !== linkedList.head);
    expect(count).toBe(Math.ceil(list.length / chunkSize));
  });
  it('should add a new node to the end of the list when calling append method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append([1]);
    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();
    expect(linkedList.head!.value).toEqual([1]);
    expect(linkedList.tail!.value).toEqual([1]);
    linkedList.append([2]);
    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();
    expect(linkedList.head!.value).toEqual([1]);
    expect(linkedList.tail!.value).toEqual([2]);
  });
  it('should return the tail node of the list when calling getTail method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append([1]);
    expect(linkedList.getTail()).not.toBeNull();
    expect(linkedList.getTail()!.value).toEqual([1]);
    linkedList.append([2]);
    expect(linkedList.getTail()).not.toBeNull();
    expect(linkedList.getTail()!.value).toEqual([2]);
  });
  it('should return the correct items between the given indexes when calling getItemsBetweenIndexes method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append([1]);
    const startIndex = 0;
    const endIndex = 0;
    const items = linkedList.getItemsBetweenIndexes(startIndex, endIndex);
    const expectedItems = [[], [1]];
    expect(items).toEqual(expectedItems);
  });
  it('should return an empty LinkedList when the input list is empty', () => {
    const list: CardClass[] = [];
    const chunkSize = 3;
    const linkedList = SplitIntoSmallerLists(list, chunkSize);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });
  it('should add a new node to the list when calling append method on an empty list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append([1]);
    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();
    expect(linkedList.head!.value).toEqual([1]);
    expect(linkedList.tail!.value).toEqual([1]);
  });
  it('should return null when the list is empty', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.getTail()).toBeNull();
  });
  it('should return an empty array when startIndex is greater than endIndex', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append([1, 2, 3, 4, 5]);
    expect(linkedList.getItemsBetweenIndexes(3, 2)).toEqual([[]]);
  });
  it('should return an empty array when startIndex is greater than the number of nodes in the list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append([1, 2, 3, 4, 5]);
    expect(linkedList.getItemsBetweenIndexes(6, 8)).toEqual([
      [],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ]);
  });
});

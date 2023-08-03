// import arcane from '../../../public/Mask group_2023-07-21/Mask group@2x.webp';
// import book from '../../../public/book/Mask group@2x.webp';
// import crow from '../../../public/crow/Mask group@2x.webp';

import { CardClass } from '../../../types';
import Filter from '../components/filters/filter';

// const card: CardClass = {
//   cardId: 'EX1_271',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card2: CardClass = {
//   cardId: 'EX1_272',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card3: CardClass = {
//   cardId: 'EX1_273',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card4: CardClass = {
//   cardId: 'EX1_274',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: crow,
// };
// const card5: CardClass = {
//   cardId: 'EX1_275',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card6: CardClass = {
//   cardId: 'EX1_276',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: crow,
// };
// const card7: CardClass = {
//   cardId: 'EX1_277',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card8: CardClass = {
//   cardId: 'EX1_278',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: crow,
// };
// const card9: CardClass = {
//   cardId: 'EX1_279',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card10: CardClass = {
//   cardId: 'EX1_280',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: arcane,
// };
// const card11: CardClass = {
//   cardId: 'EX1_281',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };
// const card12: CardClass = {
//   cardId: 'EX1_282',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: crow,
// };
// const card13: CardClass = {
//   cardId: 'EX1_283',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };
// const card14: CardClass = {
//   cardId: 'EX1_284',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };
// const card15: CardClass = {
//   cardId: 'EX1_285',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: crow,
// };
// const card16: CardClass = {
//   cardId: 'EX1_286',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };
// const card17: CardClass = {
//   cardId: 'EX1_287',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };
// const card18: CardClass = {
//   cardId: 'EX1_288',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };
// const card19: CardClass = {
//   cardId: 'EX1_289',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: crow,
// };
// const card20: CardClass = {
//   cardId: 'EX1_290',
//   cardName: 'Arcane Missiles',
//   cardSet: 'Classic',
//   type: 'Spell',
//   rarity: 'Common',
//   attack: 0,
//   health: 0,
//   text: 'Deal $3 damage randomly split among all enemies.',
//   race: 'Undead',
//   playerClass: 'Mage',
//   img: book,
// };

// const cards = [
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,

//   card20,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,

//   card20,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,
//   card16,
//   card17,
//   card18,
//   card19,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card16,
//   card17,
//   card18,
//   card19,
//   card20,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card,
//   card2,
//   card3,
//   card4,
//   card5,
//   card6,
//   card7,
//   card8,
//   card9,
//   card10,
//   card11,
//   card12,
//   card13,
//   card14,
//   card15,

//   card20,
// ];

export default async function Page() {
  const cards: CardClass[] = await fetch('/api/cards').then((res) =>
    res.json()
  );
  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-hearthstone_bg">
      <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1">
        Favorites
      </h1>
      <Filter cardClass=" " cards={cards}></Filter>
    </div>
  );
}

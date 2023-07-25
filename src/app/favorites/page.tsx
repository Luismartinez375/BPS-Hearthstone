'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import down from '../../../public/Keyboard arrow down.svg';
import arcane from '../../../public/Mask group_2023-07-21/Mask group@2x.webp';
import book from '../../../public/book/Mask group@2x.webp';
import crow from '../../../public/crow/Mask group@2x.webp';
import filter from '../../../public/filter.svg';
import { CardClass } from '../../../types';
import GridContainer from '../components/BPS-Carousel/gridContainer';
import HearthButton from '../components/button/hearthbutton';
import HearthScroll from '../components/hearthScroll/hearthScroll';

const mana = ['Mana: low to high', 'Mana: high to low'];
const atk = [
  'Any Attack',
  'Attack: 0',
  'Attack: 1',
  'Attack: 2',
  'Attack: 3',
  'Attack: 4',
  'Attack: 5',
  'Attack: 6',
  'Attack: 7',
  'Attack: 8',
  'Attack: 9',
  'Attack: 10+',
];
const health = [
  'Any Health',
  'Health: 0',
  'Health: 1',
  'Health: 2',
  'Health: 3',
  'Health: 4',
  'Health: 5',
  'Health: 6',
  'Health: 7',
  'Health: 8',
  'Health: 9',
  'Health: 10+',
];

const cardType = ['Any Type', 'Hero', 'Minion', 'Spell', 'Weapon', 'Location'];

const minionType = [
  'Any Type',
  'All',
  'Beast',
  'Demon',
  'Dragon',
  'Elemental',
  'Mech',
  'Murloc',
  'Naga',
  'Pirate',
  'Quilboar',
  'Totem',
  'Undead',
];

const rarity = ['Any Rarity', 'Common', 'Free', 'Rare', 'Epic', 'Legendary'];

const keywords = [
  'Any Keyword',
  'Adapt',
  'Battlecry',
  'Charge',
  'Colosal +X',
  'Combo',
  'Corpse',
  'Corrupt',
  'Counter',
  'Deathrattle',
];
const card: CardClass = {
  cardId: 'EX1_271',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card2: CardClass = {
  cardId: 'EX1_272',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card3: CardClass = {
  cardId: 'EX1_273',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card4: CardClass = {
  cardId: 'EX1_274',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: crow,
};
const card5: CardClass = {
  cardId: 'EX1_275',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card6: CardClass = {
  cardId: 'EX1_276',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: crow,
};
const card7: CardClass = {
  cardId: 'EX1_277',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card8: CardClass = {
  cardId: 'EX1_278',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: crow,
};
const card9: CardClass = {
  cardId: 'EX1_279',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card10: CardClass = {
  cardId: 'EX1_280',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: arcane,
};
const card11: CardClass = {
  cardId: 'EX1_281',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};
const card12: CardClass = {
  cardId: 'EX1_282',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: crow,
};
const card13: CardClass = {
  cardId: 'EX1_283',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};
const card14: CardClass = {
  cardId: 'EX1_284',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};
const card15: CardClass = {
  cardId: 'EX1_285',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: crow,
};
const card16: CardClass = {
  cardId: 'EX1_286',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};
const card17: CardClass = {
  cardId: 'EX1_287',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};
const card18: CardClass = {
  cardId: 'EX1_288',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};
const card19: CardClass = {
  cardId: 'EX1_289',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: crow,
};
const card20: CardClass = {
  cardId: 'EX1_290',
  cardName: 'Arcane Missiles',
  cardSet: 'Classic',
  type: 'Spell',
  rarity: 'Common',
  attack: 0,
  health: 0,
  text: 'Deal $3 damage randomly split among all enemies.',
  race: 'Undead',
  playerClass: 'Mage',
  img: book,
};

const cards = [
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card11,
  card12,
  card13,
  card14,
  card15,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,

  card20,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card11,
  card12,
  card13,
  card14,
  card15,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,

  card20,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card11,
  card12,
  card13,
  card14,
  card15,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card16,
  card17,
  card18,
  card19,
  card20,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,

  card20,
];

export default function Page() {
  // Handles the scroll
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  // Toggles for buttons
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);
  // Switch filters
  const [manafilter, userManafilter] = useState(mana[0]);

  //Toggle functions
  function toggleFilter() {
    filterToggle ? userFilterToggle(false) : userFilterToggle(true);
  }
  function toggleMana() {
    userManaToggle(manaToggle ? false : true);
  }
  function toggleAttack() {
    userAttackToggle(attackToggle ? false : true);
  }
  function toggleHealth() {
    userHealthToggle(healthToggle ? false : true);
  }
  function toggleCardType() {
    userCardTypeToggle(cardTypeToggle ? false : true);
  }
  function toggleMinionType() {
    userMinionTypeToggle(minionTypeToggle ? false : true);
  }
  function toggleRarity() {
    userRarityToggle(rarityToggle ? false : true);
  }
  function toggleKeywords() {
    userKeywordsToggle(keywordsToggle ? false : true);
  }

  //Filter functions
  function userManaFilter() {
    if (manafilter === mana[0]) {
      userManafilter(mana[1]);
    } else if (manafilter === mana[1]) {
      userManafilter(mana[0]);
    }
  }
  function userAttackFilter() {}
  return (
    <>
      <div className="flex flex-col items-center gap-10 min-h-screen bg-hearthstone_bg bg-repeat w-full relative sm:top-10">
        <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1">
          Favorites
        </h1>
        <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden">
          <p className="bg-navbar w-[250px] h-[58px] text-white text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
            Manage Filters <Image src={down} alt="" className=""></Image>
          </p>
        </button>
        {/* Filter Row */}
        <div className=" max-sm:hidden flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5">
          {/* Mana bar */}
          <div className="flex flex-row items-center gap-2">
            <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
            <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white h-16">
              <div className=" flex flex-row justify-between bg-button_bg rounded-full h-[58px] ">
                <button className=" font-outline-1 mr-1 w-12 text-xl drop-shadow-lg ">
                  0
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  1
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  2
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  3
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  4
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  5
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  6
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  7
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  8
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  9
                </button>
                <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                  10+
                </button>
              </div>
            </div>
          </div>
          {/*Sortby Row */}
          <div className="flex flex-row gap-5 items-start">
            <p className=" font-serif font-thin text-white text-xl">sort by:</p>
            <div className=" flex flex-col items-center gap-4 ">
              <HearthButton
                text={manafilter}
                width={'64'}
                innerwidth={'250'}
                color={'button_bg'}
                image2={down}
                funct={toggleMana}
              ></HearthButton>
              {manaToggle && (
                <HearthScroll list={mana} funct={userManaFilter}></HearthScroll>
              )}
            </div>
            <HearthButton
              text={'Filter'}
              width={'52'}
              innerwidth={'200'}
              color="button_bg"
              image={filter}
              funct={toggleFilter}
            ></HearthButton>
          </div>
        </div>

        {/* Filters row */}
        {filterToggle && (
          <div className="grid gap-10  lg:grid-cols-6 grid-cols-3 max-sm:hidden">
            <div className="flex flex-col gap-2" onMouseDown={onMouseDown}>
              <HearthButton
                text={'Attack'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleAttack}
              ></HearthButton>
              {attackToggle && <HearthScroll list={atk}></HearthScroll>}
            </div>
            <div className="flex flex-col gap-2">
              <HearthButton
                text={'Health'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleHealth}
              ></HearthButton>
              {healthToggle && <HearthScroll list={health}></HearthScroll>}
            </div>
            <div className="flex flex-col gap-2">
              <HearthButton
                text={'Card Type'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleCardType}
              ></HearthButton>
              {cardTypeToggle && <HearthScroll list={cardType}></HearthScroll>}
            </div>
            <div className="flex flex-col gap-2">
              <HearthButton
                text={'Minion Type'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleMinionType}
              ></HearthButton>
              {minionTypeToggle && (
                <HearthScroll list={minionType}></HearthScroll>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <HearthButton
                text={'Rarity'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleRarity}
              ></HearthButton>
              {rarityToggle && <HearthScroll list={rarity}></HearthScroll>}
            </div>
            <div className="flex flex-col gap-2">
              <HearthButton
                text={'Keywords'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleKeywords}
              ></HearthButton>
              {keywordsToggle && <HearthScroll list={keywords}></HearthScroll>}
            </div>
          </div>
        )}
        <GridContainer cards={cards}></GridContainer>
      </div>
    </>
  );
}

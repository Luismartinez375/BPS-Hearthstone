'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import down from '../../../../public/Keyboard arrow down.svg';
import filter from '../../../../public/filter.svg';
import { CardClass } from '../../../../types';
import GridContainer from '../BPS-Carousel/gridContainer';
import MobileCarousel from '../BPS-Carousel/mobileCarousel';
import HearthButton from '../button/hearthbutton';
import HearthScroll from '../hearthScroll/hearthScroll';
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
function getBackgroundClass(classId: string): string {
  switch (classId) {
    case 'Mage':
      return ' bg-mage_bg';
    case 'Hunter':
      return 'bg-hunter_bg_sm sm:bg-hunter_bg';
    case 'Druid':
      return 'bg-druid_bg_sm sm:bg-druid_bg';
    case 'Priest':
      return 'bg-priest_bg_sm sm:bg-priest_bg';
    case 'Rogue':
      return 'bg-rouge_bg_sm sm:rouge_bg';
    case 'Paladin':
      return 'bg-paladin_bg_sm sm:bg-paladin_bg';
    case 'Shaman':
      return 'bg-shaman_bg_sm sm:bg-shaman_bg';
    case 'DemonHunter':
      return 'bg-demonhunter_bg_sm sm:bg-demonhunter_bg';
    case 'Warlock':
      return 'bg-warlock_bg_sm sm:bg-warlock_bg';
    case 'Warrior':
      return 'bg-warrior_bg_sm sm:bg-warrior_bg';
    default:
      return '';
  }
}
type FilterProps = {
  cardClass: string;
  cards: CardClass[];
};

export default function Filter({ cardClass, cards }: FilterProps) {
  const [filteredCards, userFilteredCards] = useState(cards);
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [manafilter, userManafilter] = useState(mana[0]);
  const [toggleButton, setButton] = useState(false);
  const [filterMsg, SetFilter] = useState('');
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({});

  useEffect(() => {
    // only execute all the code below in client side
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //Toggle functions
  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }
  function toggleFilter() {
    filterToggle ? userFilterToggle(false) : userFilterToggle(true);
  }
  function toggleMana() {
    userManaToggle(manaToggle ? false : true);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleAttack() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : true);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleHealth() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : true);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleCardType() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : true);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleMinionType() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : true);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleRarity() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : true);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleKeywords() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : true);
  }

  //Filter functions
  function userManaFilter() {
    if (manafilter === mana[0]) {
      toggleMana();
      userManafilter(mana[1]);
      toggleMana();
    } else if (manafilter === mana[1]) {
      userManafilter(mana[0]);
    }
  }
  function userAttackFilter(atk: string) {
    if (atk === 'Any Attack') {
      userFilteredCards(cards);
      setButton(false);
    } else if (atk === 'Attack: 0') {
      userFilteredCards(
        cards.filter((card) => card.attack === 0 || card.attack === '0')
      );
      setButton(true);
      SetFilter('ATK:0');
    } else if (atk === 'Attack: 1') {
      userFilteredCards(
        cards.filter((card) => card.attack === 1 || card.attack === '1')
      );
      setButton(true);
      SetFilter('ATK:1');
    } else if (atk === 'Attack: 2') {
      userFilteredCards(
        cards.filter((card) => card.attack === 2 || card.attack === '2')
      );
      setButton(true);
      SetFilter('ATK:2');
    } else if (atk === 'Attack: 3') {
      userFilteredCards(
        cards.filter((card) => card.attack === 3 || card.attack === '3')
      );
      setButton(true);
      SetFilter('ATK:3');
    } else if (atk === 'Attack: 4') {
      userFilteredCards(
        cards.filter((card) => card.attack === 4 || card.attack === '4')
      );
      setButton(true);
      SetFilter('ATK:4');
    } else if (atk === 'Attack: 5') {
      userFilteredCards(
        cards.filter((card) => card.attack === 5 || card.attack === '5')
      );
      setButton(true);
      SetFilter('ATK:5');
    } else if (atk === 'Attack: 6') {
      userFilteredCards(
        cards.filter((card) => card.attack === 6 || card.attack === '6')
      );
      setButton(true);
      SetFilter('ATK:6');
    } else if (atk === 'Attack: 7') {
      userFilteredCards(
        cards.filter((card) => card.attack === 7 || card.attack === '7')
      );
    } else if (atk === 'Attack: 8') {
      userFilteredCards(
        cards.filter((card) => card.attack === 8 || card.attack === '8')
      );
      setButton(true);
      SetFilter('ATK:8');
    } else if (atk === 'Attack: 9') {
      userFilteredCards(
        cards.filter((card) => card.attack === 9 || card.attack === '9')
      );
      setButton(true);
      SetFilter('ATK:9');
    } else if (atk === 'Attack: 10+') {
      userFilteredCards(
        cards.filter((card) => card.attack >= 10 || card.attack === '10')
      );
      setButton(true);
      SetFilter('ATK:10+');
    }
    toggleAttack();
  }
  function userHealthFilter(hlth: string) {
    if (hlth === 'Any Health') {
      userFilteredCards(cards);
      setButton(false);
    } else if (hlth === 'Health: 0') {
      userFilteredCards(
        cards.filter((card) => card.health === 0 || card.health === '0')
      );
      setButton(true);
      SetFilter('HLT:0');
    } else if (hlth === 'Health: 1') {
      userFilteredCards(
        cards.filter((card) => card.health === 1 || card.health === '1')
      );
      setButton(true);
      SetFilter('HLT:1');
    } else if (hlth === 'Health: 2') {
      userFilteredCards(
        cards.filter((card) => card.health === 2 || card.health === '2')
      );
      setButton(true);
      SetFilter('HLT:2');
    } else if (hlth === 'Health: 3') {
      userFilteredCards(
        cards.filter((card) => card.health === 3 || card.health === '3')
      );
      setButton(true);
      SetFilter('HLT:3');
    } else if (hlth === 'Health: 4') {
      userFilteredCards(
        cards.filter((card) => card.health === 4 || card.health === '4')
      );
      setButton(true);
      SetFilter('HLT:4');
    } else if (hlth === 'Health: 5') {
      userFilteredCards(
        cards.filter((card) => card.health === 5 || card.health === '5')
      );
      setButton(true);
      SetFilter('HLT:5');
    } else if (hlth === 'Health: 6') {
      userFilteredCards(
        cards.filter((card) => card.health === 6 || card.health === '6')
      );
      setButton(true);
      SetFilter('HLT:6');
    } else if (hlth === 'Health: 7') {
      userFilteredCards(
        cards.filter((card) => card.health === 7 || card.health === '7')
      );
      setButton(true);
      SetFilter('HLT:7');
    } else if (hlth === 'Health: 8') {
      userFilteredCards(
        cards.filter((card) => card.health === 8 || card.health === '8')
      );
      setButton(true);
      SetFilter('HLT:8');
    } else if (hlth === 'Health: 9') {
      userFilteredCards(
        cards.filter((card) => card.health === 9 || card.health === '9')
      );
      setButton(true);
      SetFilter('HLT:9');
    } else if (hlth === 'Health: 10+') {
      userFilteredCards(
        cards.filter((card) => card.health >= 10 || card.health === '10')
      );
      setButton(true);
      SetFilter('HLT:10+');
    }
    toggleHealth();
  }
  function userTypeFilter(type: string) {
    if (type === 'Any Type') {
      userFilteredCards(cards);
      setButton(false);
    } else if (type === 'Hero') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Hero'));
      setButton(true);
      SetFilter('HRO');
    } else if (type === 'Minion') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Minion'));
      setButton(true);
      SetFilter('MIN');
    } else if (type === 'Spell') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Spell'));
      setButton(true);
      SetFilter('SPL');
    } else if (type === 'Weapon') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Weapon'));
      setButton(true);
      SetFilter('WPN');
    } else if (type === 'Location') {
      userFilteredCards(
        filteredCards.filter((card) => card.type === 'Location')
      );
      setButton(true);
      SetFilter('LOC');
    }
    toggleCardType();
  }

  function userMinionFilter(race: string) {
    if (race === 'All') {
      userFilteredCards(cards);
      setButton(false);
    } else if (race === 'Beast') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Beast'));
      setButton(true);
      SetFilter('BST');
    } else if (race === 'Demon') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Demon'));
      setButton(true);
      SetFilter('DMN');
    } else if (race === 'Dragon') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Dragon'));
      setButton(true);
      SetFilter('DRGN');
    } else if (race === 'Elemental') {
      userFilteredCards(
        filteredCards.filter((card) => card.race === 'Elemental')
      );
      setButton(true);
      SetFilter('ELMNT');
    } else if (race === 'Mech') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Mech'));
      setButton(true);
      SetFilter('MECH');
    } else if (race === 'Murloc') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Murloc'));
      setButton(true);
      SetFilter('MRLC');
    } else if (race === 'Naga') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Naga'));
      setButton(true);
      SetFilter('NAGA');
    } else if (race === 'Pirate') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Pirate'));
      setButton(true);
      SetFilter('PRT');
    } else if (race === 'Quilboar') {
      userFilteredCards(
        filteredCards.filter((card) => card.race === 'Quilboar')
      );
      setButton(true);
      SetFilter('QLBR');
    } else if (race === 'Totem') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Totem'));
      setButton(true);
      SetFilter('TTM');
    } else if (race === 'Undead') {
      userFilteredCards(filteredCards.filter((card) => card.race >= 'Undead'));
      setButton(true);
      SetFilter('UNDD');
    }
    toggleMinionType();
  }
  function useRarityFilter(rarity: string) {
    if (rarity === 'Any Rarity') {
      userFilteredCards(cards);
      setButton(false);
    } else if (rarity === 'Common') {
      userFilteredCards(
        filteredCards.filter((card) => card.rarity === 'Common')
      );
      setButton(true);
      SetFilter('COMN');
    } else if (rarity === 'Free') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Free'));
      setButton(true);
      SetFilter('FREE');
    } else if (rarity === 'Rare') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Rare'));
      setButton(true);
      SetFilter('RARE');
    } else if (rarity === 'Epic') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Epic'));
      setButton(true);
      SetFilter('EPIC');
    } else if (rarity === 'Legendary') {
      userFilteredCards(
        filteredCards.filter((card) => card.rarity === 'Legendary')
      );
      setButton(true);
      SetFilter('LGND');
    }
    toggleRarity();
  }
  function useKewordFilter(mechanics: string) {
    if (mechanics === 'Any Keyword') {
      userFilteredCards(cards);
      setButton(false);
    } else if (mechanics === 'Adapt') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Adapt';
          }
        })
      );
      setButton(true);
      SetFilter('ADPT');
    } else if (mechanics === 'Battlecry') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Battlecry';
          }
        })
      );
      setButton(true);
      SetFilter('BTLC');
    } else if (mechanics === 'Charge') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Charge';
          }
        })
      );
      setButton(true);
      SetFilter('CHRG');
    } else if (mechanics === 'Colosal +X') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Colosal +X';
          }
        })
      );
      setButton(true);
      SetFilter('COLS');
    } else if (mechanics === 'Combo') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Combo';
          }
        })
      );
      setButton(true);
      SetFilter('CMBO');
    } else if (mechanics === 'Corpse') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Corpse';
          }
        })
      );
      setButton(true);
      SetFilter('CRPS');
    } else if (mechanics === 'Corrupt') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Corrupt';
          }
        })
      );
      setButton(true);
      SetFilter('CRPT');
    } else if (mechanics === 'Counter') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Counter';
          }
        })
      );
      setButton(true);
      SetFilter('CNTR');
    } else if (mechanics === 'Deathrattle') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Deathrattle';
          }
        })
      );
      setButton(true);
      SetFilter('DTRT');
    }
    toggleKeywords();
  }

  return (
    <div
      className={` ${getBackgroundClass(
        cardClass.replace('%20', '')
      )} sm:bg-cover bg-center-custom bg-zoomed-in flex flex-col pt-5`}
    >
      <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1"></h1>
      <button
        onClick={handleToggle}
        className="py-1 mt-5 self-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden"
      >
        <p className="bg-navbar w-[250px] h-[58px] text-white text-md text-center p-3 rounded-full flex flex-row justify-center items-center ">
          Manage Filters <Image src={down} alt="" className=""></Image>
        </p>
      </button>
      {toggle && (
        <div className="sm:hidden animate-open-menu fixed bg-brown bg-opacity-80 w-full h-full text-4xl flex flex-col top-0 left-0 z-40">
          <button
            className=" place-self-end p-4 text-white"
            onClick={handleToggle}
          >
            &#10005;
          </button>
          <div className="flex flex-col items-start pl-10 text-sm gap-y-4">
            <p className=" font-serif font-thin text-white text-xl">sort by:</p>
            <div className=" pb-5">
              <HearthButton
                text={manafilter}
                width={'64'}
                innerwidth={'250'}
                color={'brown'}
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
              color="brown"
              image={filter}
              funct={toggleFilter}
            ></HearthButton>
            {filterToggle && (
              <div className="grid max-sm:flex max-sm:flex-col gap-10 max-sm:gap-3 max-sm:p-0 py-5  lg:grid-cols-6 grid-cols-3">
                <div className="">
                  <HearthButton
                    text={'Attack'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleAttack}
                  ></HearthButton>
                  {attackToggle && (
                    <HearthScroll
                      list={atk}
                      funct={userAttackFilter}
                    ></HearthScroll>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Health'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleHealth}
                  ></HearthButton>
                  {healthToggle && (
                    <HearthScroll
                      list={health}
                      funct={userHealthFilter}
                    ></HearthScroll>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Card Type'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleCardType}
                  ></HearthButton>
                  {cardTypeToggle && (
                    <HearthScroll
                      list={cardType}
                      funct={userTypeFilter}
                    ></HearthScroll>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Minion Type'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleMinionType}
                  ></HearthButton>
                  {minionTypeToggle && (
                    <HearthScroll
                      list={minionType}
                      funct={userMinionFilter}
                    ></HearthScroll>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Rarity'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleRarity}
                  ></HearthButton>
                  {rarityToggle && (
                    <HearthScroll
                      list={rarity}
                      funct={useRarityFilter}
                    ></HearthScroll>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Keywords'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleKeywords}
                  ></HearthButton>
                  {keywordsToggle && (
                    <HearthScroll
                      list={keywords}
                      funct={useKewordFilter}
                    ></HearthScroll>
                  )}
                </div>
              </div>
            )}
            {toggleButton && (
              <div className=" pt-4">
                <button
                  onClick={() => {
                    setButton(false), userFilteredCards(cards);
                  }}
                  className=" bg-[#ffe792] px-2 py-1 rounded-full text-brown"
                >
                  {filterMsg} X
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Filter Row */}
      <div className=" max-sm:hidden flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5">
        {/* Mana bar */}
        <div className="flex flex-row items-center gap-2 pb-10">
          <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
          <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white py-0.5">
            <div className=" flex flex-row justify-between bg-button_bg rounded-full  py-0.5">
              <button
                className=" font-outline-1 mr-1 px-3 text-xl drop-shadow-lg "
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 0 || card.mana! === '0'
                    )
                  );
                }}
              >
                0
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 1 || card.mana! === '1'
                    )
                  );
                }}
              >
                1
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 2 || card.mana! === '2'
                    )
                  );
                }}
              >
                2
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 3 || card.mana! === '3'
                    )
                  );
                }}
              >
                3
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 4 || card.mana! === '4'
                    )
                  );
                }}
              >
                4
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 5 || card.mana! === '5'
                    )
                  );
                }}
              >
                5
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 6 || card.mana! === '6'
                    )
                  );
                }}
              >
                6
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 7 || card.mana! === '7'
                    )
                  );
                }}
              >
                7
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 8 || card.mana! === '8'
                    )
                  );
                }}
              >
                8
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! === 9 || card.mana! === '9'
                    )
                  );
                }}
              >
                9
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  userFilteredCards(
                    filteredCards.filter(
                      (card) => card.mana! >= 10 || card.mana! === '10'
                    )
                  );
                }}
              >
                10+
              </button>
            </div>
          </div>
        </div>
        {/*Sortby Row */}
        <div className="flex flex-row gap-5 items-start">
          <p className=" font-serif font-thin text-white text-xl">sort by:</p>
          <div className=" flex flex-col items-center gap-4 max-xl:text-xs">
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
        <div className="flex flex-col">
          <div className="lg:flex justify-center gap-x-10 2xl:gap-x-20 max-lg:grid grid-cols-3  max-sm:hidden">
            <div className="">
              <HearthButton
                text={'Attack'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleAttack}
              ></HearthButton>
              {attackToggle && (
                <HearthScroll
                  list={atk}
                  funct={userAttackFilter}
                ></HearthScroll>
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Health'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleHealth}
              ></HearthButton>
              {healthToggle && (
                <HearthScroll
                  list={health}
                  funct={userHealthFilter}
                ></HearthScroll>
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Card Type'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleCardType}
              ></HearthButton>
              {cardTypeToggle && (
                <HearthScroll
                  list={cardType}
                  funct={userTypeFilter}
                ></HearthScroll>
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Minion Type'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleMinionType}
              ></HearthButton>
              {minionTypeToggle && (
                <HearthScroll
                  list={minionType}
                  funct={userMinionFilter}
                ></HearthScroll>
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Rarity'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleRarity}
              ></HearthButton>
              {rarityToggle && (
                <HearthScroll
                  list={rarity}
                  funct={useRarityFilter}
                ></HearthScroll>
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Keywords'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleKeywords}
              ></HearthButton>
              {keywordsToggle && (
                <HearthScroll
                  list={keywords}
                  funct={useKewordFilter}
                ></HearthScroll>
              )}
            </div>
          </div>
          {toggleButton && (
            <div className="lg:pl pt-4 max-sm:hidden">
              <button
                onClick={() => {
                  setButton(false), userFilteredCards(cards);
                }}
                className=" bg-[#ffe792] relative left-[10%] px-2 py-1 rounded-full text-brown"
              >
                {filterMsg} X
              </button>
            </div>
          )}
        </div>
      )}

      {windowSize.width! > 640 ? (
        <GridContainer cards={filteredCards}></GridContainer>
      ) : (
        <MobileCarousel cards={filteredCards}></MobileCarousel>
      )}
      {/* <div className="max-sm:hidden">
      
      </div>
      <div className="sm:hidden">
      
      </div> */}
      <div className=" max-sm:pb-64 "></div>
    </div>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import demonhunter_emblem from '../../public/demonhunter_emblem/demonhunter emblem@3x.webp';
import druid_emblem from '../../public/druid_emblem/druid emblem@3x.webp';
import homepage_logo from '../../public/homepage_logo/homepage_logo3x.webp';
import hunter_emblem from '../../public/hunter_emblem/hunter emblem@3x.webp';
import mage_emblem from '../../public/mage_emblem/mage emblem@3x.webp';
import paladin_emblem from '../../public/paladin_emblem/paladin emblem@3x.webp';
import priest_emblem from '../../public/priest_emblem/priest emblem@3x.webp';
import rouge_emblem from '../../public/rouge_emblem/rouge emblem@3x.webp';
import shaman_emblem from '../../public/shaman_emblem/shaman emblem@3x.webp';
import warlock_emblem from '../../public/warlock_emblem/warlock emblem@3x.webp';
import warrior_emblem from '../../public/warrior_emblem/warrior emblem@3x.webp';
import SearchBar from './components/searchbar/SearchBar';
export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center bg-hearthstone_bg gap-10">
      <div className="">
        <Image
          src={homepage_logo}
          alt={'hearthstone'}
          width={540}
          height={250}
        ></Image>
      </div>
      <SearchBar sampleTextProp="sampleTextProp"></SearchBar>
      <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-20 gap-4 align-middle justify-items-center items-center">
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Mage',
              query: {
                class: 'Mage',
                text: 'My magic will tear you apart!',
                text2:
                  'No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={mage_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Mage</p>
        </div>

        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Druid',
              query: {
                class: 'Druid',
                text: 'Nature will rise against you!',
                text2:
                  'Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={druid_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Druid</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Hunter',
              query: {
                class: 'Hunter',
                text: 'Let the hunt begin!',
                text2:
                  'According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={hunter_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Hunter</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Priest',
              query: {
                class: 'Priest',
                text: 'Light smiles upon the just!',
                text2:
                  'The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={priest_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Priest</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Rouge',
              query: {
                class: 'Rouge',
                text: 'Watch your back!',
                text2:
                  'Using unseen blade, blinding speed, and subtle poison, Rogues can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={rouge_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Rouge</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Paladin',
              query: {
                class: 'Paladin',
                text: 'The Light protects those who wield it.',
                text2:
                  'Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={paladin_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Paladin</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Shaman',
              query: {
                class: 'Shaman',
                text: 'Storm, earth and fire, heed my call!',
                text2:
                  'Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={shaman_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Shaman</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/DemonHunter',
              query: {
                class: 'Demon Hunter',
                text: 'You are not prepared!',
                text2:
                  'Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={demonhunter_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Demon Hunter</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Warlock',
              query: {
                class: 'Warlock',
                text: 'I am your nightmare!',
                text2:
                  'Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={warlock_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Warlock</p>
        </div>
        <div className=" max-sm:w-3/5 ">
          <Link
            href={{
              pathname: '/class/Warrior',
              query: {
                class: 'Warrior',
                text: 'Victory or death!',
                text2:
                  'Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.',
              },
            }}
          >
            <Image
              className=" hover:drop-shadow-blue"
              src={warrior_emblem}
              height={164}
              width={164}
              alt=""
            ></Image>
          </Link>
          <p className="text-accents text-center sm:text-2xl ">Warrior</p>
        </div>
      </div>
    </main>
  );
}

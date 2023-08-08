'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import demonhunter_emblem from '../../public/demonhunter_emblem/demonhunter emblem@3x.webp';
import druid_emblem from '../../public/druid_emblem/druid emblem@3x.webp';
import homepage_logo from '../../public/homepage_logo/homepage_logo3x.webp';
import hunter_emblem from '../../public/hunter_emblem/hunter emblem@3x.webp';
import mage_emblem from '../../public/mage_emblem/mage emblem@3x.webp';
import paladin_emblem from '../../public/paladin_emblem/paladin emblem@3x.webp';
import priest_emblem from '../../public/priest_emblem/priest emblem@3x.webp';
import rouge_emblem from '../../public/rogue_emblem/rogue emblem@3x.webp';
import shaman_emblem from '../../public/shaman_emblem/shaman emblem@3x.webp';
import warlock_emblem from '../../public/warlock_emblem/warlock emblem@3x.webp';
import warrior_emblem from '../../public/warrior_emblem/warrior emblem@3x.webp';
import SearchBar from './components/searchbar/SearchBar';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    fetch('http://localhost:3000/api/createTable', {
      next: { revalidate: 1 },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }, []);
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
              pathname: '/class/Rogue',
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
          <p className="text-accents text-center sm:text-2xl ">Rogue</p>
        </div>
        <div className=" max-sm:w-3/5">
          <Link
            href={{
              pathname: '/class/Paladin',
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
              pathname: '/class/Demon Hunter',
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

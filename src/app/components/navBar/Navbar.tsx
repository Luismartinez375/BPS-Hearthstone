'use client';
import Image from 'next/image';
import homepage_logo2 from 'public/homepage_logo 2/homepage_logo 2.webp';
import { useState } from 'react';
export interface INavbar {
  sampleTextProp: string;
}

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" bg-transparent flex flex-row w-full h-20 max-sm:justify-between items-center justify-center shadow-2xl bg-opacity-5">
      <div className="p-4 relative max-sm:left-8 right-1/4">
        <Image
          src={homepage_logo2}
          alt={'reddit'}
          width={140}
          height={70}
        ></Image>
      </div>
      <div className=" flex flex_row w-1/4 justify-between max-sm:hidden gap-20 text-white">
        <button className=" font-montserrat hover:text-accents">Home</button>
        <button className=" font-aclonica hover:text-accents">Favorites</button>
        <button className=" font-aclonica hover:text-accents">Shops</button>
      </div>
      <button
        className="relative right-8 sm:hidden w-10 h-10"
        onClick={() => setToggle(toggle ? false : true)}
      >
        <div className=" h-0.5 w-6 rounded-none bg-white before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-white before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-white after:content-['']"></div>
      </button>
      {toggle && (
        <div className="animate-open-menu absolute top-20 bg-navbar w-full h-full text-4xl flex flex-col items-center justify-center gap-24 origin-top left-0 z-10">
          <button className=" font-montserrat active:text-accents text-white underline underline-offset-8 ">
            Home
          </button>
          <button className=" font-montserrat active:text-accents text-white underline underline-offset-8">
            Favorites
          </button>
          <button className=" font-montserrat active:text-accents text-white underline underline-offset-8">
            Shop
          </button>
        </div>
      )}
    </nav>
  );
}

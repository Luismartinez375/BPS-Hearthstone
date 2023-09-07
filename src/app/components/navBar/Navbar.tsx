'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import homepage_logo2 from 'public/homepage_logo 2/homepage_logo 2.webp';
import { useEffect, useState } from 'react';
export interface INavbar {
  sampleTextProp: string;
}

export default function NavBar() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log('center', center);
    });
  }, []);
  return (
    <nav className=" bg-transparent flex flex-row w-full h-20 max-sm:justify-between items-center justify-center shadow-2xl">
      <div className="p-4 relative max-sm:left-8 right-1/4">
        <Image
          className="cursor-pointer"
          src={homepage_logo2}
          alt={'reddit'}
          width={140}
          height={70}
          onClick={() => {
            router.push('/'), setToggle(false);
          }}
        ></Image>
      </div>
      <div className=" flex flex_row w-1/4 justify-between gap-20 text-white max-sm:hidden">
        <button
          className=" font-montserrat hover:text-accents"
          onClick={() => {
            router.push('/'), setToggle(false);
          }}
        >
          Home
        </button>
        <button
          className=" font-aclonica hover:text-accents"
          onClick={() => {
            router.push('/favorites'), setToggle(false);
          }}
        >
          Favorites
        </button>
        <Link
          href={{
            pathname: `/shop/`,
            query: { lat: center.lat, lng: center.lng },
          }}
          onClick={() => setToggle(false)}
          className=" font-aclonica hover:text-accents"
        >
          Shops
        </Link>
      </div>
      <button
        className="relative right-8 sm:hidden w-10 h-10"
        onClick={() => {
          setToggle(toggle ? false : true);
        }}
      >
        <div className=" h-0.5 w-6 rounded-none z-40 absolute bg-gold before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-gold before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-gold after:content-['']"></div>
      </button>
      {toggle && (
        <div className="sm:hidden animate-open-menu fixed top-0 bg-navbar w-full h-full text-4xl flex flex-col items-center justify-center gap-24 origin-top left-0 z-40">
          <button
            className=" font-montserrat active:text-accents text-white underline underline-offset-8 "
            onClick={() => {
              router.push('/'), setToggle(false);
            }}
          >
            Home
          </button>
          <button
            className=" font-montserrat active:text-accents text-white underline underline-offset-8"
            onClick={() => {
              router.push('/favorites'), setToggle(false);
            }}
          >
            Favorites
          </button>
          <Link
            href={{
              pathname: `/shop/`,
              query: { lat: center.lat, lng: center.lng },
            }}
            onClick={() => setToggle(false)}
            className=" font-montserrat active:text-accents text-white underline underline-offset-8"
          >
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
}

import Image from 'next/image';
import homepage_logo2 from 'public/homepage_logo 2/homepage_logo 2.webp';

export interface INavbar {
  sampleTextProp: string;
}

export default function NavBar() {
  return (
    <nav className="flex flex-row bg-navbar w-full h-20 max-sm:justify-between items-center justify-center shadow-2xl">
      <div className="p-4 relative max-sm:left-8 right-1/4">
        <Image
          src={homepage_logo2}
          alt={'reddit'}
          width={140}
          height={70}
        ></Image>
      </div>
      <div className=" flex flex_row w-1/4 justify-between max-sm:hidden text-white">
        <button className=" font-montserrat hover:text-accents">Home</button>
        <button className=" font-aclonica hover:text-accents">Favorites</button>
        <button className=" font-aclonica hover:text-accents">Shops</button>
      </div>
      <button className="relative right-8 sm:hidden">
        <div className=" h-0.5 w-6 rounded-none bg-white before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-white before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-white after:content-['']"></div>
      </button>
    </nav>
  );
}

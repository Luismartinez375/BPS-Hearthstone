import Image from 'next/image';
import Link from 'next/link';
import { getAllCards } from '../../../../lib/getAllCards';
import notFound from '../../../../public/no_cards_found/no cards found@2x.webp';
import Filter from '../../components/filters/filter';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const key = searchParams.q as string;
  console.log(key);
  const cards = await getAllCards(key);
  if (cards === undefined) {
    return (
      <div className="flex flex-col items-center justify-center gap-10 bg-hearthstone_bg ">
        <h1 className=" text-6xl max-sm:text-center">0 Results for {key}</h1>
        <Image
          src={notFound}
          alt=""
          width={500}
          height={500}
          className="max-sm:w-3/5 max-sm:h-3/5"
        ></Image>
        <p className=" sm:text-2xl text-xl">Blasphemy! No cards found.</p>
        <Link href="/" className=" text-gold hover:underline max-sm:underline">
          Your quest isn’t over! Try a new search.
        </Link>
      </div>
    );
  } else {
    return (
      <div className=" bg-hearthstone_bg">
        <div>
          <p className=" flex text-center items-center p-3 text-white sm:text-left">
            <div className='pr-1'>Results for {key}</div>
            <Link className="rounded-full  px-1 bg-gold text-xs" href="/">
              X
            </Link>
          </p>
          <Filter cardClass={''} cards={cards}></Filter>
        </div>
      </div>
    );
  }
}

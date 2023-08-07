import Image from 'next/image';
import Link from 'next/link';
import { getAllCards } from '../../../../lib/getAllCards';
import notFound from '../../../../public/no_cards_found/no cards found.webp';
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
      <div className="flex flex-col items-center justify-center bg-hearthstone_bg min-h-screen">
        <h1 className=" text-6xl ">0 Results for {key}</h1>
        <Image src={notFound} alt=""></Image>
        <p>Blasphemy! No cards found.</p>
        <Link href="/" className=" text-gold hover:underline">
          Your quest isn’t over! Try a new search.
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <p>Results for {}</p>
          {key}
          <Link className="rounded bg-gold" href="/">
            x
          </Link>
        </div>
        <Filter cardClass={''} cards={cards}></Filter>
      </>
    );
  }
}

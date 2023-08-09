// import arcane from '../../../public/Mask group_2023-07-21/Mask group@2x.webp';
// import book from '../../../public/book/Mask group@2x.webp';
// import crow from '../../../public/crow/Mask group@2x.webp';

import Filter from '../components/filters/filter';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/getdata', {
    next: { revalidate: 1 },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });

  return (
    <div className="flex flex-col h-fit bg-hearthstone_bg">
      <h1 className=" text-center text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1">
        Favorites
      </h1>
      <Filter cardClass=" " cards={res.data}></Filter>
    </div>
  );
}

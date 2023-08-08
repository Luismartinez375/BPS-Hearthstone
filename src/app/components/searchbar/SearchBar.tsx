import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Search from '../../../../public/Search.svg';
export interface ISearchBar {
  sampleTextProp: string;
}

export default function SearchBar({ sampleTextProp }: ISearchBar) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch('');
    router.push(`/search/${search}?q=${search}`);
  };
  return (
    <form
      className=" bg-navbar w-2/5 max-sm:w-5/6  h-16 flex rounded-full z-0"
      onSubmit={handleSubmit}
    >
      <div className=" w-full flex gap-2">
        <button className=" w-10 align-middle relative left-4">
          <Image src={Search} alt=""></Image>
        </button>
        <input
          className="w-11/12 bg-transparent focus:outline-none text-white text-xl p-2 align-middle"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search cards"
        />
      </div>
      <button className=" text-accents px-4">Search</button>
    </form>
  );
}

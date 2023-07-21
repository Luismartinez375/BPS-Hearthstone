import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
type HearthScrollProps = {
  list: Array<string>;
  funct?: () => void;
};

export default function HearthScroll({ list, funct }: HearthScrollProps) {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <div className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto p-0.5 z-10 w-56 max-sm:hidden lg:absolute lg:top-[17%] rounded-xl flex flex-col items-center">
      <div
        className="flex flex-col overflow-y-scroll  bg-brown w-19/20 max-h-72 rounded-xl text-shadow-lg shadow-black no-scrollbar"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {list.map((item) => (
          <button
            key={item}
            className=" hover:text-accents text-white text-left px-2 py-1"
            onClick={funct}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
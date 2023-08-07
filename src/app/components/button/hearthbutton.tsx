import Image from 'next/image';
export interface IHearthButton {
  sampleTextProp: string;
}

type HearthButtonProps = {
  text: string;
  width: string;
  innerwidth: string;
  color: string;
  image?: string;
  image2?: string;
  funct?: () => void;
};

export default function HearthButton({
  text,
  width,
  innerwidth,
  color,
  image,
  image2,
  funct,
}: HearthButtonProps) {
  return (
    <>
      <button
        className={`bg-gradient-to-b max-sm:h-10  from-gold via-gold_2 via-80% to-gold_3 rounded-full h-16 w-${width} flex flex-col justify-center items-center`}
        onClick={funct}
      >
        <p
          className={` bg-${color} w-[${innerwidth}px]  h-[58px] max-sm:h-[34px] text-white text-center p-3 rounded-full flex flex-row justify-center gap-1 items-center`}
        >
          {image && <Image src={image} alt="" width={28} height={28}></Image>}
          {text}
          {image2 && <Image src={image2} alt="" className=""></Image>}
        </p>
      </button>
    </>
  );
}

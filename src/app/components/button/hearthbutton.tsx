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
        className={`bg-gradient-to-b p-0.5  from-gold via-gold_2 via-80% to-gold_3 rounded-full flex flex-col justify-center items-center `}
        onClick={funct}
      >
        <p
          className={` bg-${color}  text-white text-center max-xl:w-32 h-8 xl:w-40 ${
            text.includes('Mana:') ? 'max-sm:h-11 max-sm:p-1 p-5' : ''
          } xl:h-10 rounded-full flex flex-row justify-center gap-1 items-center`}
        >
          {image && <Image src={image} alt="" width={20} height={20}></Image>}
          {text}
          {image2 && (
            <Image
              src={image2}
              alt=""
              width={20}
              height={20}
              className=""
            ></Image>
          )}
        </p>
      </button>
    </>
  );
}

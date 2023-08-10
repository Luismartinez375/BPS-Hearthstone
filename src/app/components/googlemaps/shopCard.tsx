type ShopCardProps = {
  name: string;
  address: string;
  open: string;
  schedule: string;
  phone: string;
  clickCard: (card: any) => void;
};

export default function ShopCard({
  name,
  address,
  open,
  schedule,
  phone,
  clickCard,
}: ShopCardProps) {
  return (
    <>
      <div
        className="text-white font-AclonicaR hover:text-gold mb-8 hover:cursor-pointer sm:hover:text-gold lg:text-xs"
        onClick={clickCard}
      >
        <div>
          <p className="text-2xl">{name}</p>
        </div>
        <div className="my-4">{address}</div>
        <div className="flex ">
          <p
            className={`${
              open == 'Open' ? 'text-cyan-500' : 'text-red-500'
            } `}
          >
            {open}
          </p>
          &nbsp; | &nbsp;<p className="text-center">{schedule}</p> &nbsp;|&nbsp;
          <p className="text-center">{phone}</p>
        </div>
      </div>
      <hr className="border-black border opacity-40 mb-8" />
    </>
  );
}

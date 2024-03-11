import Image from "next/image";
import imb from "@/app/assets/images/imb.png";

const Rating = ({ rating, className = '' }: { rating: number, className?:string }) => {
  return (
    <div className="flex flex-row space-x-3">
      <Image src={imb} alt="imb logo" width={38} height={18} />
      <div>
        <span className={` ${className} text-[#525252]`}>
          <b>{rating}/10</b>
        </span>
      </div>
    </div>
  );
};

export default Rating;

import { SpeakerCardProp } from "@/lib/GlobalUtils";
import Image from "next/image";

const SpeakerCard = ({ item }: SpeakerCardProp) => {
  return (
    <div className="responsiveflex gap-6 items-center md:items-start">
      <Image
        src={item.speakerImage}
        alt={item.name}
        className="rounded-xl object-cover w-40 h-40 md:w-86.25 md:h-80"
        priority
      />

      <div className="flexcol gap-2 text-center md:text-left">
        <h3 className=" text-xl md:text-2xl font-extrabold text-[#00FFFF]">
          {item.name}
        </h3>

        <p className="text-sm md:text-xl leading-relaxed text-white opacity-90">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
import { SpeakerCardProp } from "@/lib/GlobalUtils";
import Image from "next/image";

const SpeakerCard = ({ item }: SpeakerCardProp) => {
  return (
    <div className="flex gap-6 items-start">
      <Image
        src={item.speakerImage}
        alt={item.name}
        className="rounded-xl object-cover w-[345px] h-[320px]"
      />

      <div className="flexcol gap-2">
        <h3 className="text-2xl font-extrabold text-[#00FFFF]">
          {item.name}
        </h3>

        <p className="text-xl leading-relaxed text-white opacity-90">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
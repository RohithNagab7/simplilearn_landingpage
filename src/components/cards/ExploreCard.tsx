import { ExploreCardProp } from "@/lib/GlobalUtils";
import Image from "next/image";

const ExploreCard = ({ item }: ExploreCardProp) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4 bg-white rounded-sm p-4 md:p-6 lg:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] text-black">
      <div className="flex items-center justify-start gap-4">
        <Image src={item.icon} alt={item.title} className="w-6 md:w-8" />

        <h3 className="text-xl font-semibold ">{item.title}</h3>
      </div>

      <p className="text-base w-3/4">
        {item.description}
      </p>
    </div>
  );
};

export default ExploreCard;

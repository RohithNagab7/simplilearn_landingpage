import { AgendaItemProp } from "@/lib/GlobalUtils";

const AgendaCard = ({ item }: AgendaItemProp) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-2 md:gap-4 shadow-lg text-black">
      <h3 className=" text-lg md:text-2xl font-bold md:font-semibold text-[#1D4DF4] md:min-h-24">{item.title}</h3>

      <p className="text-md md:text-xl font-bold mb-2">{item.speaker}</p>

      <p className="text-md md:text-xl md:leading-relaxed md:font-medium">
        {item.description}
      </p>
    </div>
  );
};

export default AgendaCard;

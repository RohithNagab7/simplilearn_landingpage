import { AgendaItemProp } from "@/lib/GlobalUtils";

const AgendaCard = ({ item }: AgendaItemProp) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-lg text-black">
      <h3 className="text-2xl font-semibold text-[#1D4DF4] min-h-24">{item.title}</h3>

      <p className="text-xl font-bold mb-2">{item.speaker}</p>

      <p className="text-xl leading-relaxed font-medium">
        {item.description}
      </p>
    </div>
  );
};

export default AgendaCard;

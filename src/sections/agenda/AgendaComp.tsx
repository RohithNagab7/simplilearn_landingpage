import AgendaCard from "@/components/cards/AgendaCard";
import { agendaData } from "./AgendaData";

const AgendaComp = () => {
  return (
    <section className="bg-[#00FFFF] px-4 py-6 md:p-12 lg:p-18">
      <div className=" flexcol gap-4 md:gap-8">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1D4DF4]">
          Event Agenda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {agendaData.map((item) => (
            <AgendaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaComp;

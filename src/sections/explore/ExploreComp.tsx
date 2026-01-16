import ExploreCard from "@/components/cards/ExploreCard";
import { ExploreItemsData } from "./ExploreData";
import { ExploreDataProps } from "@/lib/GlobalUtils";

const ExploreComp = () => {
  return (
    <section className="flexcol px-4 py-6 md:p-12 lg:px-18 lg:py-10 bg-[#e7f0ff]">
      <div className=" flex flex-col gap-4">
        <div className="flexcol gap-3 md:gap-6">
          <h2 className="mainheadertext">What We’ll Explore</h2>

          <p className="text-sm md:text-lg text-black font-medium">
            The critical shifts every enterprise must plan for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ExploreItemsData.map((item: ExploreDataProps) => (
            <ExploreCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreComp;

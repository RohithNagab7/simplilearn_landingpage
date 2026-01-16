import SpeakerCard from "@/components/cards/SpeakerCard";
import { SpeakersData } from "./SpeakerData";
import speakerBgImage from "../../assets/images/speakerbgimage.png";

const SpeakerComp = () => {
  return (
    <section className="bg-linear-to-b from-[#1D4DF4] to-[#112D8E] p-4 md:p-18">
      <div className=" flexcol gap-8 md:gap-10 lg:gap-16">
        <h2 className="mainheadertext">
          Featured Speakers
        </h2>

        <div className="flexcol gap-8 md:gap-10 lg:gap-16">
          {SpeakersData.map((item) => (
            <SpeakerCard key={item.id} item={item} />
          ))}
        </div>

        <div
          className=" rounded-xl p-2 md:p-8 flexcol gap-1 md:gap-3"
          style={{
            background: `url(${speakerBgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="text-lg md:text-2xl font-extrabold text-[#00FFFF]">
            Additional Expert Perspectives
          </h3>
          <p className="text-white md:leading-relaxed text-sm md:text-xl">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerComp;

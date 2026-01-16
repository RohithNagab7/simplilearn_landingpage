import Image from "next/image";
import { InsightsListData } from "./InsightsData";
import ChessImage from "../../assets/images/chess.png";
import RSVPForm from "@/components/form/RsvpForm";

const InsightsComp = () => {
  return (
    <section className="bg-white p-4 md:px-18 md:py-14 w-full flexcol gap-6">
      <div className=" flex flex-col-reverse md:flex-row gap-2 md:gap-16 items-center w-full p-0">
        <div className="flex flex-col gap-4 md:gap-10 items-start justify-start ">
          <h2 className="mainheadertext">
            Go behind the curtain with real {" "}
            <br className="hidden md:block" />
            examples and high-scale insights
          </h2>

          <p className="text-md md:text-lg font-medium text-black">
            You’ll walk away with:
          </p>

          <div className="flex flex-col gap-6">
            {InsightsListData.map((text, index) => (
              <div
                key={index}
                className="flex items-center border-2 border-l-[#F5AB40] border-y-0 border-r-0 px-4 py-1 w-[90%] min-h-14"
              >
                <p className="text-sm md:text-lg md:font-medium text-black">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <Image
            src={ChessImage}
            alt="Strategic chess pieces"
            className="w-76 md:w-142.5 h-66 md:h-132.75 mr-28 md:mr-0 bg-center bg-cover "
            priority
          />
        </div>
      </div>
      <RSVPForm />
    </section>
  );
};

export default InsightsComp;

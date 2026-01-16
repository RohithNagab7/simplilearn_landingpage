import Image from "next/image";
import { InsightsListData } from "./InsightsData";
import ChessImage from "../../assets/images/chess.png";

const InsightsComp = () => {
  return (
    <section className="bg-white p-6 md:px-18 py-14 w-full">
      <div className=" flex gap-16 items-center w-full p-0">
        <div className="flex flex-col gap-10 items-start justify-start ">
          <h2 className="mainheadertext">
            Go behind the curtain with real
            <br />
            examples and high-scale insights
          </h2>

          <p className="text-lg font-medium text-black">
            You’ll walk away with:
          </p>

          <div className="flex flex-col gap-6">
            {InsightsListData.map((text, index) => (
              <div
                key={index}
                className="flex gap-4 items-center border-2 border-l-[#F5AB40] border-y-0 border-r-0 px-4 py-1 w-[90%] min-h-14"
              >
                <p className="font-medium text-black">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={ChessImage}
            alt="Strategic chess pieces"
            className="w-142.5 h-132.75 bg-center bg-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default InsightsComp;

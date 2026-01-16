import Image from "next/image";
import mainLogo from "../../assets/svgs/MainLogo.svg";
import dateIcon from "../../assets/svgs/date.svg";
import locationIcon from "../../assets/svgs/location.svg";
import heroImage from "../../assets/images/HeroImage.png"

function HeroComp() {
  return (
    <section className=" p-4 md:p-12 lg:p-18 flexcol justify-start items-start w-100% gap-8 md:gap-18 bg-cover bg-center md:tracking-wide" style={{ background: `url(${heroImage.src})`,  wordSpacing: "0.1rem", backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", }}>
      <Image
        src={mainLogo}
        alt="Logo"
        className="w-32 md:w-52"
      />
      <div className="flexcol gap-4 md:gap-8">
        <div className="responsiveflex gap-2 items-start md:items-center md:justify-start">
          <p className="cursor-pointer bg-[#00FFFF] px-4 py-[4] rounded-md text-[#25286A] font-black">
            Invite only
          </p>
          <p className="text-[#00FFFF]">An Executive Roundtable · Lunch</p>
        </div>
        <div className=" flexcol gap-2 ">
          <p className="text-[#F5AB40] text-2xl md:text-4xl font-extrabold ">The Skills That Matter Next:</p>
          <p className="text-[#F5AB40] text-2xl md:text-4xl font-medium ">Preparing Your Workforce</p>
          <p className="text-[#F5AB40] text-2xl md:text-4xl font-medium ">& Leaders for the AI Era</p>
        </div>
        <div className="flexcol gap-2">
          <div className="flex gap-2 items-center">
            <Image src={dateIcon} alt="date" className="w-3 md:w-4" />
            <p className="font-extrabold text-sm md:text-xl">February 20, 2026</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={locationIcon} alt="location" className="w-3 md:w-4" />
            <p className="font-extrabold text-sm md:text-xl">Chamberlain’s Steak & Fish House, Dallas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComp;

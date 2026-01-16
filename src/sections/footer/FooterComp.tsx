import Image from "next/image";
import mainLogo from "../../assets/svgs/MainLogo.svg";
import FooterBgImage from "../../assets/images/footerbgimage.png";
import RSVPForm from "@/components/form/RsvpForm";

const FooterComp = () => {
  return (
    <section
      className="p-4 md:px-16 lg:px-18 md:py-10 flexcol justify-between items-start gap-10 md:gap-20 "
      style={{
        background: `url(${FooterBgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flexcol gap-4 items-start w-full">
        <p className="text-2xl font-extrabold">Space is limited.</p>
        <RSVPForm />
      </div>

      <div className="responsiveflex items-start md:items-center md:justify-between w-full">
        <Image src={mainLogo} alt="simplilearn" className="w-24 md:w-52" />
        <p className="text-xs md:text-xl font-medium text-white md:tracking-wide">
          © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterComp;

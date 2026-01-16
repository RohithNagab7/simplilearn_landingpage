import Image from "next/image";
import mainLogo from "../../assets/svgs/MainLogo.svg";
import FooterBgImage from "../../assets/images/footerbgimage.png";

const FooterComp = () => {
  return (
    <section
      className="px-18 py-10 flexcol justify-between items-start gap-20"
      style={{
        background: `url(${FooterBgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flexcol gap-4 items-start">
        <p className="text-2xl font-extrabold">Space is limited.</p>
        <p>form</p>
      </div>

      <div className="flex items-center justify-between w-full">
        <Image src={mainLogo} alt="simplilearn" className="w-52" />
        <p className="text-xl font-medium text-white tracking-wide">
          © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterComp;

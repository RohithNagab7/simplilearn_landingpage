import Image from "next/image";
import MailIcon from "@/assets/svgs/mail.svg";
import { submitRSVP } from "../../actions/Rsvp";

export default function RSVPForm() {
    
  return (
    <form
      action={submitRSVP}
      className="flex flex-col md:flex-row gap-4 w-full md:w-1/2"
    >

      <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-2 md:px-4 py-3 flex-1 bg-[#E7E7E7] opacity-90 min-w-full md:min-w-152">
        <Image src={MailIcon} alt="Email" className="w-4 h-4 md:w-5 md:h-5 opacity-60" />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your work email to confirm your attendance"
          className="w-full outline-none text-xs md:text-sm text-gray-700 "
        />
      </div>

      <button
        type="submit"
        className="bg-[#F5AB40] text-white font-semibold px-4 py-3 md:px-8 rounded-lg text-sm md:text-base whitespace-nowrap cursor-pointer max-w-36"
      >
        RSVP Now
      </button>
    </form>
  );
}

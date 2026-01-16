import RSVPForm from "@/components/form/RsvpForm";

const AboutComp = () => {
  return (
    <section className="bg-white  px-4 py-6 md:p-12 lg:p-18" style={{wordSpacing: "0.2rem"}}>
      <div className="flexcol gap-3 md:gap-6 md:tracking-wide w-full text-black">
        <RSVPForm />
        <p className="text-sm text-left md:text-2xl md:text-justify">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are <br className="hidden md:block" />collapsing and reforming. Frontline
          and mid-level managers will soon lead teams of people and <br className="hidden md:block" />intelligent
          agents.
        </p>

        <p className="text-sm text-left md:text-2xl md:text-justify">
          But even the most advanced enterprises are asking the same question:
        </p>

        <h2 className="text-xl md:text-4xl font-extrabold md:leading-snug mx-auto mb-0 md:mb-6 text-center">
          Which capabilities will matter most,
          <br className="hidden md:block" />
          and how do we build them at scale?
        </h2>

        <p className="text-sm text-left md:text-2xl md:text-justify">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
};

export default AboutComp;

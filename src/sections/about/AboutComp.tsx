const AboutComp = () => {
  return (
    <section className="bg-white p-18" style={{wordSpacing: "0.2rem"}}>
      <div className="flexcol gap-6 tracking-wide w-full text-black">
        <p className="text-2xl text-justify">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are <br/> collapsing and reforming. Frontline
          and mid-level managers will soon lead teams of people and <br/> intelligent
          agents.
        </p>

        <p className="text-2xl">
          But even the most advanced enterprises are asking the same question:
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mx-auto mb-6">
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h2>

        <p className="text-2xl">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
};

export default AboutComp;

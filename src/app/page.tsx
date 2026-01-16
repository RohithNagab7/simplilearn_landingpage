import AboutComp from "@/sections/about/AboutComp";
import AgendaComp from "@/sections/agenda/AgendaComp";
import ExploreComp from "@/sections/explore/ExploreComp";
import FooterComp from "@/sections/footer/FooterComp";
import HeroComp from "@/sections/hero/HeroComp";
import InsightsComp from "@/sections/insights/InsightsComp";
import SpeakerComp from "@/sections/speaker/SpeakerComp";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroComp />
      <AboutComp />
      <ExploreComp />
      <SpeakerComp />
      <InsightsComp />
      <AgendaComp />
      <FooterComp />
    </main>
  );
}

import { ExploreDataProps } from "@/lib/GlobalUtils";
import skillsIcon from "../../assets/svgs/skills.svg"
import managerIcon from "../../assets/svgs/manager.svg"
import leaderIcon from "../../assets/svgs/leader.svg"
import frontlineIcon from "../../assets/svgs/frontline.svg"
import coreIcon from "../../assets/svgs/core.svg"
import winningIcon from "../../assets/svgs/winning.svg"

export const ExploreItemsData: ExploreDataProps[] = [
  {
    id: 1,
    title: "Skills Decay",
    description: "every 2–3 years faster for technical skills",
    icon: skillsIcon,
  },
  {
    id: 2,
    title: "Manager Role Shift",
    description: "orchestrating people + AI agents",
    icon: managerIcon,
  },
  {
    id: 3,
    title: "Leaders + AI Co-Pilots",
    description: "requires sensemaking and systems thinking",
    icon: leaderIcon,
  },
  {
    id: 4,
    title: "Frontline Capability",
    description: "now depends on digital fluency",
    icon: frontlineIcon,
  },
  {
    id: 5,
    title: "Core Human Capabilities",
    description: "analytical reasoning and scenario planning",
    icon: coreIcon,
  },
  {
    id: 6,
    title: "Winning Organizations",
    description: "predict skills ahead of demand",
    icon: winningIcon,
  },
];

import { SpeakerDataProps } from "@/lib/GlobalUtils";
import robImage from "../../assets/images/rob.png";
import krishnaImage from "../../assets/images/krishna.png";
import sudiptoImage from "../../assets/images/sudipto.png";

export const SpeakersData: SpeakerDataProps[] = [
  {
    id: 1,
    name: "Rob Lauber",
    description:
      "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
    speakerImage: robImage,
  },
  {
    id: 2,
    name: "Krishna Kumar",
    description:
      "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era.",
    speakerImage: krishnaImage,
  },
  {
    id: 3,
    name: "Sudipto Mitra",
    description:
      "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
    speakerImage: sudiptoImage,
  },
];
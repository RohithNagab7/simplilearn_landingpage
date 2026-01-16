import { StaticImageData } from "next/image";

export interface ExploreDataProps {
    id: number;
    title: string;
    description: string;
    icon: string;
};

export interface ExploreCardProp {
    item: ExploreDataProps;
}

export interface SpeakerDataProps {
    id: number;
    name: string;
    description: string;
    speakerImage: StaticImageData;
};

export interface SpeakerCardProp {
    item: SpeakerDataProps;
}

export interface AgendaDataProps {
  id: number;
  title: string;
  speaker: string;
  description: string;
}

export interface AgendaItemProp {
    item: AgendaDataProps;
}
import {
  Castle,
  Flame,
  House,
  School,
  Trees,
  Waves,
  WavesLadder,
} from "lucide-react";
import { ResponsiveSetting } from "../interfaces";

export const navbarIcons = [
  {
    icon: <School className="m-auto" />,
    title: "Tiny Homes",
  },
  {
    icon: <WavesLadder className="m-auto" />,
    title: "Amazing pools",
  },
  {
    icon: <WavesLadder className="m-auto" />,
    title: "Amazing pools",
  },
  {
    icon: <Trees className="m-auto" />,
    title: "National parks",
  },
  {
    icon: <House className="m-auto" />,
    title: "Cabins",
  },
  {
    icon: <Castle className="m-auto" />,
    title: "Castles",
  },
  {
    icon: <Flame className="m-auto" />,
    title: "Trending",
  },
  {
    icon: <School className="m-auto" />,
    title: "Rooms",
  },
  {
    icon: <Waves className="m-auto" />,
    title: "Beaches",
  },
];
export const responsive: ResponsiveSetting[] = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
    },
  },
];

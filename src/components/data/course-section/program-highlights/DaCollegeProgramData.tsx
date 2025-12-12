import {
  Brain,
  ShieldCheck,
  Code,
  MonitorPlay,
  SearchCheck,
} from "lucide-react";

export const DaProgramHighlightsData = [
   {
    label: "Certificate",
    points: [
      "University Recognised Certificate Program"
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <ShieldCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Data Analytics with AI",
    points: [
      "Master AI-powered analytics tools."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <Brain className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Learn Hands-On",
    points: [
      "20+ Real-world Projects"
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <Code className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Live Interactive classes",
    points: [
      "Live online classes & doubt-clearing sessions"
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <MonitorPlay className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Hiring Sprints",
    points: [
      "Multiple job drives in a dedicated job portal"
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <SearchCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Career Services",
    points: [
      "Resume prep, interview prep & placement support"
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <SearchCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
];

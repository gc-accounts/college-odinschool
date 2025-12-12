import {
  GraduationCap,
  ShieldCheck,
  Hammer,
  MonitorPlay,
  UsersRound,
  BadgeCheck,
} from "lucide-react";

export const IBProgramHighlightsData = [
  {
    label: "IB Foundations",
    points: [
      "Master key concepts of Investment Banking and financial Operations",
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: (
      <GraduationCap className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />
    ),
  },
  {
    label: "Certificate",
    points: ["Earn a university recognised certificate"],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <ShieldCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Learn Hands-On",
    points: [
      "Work on real trade lifecycle, settlements, reconciliations, and KYC/AML projects.",
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <Hammer className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Live Interactive Sessions",
    points: ["Live online classes & doubt-clearing sessions"],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <MonitorPlay className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Hiring Sprints",
    points: ["Multiple job drives in a dedicated job portal"],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <UsersRound className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Career Services",
    points: ["Resume prep, interview prep & placement support"],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <BadgeCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
];

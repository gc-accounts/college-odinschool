import {
  MonitorPlay,      // For Live online classes
  ShieldCheck,      // For Certificate
  Brain,            // For Machine Learning, Deep Learning, NLP
  Sparkles,         // For Generative AI, LLMs, AI Agents
  SearchCheck,      // For Job Portal, Career
} from "lucide-react";

export const AiHighlightData = [
  {
    label: "Certificate",
    points: [
      "University Recognised Certificate Program."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <ShieldCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Internship Program",
    points: [
      "Real-world AI experience through practical internships."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <ShieldCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "AI Specialization",
    points: [
      "Learn ML, NLP, analytics & GenAI basics."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <Brain className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Advanced AI Topics",
    points: [
      "Explore LLMs, AI Agents & GenAI tools."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <Sparkles className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Hiring Sprints",
    points: [
      "Access multiple job drives via our portal."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <SearchCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
  {
    label: "Career Services",
    points: [
      "Resume building, interview prep and placement support."
    ],
    iconBg: "bg-yellow-600/15 border border-yellow-600/20",
    icon1: <SearchCheck className="md:h-7 md:w-7 w-5 h-5 text-yellow-500" />,
  },
];

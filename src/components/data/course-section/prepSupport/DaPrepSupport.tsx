import { HiOutlineUser, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaBuilding, FaUserTie, FaUserCog } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export const DajobPrepItems = [
  {
    title: "AI-Powered Profile Building",
    desc: "Optimize your LinkedIn profile and use our AI-powered tool to build a resume that gets noticed by recruiters.",
    icon: <HiOutlineUser size={28} className="text-[#0B63F8]" />,
  },
  {
    title: "Behavioral Skills",
    desc: "Become a great cultural fit and learn essential workplace skills from experts.",
    icon: <FaUserCog size={28} className="text-[#0B63F8]" />,
  },
  {
    title: "Interview Preparation",
    desc: "Test and practice your skills with realistic mock interview sessions.",
    icon: <HiOutlineQuestionMarkCircle size={28} className="text-[#0B63F8]" />,
  },
  {
    title: "Industry Interaction",
    desc: "Engage in case studies and discussions with industry professionals.",
    icon: <FaBuilding size={28} className="text-[#0B63F8]" />,
  },
  {
    title: "Placement Support",
    desc: "Access our placement portal and get personalized career support.",
    icon: <MdWork size={28} className="text-[#0B63F8]" />,
  },
  {
    title: "Job Drives",
    desc: "Connect directly with hiring companies through exclusive job drives.",
    icon: <FaUserTie size={28} className="text-[#0B63F8]" />,
  },
];

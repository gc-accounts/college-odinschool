"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Modal from "./component-template/Modal";
import SecondaryForm from "@/components/components/course-details/SecondaryForm";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getUTMTrackingData } from "@/components/utils/getUTMTrackingData";

const HeroSection = ({ sectionClass }: { sectionClass?: string }) => {
  const [formOpen, setFormOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [utmData, setUtmData] = useState<Record<string, string>>({});
  const elRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elRefs.current.includes(el)) elRefs.current.push(el);
  };

  useEffect(() => {
    const tracking = getUTMTrackingData();
    setUtmData(tracking);
    sessionStorage.setItem("utmTracking", JSON.stringify(tracking));
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "transition-all", "duration-700");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elRefs.current.forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <section className={`${sectionClass || ""} bg-[#EAF3FF] pt-16 pb-0`}>
      <div className="container mx-auto px-4 text-center">
        {/* HEADING */}
        <h1
          ref={addToRefs}
          className="opacity-0 text-3xl md:text-5xl font-bold text-[#0B274A] leading-tight"
        >
          Get Ready for 2026 with <br />
          <span className="text-[#0A66FF]">Data & AI Skills</span>
        </h1>

        {/* SUBTEXT */}
        <p
          ref={addToRefs}
          className="opacity-0 mt-4 text-gray-700 md:text-lg"
        >
          Built for 2026 Tech Careers | University Recognised Certificate
        </p>

        {/* CTA */}
        <div ref={addToRefs} className="opacity-0 mt-6">
          <Button
            size="lg"
            icon={<ArrowRight className="ml-2" size={18} />}
            iconPosition="right"
            className="bg-[#1A73E8] hover:bg-[#0F5FCC] text-white mx-auto"
            onClick={() => setFormOpen(true)}
          >
            Talk to an Expert
          </Button>
        </div>
      </div>

      {/* FULL IMAGE (With all 9 cards baked into it) */}
      <div className="w-full flex justify-center mt-10">
        <Image
          src="https://strapi.odinschool.com/uploads/691455051ac91daae7d38122_os_ff_bg_ce667e1885.avif"
          alt="Students Podium"
          width={1600}
          height={700}
          className="w-full max-w-6xl object-contain"
          priority
        />
      </div>

      {/* MODAL */}
      <Modal
        header_text={"Enquire Now"}
        open={formOpen}
        onOpenChange={setFormOpen}
      >
        <SecondaryForm
          isModal={true}
          isCoupon={false}
          buttonText="Request a Callback"
          sourceDomain="Home page"
        />
      </Modal>
    </section>
  );
};

export default HeroSection;

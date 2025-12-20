"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Modal from "./component-template/Modal";
import PrimaryForm from "./course-details/PrimaryForm";
import { formatDateToReadable } from "../utils/formatDateToReadable";
import { CiCircleCheck } from "react-icons/ci";

interface Props {
  sectionClass?: String;
  slug: string;
  cohortDates?: {
    cohort1?: string;
    cohort2?: string;
  };
}

const DaFeeModule = ({ sectionClass, cohortDates, slug }: Props) => {
  const [formOpen, setFormOpen] = useState(false);

  const data = {
    // cohorts: [ formatDateToReadable(cohortDates?.cohort1), formatDateToReadable(cohortDates?.cohort2),
    cohorts: [ '30 December 2025', '31 Jan 2026'],
    fee: "₹ 35,000 + GST",
    partners: [
      {
        id: 1,
        name: "Feemonk",
        logo: "https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp",
      },
      {
        id: 2,
        name: "Avanse",
        logo: "https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg",
      },
      {
        id: 3,
        name: "Bajaj Finserv",
        logo: "https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp",
      },
    ],
  };

  return (
    <section className={`${sectionClass || ""} relative py-12`}>
      <div className="container">

        {/* ------------------ Cohort Bar ------------------ */}
        <div className="border rounded-xl px-6 py-4 flex flex-wrap gap-4 text-sm md:text-base">
          <span className="font-semibold text-primary-600">Upcoming Cohort</span>

          {data.cohorts.map(
            (date, index) =>
              date && (
                <span
                  key={index}
                  className="font-medium text-gray-800 border-l pl-4 first:border-none first:pl-0"
                >
                  {date}
                </span>
              )
          )}
        </div>

        {/* ------------------ Main Fee Section ------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* -------- Left Fee Card -------- */}
          <div className="border rounded-xl p-6 bg-white">
            <p className="text-sm text-gray-600">Affordable Program Fee</p>
            <p className="text-4xl font-bold text-gray-900 mt-1">{data.fee}</p>

            <Button
              size="lg"
              icon={<ArrowRight className="ml-2" size={18} />}
              iconPosition="right"
              className="bg-[#1A73E8] hover:bg-[#155FCC] text-white w-full mt-6"
              onClick={() => setFormOpen(true)}
            >
              Register Now
            </Button>

            {/* ----- Check List ----- */}
            <ul className="mt-6 space-y-3 text-gray-800 text-sm">
              {[
                "University Recognised Certificate",
                "Internship Program",
                "Project-based live online training",
                "Career Acceleration Services",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CiCircleCheck className="text-white bg-primary-600 rounded-full p-0.5 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* -------- Right EMI / Scholarship Card -------- */}
          <div className="border rounded-xl p-6 bg-white">
            <h3 className="text-lg font-semibold text-primary-600">
              Scholarships & EMI Options Available!
            </h3>

            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              At OdinSchool, we believe that quality education should be accessible
              to everyone. We offer flexible EMI options and scholarships to support
              this vision. No cost EMIs available!
            </p>

            <p className="mt-6 text-sm font-semibold text-gray-700">
              Our Financing Partners:
            </p>

            {/* Partner Logos */}
            <div className="flex flex-wrap gap-4 mt-4 items-center">
              {data.partners.map((partner) => (
                <div
                  key={partner.id}
                  className="border rounded-lg px-4 py-2 bg-white"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className="object-contain h-8"
                  />
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-700 mt-6">
              You can also reserve your seat with <strong>₹5,000 + GST</strong>
            </p>
          </div>
        </div>

        {/* ------------------ Modal ------------------ */}
        <Modal
          header_text="Enquire Now"
          open={formOpen}
          onOpenChange={setFormOpen}
        >
          <PrimaryForm
            slug={slug}
            buttonText="Request a Callback"
            isModal={true}
            sourceDomain="Course form"
          />
        </Modal>
      </div>
    </section>
  );
};

export default DaFeeModule;
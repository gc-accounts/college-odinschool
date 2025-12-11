"use client";

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/ui/avatar";
import { Card, CardContent } from "@/components/components/ui/card";

interface InstructorProfileProps {
  sectionClass?: String;
  data: {
    id: number;
    name: string;
    photo: string;
    designation: string;
    currentCompany: string;
  }[];
}

const InstructorProfileHome = ({ sectionClass, data }: InstructorProfileProps) => {
  return (
    <section className={`${sectionClass || ""} py-16 bg-[#F8FBFF]`}>
      <div className="container">

        {/* ---------- Heading ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B274A] mb-2">
            Meet our Mentors and Speakers!
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Get the chance to interact with professionals from top companies,
            who bring years of real-world experience to the table.
          </p>
        </div>

        {/* ---------- Grid Cards (4 per row) ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((mentor) => (
            <Card
              key={mentor.id}
              className="rounded-2xl border border-[#E4ECF7] overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-0">
                {/* Top Light Blue Bar */}
                <img src={mentor.photo} alt={mentor.name} className="h-full w-full object-cover" />
                <div className="p-6 flex flex-col items-center text-center">
                  
                  {/* Name */}
                  <h3 className="text-lg font-semibold text-[#0B274A]">
                    {mentor.name}
                  </h3>

                  {/* Designation */}
                  <p className="text-gray-500 text-sm mb-4">{mentor.designation}</p>

                  {/* Current Company Logo */}
                  <div className="w-full">
                    <div className="rounded-md bg-white p-3 border flex items-center justify-center h-12">
                      <Image
                        src={mentor.currentCompany}
                        alt={mentor.name}
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstructorProfileHome;

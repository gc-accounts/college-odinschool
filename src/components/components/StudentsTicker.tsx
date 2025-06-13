'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { studentsData } from '@/components/data/studentsData';

interface CardsProps {
  sectionClass?: string;
}

const StudentsTicker = ({ sectionClass }: CardsProps) => {
  const duplicatedStudents = [...studentsData, ...studentsData];
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`${show ? 'block' : 'hidden'}`}>
      <section id="student-ticker" className={`${sectionClass ? sectionClass : '' } w-full overflow-x-hidden relative`}
      >

        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="text-3xl md:text-5xl  font-display leading-tight mb-4">
            Success Stories <span className="text-primary-600">Placed Freshers</span>
          </h2>
          {/* <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p> */}
        </div>

        <div className="slider-cover">
          <div className="slider">
            <div className="slide-track">
              {duplicatedStudents.map((student, index) => (
                <div
                  key={`${student.name}-${index}`}
                  className="slide p-3 mx-2 rounded-2 placeCard text-center bg-primary-600"
                >
                  <div>
                    <Image
                      src={student.student_image}
                      alt={student.name}
                      width={65}
                      height={65}
                      className="stdImg bg-primary-50 w-[65px] h-[65px] rounded-full mb-2 mx-auto object-cover"
                      objectFit="cover"
                      loading="eager"
                      draggable="false"
                      priority={index < 4}
                    />
                    <p className="text-white font-semibold mb-1">{student.name}</p>
                    <div className="flex justify-center bg-primary-50 rounded-sm">
                      <Image
                        src={student.current_company_image}
                        alt="Current Company"
                        width={80}
                        height={80}
                        className="placeLogo px-2"
                        loading="lazy"
                        draggable="false"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
        .slider-cover {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: 100%;
          overflow: hidden;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * ${studentsData.length}));
          }
        }

        .slider {
          height: 170px;
          margin: auto;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .slider .slide-track {
          animation: scroll 150s linear infinite;
          display: flex;
          align-items: center;
          width: calc(180px * ${duplicatedStudents.length});
        }

        .slider .slide {
          height: 170px;
          min-width: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeCard {
          background-color: #4f46e5; /* primary-600 */
          border-radius: 0.5rem;
          padding: 1rem;
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media only screen and (max-width: 600px) {
          .slider .slide {
            min-width: 110px;
          }
          
          .placeCard {
            height: 160px;
            padding: 0.75rem;
          }
        }
      `}</style>
      </section>
    </div>
  );
};

export default StudentsTicker;

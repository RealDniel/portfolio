"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import experienceData from "@/app/data/experience";

interface ExperienceItem {
  title: string;
  org: string;
  date: string;
  bullets: string[];
}



export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-black to-emerald-950 text-white">
      <h2 className="text-center hero-text">Experience</h2>

      <div className="relative mt-20 max-w-5xl mx-auto">
        
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-emerald-800/40 -translate-x-1/2"></div>

        <div className="flex flex-col gap-20">
          {experienceData.map((item, i) => {
            const isLeft = i % 2 === 0;
            const isOpen = openIndex === i;

            return (
              <div key={i} className="relative flex w-full">
                {/* Dot */}
                <div className="absolute left-1/2 w-6 h-6 bg-emerald-700 border-2 border-emerald-400 rounded-full -translate-x-1/2"></div>

                {/* Card */}
                <div
                    className={`
                        w-[45%] p-6 rounded-2xl border border-emerald-900 
                        bg-black/40 backdrop-blur-lg
                        transition-all duration-300 text-left
                        ${isLeft ? "ml-0 mr-auto" : "ml-auto mr-0"}
                    `}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-emerald-300">{item.org}</p>
                      <p className="text-sm text-neutral-400">{item.date}</p>
                    </div>
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>

                  {/* Collapsible bullets */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <ul
                      className={`
                        list-disc text-neutral-300 text-sm space-y-2
                        ${isLeft ? "list-inside" : "list-inside"}
                      `}
                    >
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
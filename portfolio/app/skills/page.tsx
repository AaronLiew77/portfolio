"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const Skills = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <BackgroundBeams />
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <HoverEffect items={skillsContent} />
      </div>
    </div>
  );
};

const resumeContent = [
  {
    title: "Experience",
    description: "Your professional journey",
    content: (
      <>
        <h3 className="text-2xl font-semibold">Ernst & Young (EY) - Kuala Lumpur</h3>
        <p className="text-xl">Finance Analyst, Automations, and Robotics (FAAR) - Intern</p>
        <p className="text-gray-400">01/2024 - 04/2024</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Developed and optimized workflows with Alteryx</li>
          <li>Liaised with clients to enhance data quality</li>
          <li>Utilized Python libraries to reduce manual workload</li>
        </ul>

        {/* Add other experience items here */}
      </>
    ),
  },
  {
    title: "Education",
    description: "Your academic background",
    content: (
      <>
        <h3 className="text-2xl font-semibold">Sunway University</h3>
        <p className="text-xl">Bachelor of Computer Science</p>
        <p className="text-gray-400">2022 - 2024</p>
        <p>CGPA: 3.65</p>

        <h3 className="text-2xl font-semibold mt-4">Sunway College</h3>
        <p className="text-xl">Diploma in Information Technology</p>
        <p className="text-gray-400">2020 - 2022</p>
        <p>CGPA: 3.96</p>
      </>
    ),
  },
  {
    title: "Extracurricular Activities",
    description: "Your achievements beyond academics",
    content: (
      <>
        <h3 className="text-2xl font-semibold">Malaysia Techlympics 2023 Hackathon</h3>
        <p className="text-xl">Top 3 (Data Science)</p>
        <p className="text-gray-400">2023</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Developed a financial foresight tool using AI</li>
          <li>Led team innovation and task delegation</li>
          <li>Used Reflex Pynecone Python Web Framework</li>
        </ul>

        {/* Add other extracurricular activities here */}
      </>
    ),
  },
];

const skillsContent = [
  {
    title: "C# ASP.NET Web Forms",
    description: "Proficient in developing web applications using ASP.NET Web Forms",
    link: "#", // Placeholder link
  },
  {
    title: "SQL",
    description: "Strong knowledge of Structured Query Language for database management",
    link: "#",
  },
  {
    title: "Alteryx",
    description: "Experienced in using Alteryx for data analysis and workflow automation",
    link: "#",
  },
  {
    title: "Python",
    description: "Skilled in Python programming for AI / ML applications",
    link: "#",
  },
  {
    title: "React (Next.js - TypeScript)",
    description: "Proficient in building modern web applications with React and Next.js",
    link: "#",
  },
  {
    title: "Figma",
    description: "Experienced in using Figma for UI/UX design",
    link: "#",
  },
  {
    title: "Java",
    description: "Intermediate understanding in Java programming knowledge and principles",
    link: "#",
  },
];
export default Skills;
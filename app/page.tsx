"use client"
import Image from "next/image";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/app/data/projects";
import ExperienceTimeline from "@/components/Experience";
import Background from "@/components/Background";
import Reveal from "@/components/Reveal";


export default function Home() {
  var [showAll, setShowAll] = useState(false);
  return (
    <div id="container" className="pt-15 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black transition-colors duration-500">

      {/* HERO */}
      <div id="hero" className="relative flex flex-row min-h-screen w-full items-center justify-center px-6 pb-20 gap-6 text-white transition-all duration-500 overflow-hidden">
        <Background />
        {/* Top fade */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-transparent to-black z-5"/>
        {/* Fade to black at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black z-5"/>

        <div className="z-10 flex flex-col h-full w-1/2 items-center justify-center text-white gap-8 transition-all duration-500">
          <Image 
            alt="Picture of Daniel Martin" 
            src="/img/link1.png" 
            quality="100" 
            height="300" 
            width="300" 
            className="glow-pulse border-2 border-emerald-900 rounded-full object-cover shadow-xl transition-all duration-500 hover:scale-105"
          />
          <h1 className="hero-text transition-all duration-500">Daniel Martin</h1>
          <h3 className="sub-hero-text transition-all duration-500">See what I've been working on!</h3>
          <a href="#projects" className="border border-emerald-600 px-3 py-1 rounded-full hover:bg-emerald-700/40 transition">Projects</a>
        </div>

        <div className="z-10 items-center w-1/2 h-full pr-10 transition-all duration-500">
          <p className="about-text max-w-[80%] h-full leading-loose transition-all duration-500">
            <span className="font-bold">Hi!</span><br></br>
            My name is Daniel Martin, and I am a second year Computer Science major at Oregon State University, focusing in Artificial Intelligence. 
            I have made a habit of pursuing opportunities beyond my degree requirements, including leadership with the AI club @ OSU, teaching students 
            as an undergraduate learning assistant for Intro to Computer Science, and involving myself in undergraduate AI research. I've spent many 
            hours building out cool projects (either personal, professional, or for hackathons), and have grown to love the software development process. 
            I'm always looking for new opportunities and connections, so feel free to reach out!
          </p>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="flex flex-col w-full text-white py-20 transition-all duration-500">
        <div className="h-30 w-full flex items-center justify-center">
          <h2 className="hero-text transition-all duration-500">Projects</h2>
        </div>

        <div 
          id="project-container" 
          className="mt-10 flex flex-wrap items-center mx-auto flex-row gap-10 justify-center max-w-[1200px] transition-all duration-500"
        >
          {(showAll ? projects : projects.slice(0, 4)).map((project, i) => (
              <Reveal key={i} delay={0.1 * i}>
              <ProjectCard {...project} />
              </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="px-6 py-2 border border-emerald-900 rounded-full text-white transition-all duration-300 hover:bg-gradient-to-b hover:from-emerald-900 hover:to-black hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div id="experience" className="pt-50 w-full transition-all duration-500">
        <ExperienceTimeline />
      </div>

      {/* CONTACT */}
      <div id="contact" className="w-full py-80 bg-gradient-to-b from-emerald-950 to-black text-white flex justify-center transition-all duration-500">
        <div className="flex flex-col justify-center max-w-3xl w-full px-6 text-center">

          <h2 className="hero-text mb-10 transition-all duration-500">Contact</h2>
          <p className="text-neutral-300 mb-12 subhero-text mx-auto transition-all duration-500">
            Want to collaborate, chat about AI, or talk about opportunities?  
            I’m always happy to connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">

            {/* Email */}
            
            <div className="w-full sm:w-1/3 p-6 rounded-2xl border border-emerald-900 bg-black/40 backdrop-blur-md text-center transition-all duration-300 hover:bg-emerald-900/20 hover:scale-105">
            <a 
              href="mailto:martid24@oregonstate.edu" 
            >
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-neutral-300 text-sm">martid24@oregonstate.edu</p>
            </a>
            </div>

            {/* GitHub */}
            <div className="w-full sm:w-1/3 p-6 rounded-2xl border border-emerald-900 bg-black/40 backdrop-blur-md text-center transition-all duration-300 hover:bg-emerald-900/20 hover:scale-105">
            <a 
              href="https://github.com/RealDniel" 
              target="_blank"
            >
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-neutral-300 text-sm">RealDniel</p>
            </a>
            </div>

            {/* LinkedIn */}
            <div className="w-full sm:w-1/3 p-6 rounded-2xl border border-emerald-900 bg-black/40 backdrop-blur-md text-center transition-all duration-300 hover:bg-emerald-900/20 hover:scale-105">
            <a 
              href="https://www.linkedin.com/in/martid24/" 
              target="_blank"
            >
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-neutral-300 text-sm">@martid24</p>
            </a>
            </div>


          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-black/90 text-neutral-300 py-8 flex flex-col items-center justify-center border-t border-emerald-900 transition-all duration-500">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
          <a href="mailto:martid24@oregonstate.edu" className="hover:text-emerald-500 transition duration-300 hover:scale-105">Email</a>
          <a href="https://github.com/RealDniel" target="_blank" className="hover:text-emerald-500 transition duration-300 hover:scale-105">GitHub</a>
          <a href="https://www.linkedin.com/in/martid24/" target="_blank" className="hover:text-emerald-500 transition duration-300 hover:scale-105">LinkedIn</a>
        </div>
        <p className="text-sm text-neutral-400 transition-all duration-500">&copy; {new Date().getFullYear()} Daniel Martin. All rights reserved.</p>
      </footer>
    </div>
  );
}

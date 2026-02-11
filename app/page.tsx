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
    <div id="container" className="pt-15 min-h-screen items-center justify-center font-sans transition-colors duration-500">

      {/* HERO */}
      <div id="hero" className="relative flex flex-row min-h-screen w-full items-center justify-center px-6 pb-20 gap-6 text-white transition-all duration-500 overflow-hidden">
        <Background />

        <div className="z-10 flex flex-col h-full w-1/2 items-center justify-center text-white gap-2 transition-all duration-500">
          <Image 
            alt="Picture of Daniel Martin" 
            src="/img/link1.png" 
            quality="100" 
            height="300" 
            width="300" 
            className="glow-green border-2 border-emerald-900 rounded-full object-cover shadow-xl transition-all duration-500 mb-8"
          />
          <h1 className="hero-text transition-all duration-500">Daniel Martin</h1>
          <h2 className="text-2xl tracking-wide transition-all mb-8 duration-500">CS Student Based in Oregon</h2>
          <a href="#projects" className="border border-emerald-600 px-3 py-1 rounded-full hover:bg-emerald-700/40 transition">Projects</a>
        </div>

        <div className="z-10 items-center w-1/2 h-full pr-10 transition-all duration-500">
          <p className="about-text max-w-[80%] h-full leading-loose transition-all duration-500">
            <span className="font-bold">Hi!</span><br></br>
            My name is Daniel Martin, and I am a second year Computer Science major at Oregon State University, focusing in Artificial Intelligence. 
            I have made a habit of pursuing opportunities beyond my degree requirements, including leadership with the AI club @ OSU, teaching students 
            as an undergraduate learning assistant for Intro to Computer Science, and involving myself in undergraduate AI research. I've spent many 
            hours building out cool projects (personal, professional, hackathons, etc.), and have grown to love the software development process. 
            I'm always looking for new opportunities and connections, so feel free to reach out!
          </p>

          <div className="flex gap-6 mt-8">
            <a 
              href="https://github.com/RealDniel" 
              target="_blank"
              className="text-white hover:text-emerald-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/martid24/" 
              target="_blank"
              className="text-white hover:text-emerald-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:martid24@oregonstate.edu"
              className="text-white hover:text-emerald-500 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
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
        {/*Featured*/}
        {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.name} delay={0.1 * i}>
              <ProjectCard {...project} />
              </Reveal>
          ))}
        {/*Rest*/}
        {showAll && projects.slice(4).map((project) => (
          <ProjectCard key={project.name} {...project}/>
        ))
        }
        
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
      <div id="experience" className="pt-20 w-full transition-all duration-500">
        <ExperienceTimeline />
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

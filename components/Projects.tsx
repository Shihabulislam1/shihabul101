"use client";

import { projectsData } from "@/lib/data";
import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";


function Projects() {
  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    sectionName: "Projects"
  });

  return (
    <section className="scroll-mt-28 mb-28 sm:mb-48" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;

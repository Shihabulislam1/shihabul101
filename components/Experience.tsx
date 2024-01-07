"use client";

import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/contexts/ThemeContext";

function Experience() {
  const { ref } = useIntersectionObserver({
    threshold: 0.5,
    sectionName: "Experience",
  });
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "rgba(255,255,255,0.05" : "f3f4f6";
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-48 ">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((Item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: backgroundColor,
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.05)",
              }}
              date={Item.date}
              icon={Item.icon}
              iconStyle={{
                background:theme==="light"? "white":"rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{Item.title}</h3>
              <p className="font-normal !mt-0">{Item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
                {Item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;

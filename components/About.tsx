"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

function About() {
  const { ref } = useIntersectionObserver({
    threshold: 0.75,
    sectionName: "About",
  });

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-48 scroll-mt-28 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="">
        <p className="mb-4">
          Currently pursuing a BSc in{" "}
          <span className="font-bold">Mechatronics Engineering</span>, I'm
          passionate about leveraging my academic foundation to excel in web
          development. Proficient in{" "}
          <span className="font-bold">ReactJS, NextJS, and TailwindCSS,</span> I
          specialize in creating{" "}
          <span className="italic">
            intuitive and dynamic digital experiences.
          </span>
          <span className="italic">Problem-solving is my forte.</span> I thrive
          on devising impactful solutions that enhance user interactions,
          drawing from a strong analytical foundation cultivated through my{" "}
          <span className="font-bold">engineering studies.</span>
        </p>
        <p>
          Let's collaborate on pioneering web projects that captivate and leave
          a lasting impact on audiences.
        </p>
      </div>
    </motion.section>
  );
}

export default About;

"use client";
import { motion } from "framer-motion";

function SectionDivider({ margin = "my-24" }: { margin?: string }) {
  return (
    <motion.div
      className={` bg-gray-200 ${margin} h-8 w-2 rounded-full hidden sm:block `}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0, y: 0 }}
      transition={{ delay: 0.4 }}
    ></motion.div>
  );
}

export default SectionDivider;

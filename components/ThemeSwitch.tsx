"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-105 transition-all duration-1500 ease-in-ou dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;

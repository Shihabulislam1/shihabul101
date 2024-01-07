import React, { useState, useContext, createContext } from "react";
import {
  SectionName,
  ActiveSectionContextType,
  ActiveSectionContextProviderProps,
} from "@/lib/types";

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
};

export { ActiveSectionContextProvider, useActiveSection };

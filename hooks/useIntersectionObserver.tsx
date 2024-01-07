import { useEffect } from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContextProvider";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

function useIntersectionObserver({
  threshold = 0.75,
  sectionName = "Home",
}: useIntersectionObserverProps) {
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  const [ref, inView] = useInView({
    threshold: threshold,
  });
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}

type useIntersectionObserverProps = {
  threshold?: number;
  sectionName?: SectionName;
};

export default useIntersectionObserver;

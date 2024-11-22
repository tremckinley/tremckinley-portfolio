import { useState } from "react";
import ProfileCard from "./assets/ProfileCard/ProfileCard";
import AboutSection from "./assets/AboutSection";
import ProjectSection from "./assets/ProjectSection";
import { motion } from "motion/react";

function App() {
  const [view, setView] = useState("projects");

  return (
    <div className="h-fit w-full flex flex-col items-center bg-neutral">
      <div className="w-full max-w-7xl border flex flex-col items-between h-fit lg:h-screen bg-[#C9E6C060]">
        <ProfileCard state={{ view, setView }} />
        <div className="p-10 md:p-20 md:pb-0">
          {
          (view == "bio" || view == "all") && (
            <motion.div 
            initial={{y:-100, opacity: 0}} 
            animate={{y:0, opacity: 1}}
            transition={{duration: .5}} 
            className="flex flex-wrap justify-center"
            >
              <AboutSection />
            </motion.div>
          )
          }
        {
          (view == "projects" || view == "all") && (
            <motion.div 
            initial={{y:-100, opacity: 0}} 
            animate={{y:0, opacity: 1}}
            transition={{duration: .5}} 
            className="w-full"
            >
              <ProjectSection />
            </motion.div> 
          )
        }
        </div>
      </div>
    </div>
  );
}

export default App;

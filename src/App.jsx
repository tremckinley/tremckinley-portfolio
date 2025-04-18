import { useState } from "react";
import ProfileCard from "./assets/ProfileCard/ProfileCard";
import AboutSection from "./assets/AboutSection";
import ProjectSection from "./assets/ProjectSection";
import { motion } from "motion/react";

function App() {
  const [view, setView] = useState("projects");

  return (
      <div className="w-full flex flex-col items-between min-h-fit h-[100vh] bg-zinc-100 pt-12">
        <ProfileCard state={{ view, setView }} />
        <div className="p-10 md:pb-0">
          {
          (view == "bio" || view == "all") && (
            <motion.div 
            initial={{y:-100, opacity: 0}} 
            animate={{y:0, opacity: 1}}
            transition={{duration: .2}} 
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
            transition={{duration: .3}} 
            className="w-full"
            >
              <ProjectSection />
            </motion.div> 
          )
        }
        </div>
      </div>
  );
}

export default App;

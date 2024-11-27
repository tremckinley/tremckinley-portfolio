import { useState } from "react";
import ProfileCard from "./assets/ProfileCard/ProfileCard";
import AboutSection from "./assets/AboutSection";
import ProjectSection from "./assets/ProjectSection";
import { motion } from "motion/react";

function App() {
  const [view, setView] = useState("projects");

  return (
    <div className="h-screen min-h-fit w-full flex flex-col items-center bg-gray-500 font-body">
      <div className="w-full max-w-7xl flex flex-col items-between min-h-fit h-full shadow-xl shadow-gray-800 bg-emerald-50">
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
    </div>
  );
}

export default App;

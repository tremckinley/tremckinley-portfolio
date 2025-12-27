import { useState } from "react";
import ProfileCard from "./assets/ProfileCard/ProfileCard";
import { motion } from "motion/react";
import { sections } from "./utils/sections"


function App() {
  const [view, setView] = useState("bio");

  return (
    <div id="app" className="w-full flex flex-col h-screen overflow-hidden bg-zinc-100">
      <ProfileCard state={{ view, setView }} />
      <div id="content" className="w-full flex-1 mx-auto p-10 md:pb-0 overflow-y-auto">
        {sections.map(({ id, Component, className }) => (
          (view === id || view === "all") && (
            <motion.div
              key={id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .3 }}
              className={className}
            >
              <Component />
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
}

export default App;

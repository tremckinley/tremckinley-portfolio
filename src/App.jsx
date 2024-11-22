import { useState } from "react";
import ProjectCard from "./assets/ProjectCard/ProjectCard";
import ProfileCard from "./assets/ProfileCard/ProfileCard";

function App() {
  const [view, setView] = useState("projects");

  return (
    <div className="h-screen w-full flex flex-col items-center bg-neutral">
      <div className="w-full max-w-7xl border flex flex-col items-between h-screen bg-[#C9E6C060]">
        <ProfileCard state={{ view, setView }} />
        {
          (view == "projects" || view == "all") && (
            <div className="flex flex-wrap justify-center">
              <ProjectCard tools={["html5"]}></ProjectCard>
              <ProjectCard tools={["css3"]}></ProjectCard>
              <ProjectCard tools={["react"]}></ProjectCard>
            </div> 
          )
        }
      </div>
    </div>
  );
}

export default App;

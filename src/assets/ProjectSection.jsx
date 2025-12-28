import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../utils/projects";

export default function ProjectSection() {
    return (
        <section>
        <div className="flex flex-wrap justify-center">
            {!projects ? <p>Error: Projects not loaded</p> : 
                projects.map((project) => {
                    return(
                    <ProjectCard key={project.title} project={project} />
                )
                })
            }

        </div>
        </section>
    )
}
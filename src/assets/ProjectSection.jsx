import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./projects";

export default function ProjectSection() {
    return (
        <section>
        <h3 className="header text-gray-700">Products:</h3>
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
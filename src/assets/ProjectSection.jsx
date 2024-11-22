import ProjectCard from "./ProjectCard/ProjectCard";

export default function ProjectSection() {
    return (
        <section className="my-4">
        <h3 className="header">My Projects:</h3>
        <div className="flex flex-wrap justify-center mt-10">
            <ProjectCard tools={["html5"]}></ProjectCard>
            <ProjectCard tools={["css3"]}></ProjectCard>
            <ProjectCard tools={["react"]}></ProjectCard>
            <ProjectCard tools={["github"]}></ProjectCard>

        </div>
        </section>
    )
}
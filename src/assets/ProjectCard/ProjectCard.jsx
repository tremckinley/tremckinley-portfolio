import ToolsUsed from "./ToolsUsed";
import { motion } from "motion/react";

export default function ProjectCard(props) {
  const { project } = props;

  return (
    <div className="flex flex-col m-2 border-2 accent rounded-lg md:flex-row md:max-w-xl overflow-clip bg-white hover:bg-neutral-100 hover:border-accent-secondary max-w-3xl shadow-sm shadow-[peru]">
      <div className=" border-b accent flex">
        <a href={project.liveUrl} target="_blank" className="w-full overflow-clip">
        <motion.img 
          whileHover={{scale: 1.3}}
          transition={{duration: .2}}
          className="w-full md:min-w-60 md:w-60 h-48 md:min-h-full object-fill md:object-center" 
          src={project.imageUrl}
          alt="project screenshot"
        />
        </a>
      </div>
      <div className="px-4 pt-3">
      <ToolsUsed tools={project.tools} />
        <div className="cardLabel text-gray-800 pt-1 w-full max-w-fit border-b text-xl font-roboto font-bold">
          {project.title}
        </div>
        <p className="my-2 text-sm">
          {project.desc}
        </p>
        <div className="mt-4 mb-2 w-full text-gray-600">
        <hr/>
        <a href={project.liveUrl} target="_blank" className="hover:text-blue-400 hover:underline"><i className="fa fa-up-right-from-square text-xs m-1"></i>Check It Out</a>
        {project.repoUrl && (<a href={project.repoUrl} target="_blank" className="flex items-center hover:text-blue-400 hover:underline"><i className="fa fa-github m-1"></i><p>Visit Repo</p></a>)}
        </div>
      </div>
    </div>
  );
}

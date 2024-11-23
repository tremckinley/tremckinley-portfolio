import ToolsUsed from "./ToolsUsed";
import { motion } from "motion/react";

export default function ProjectCard(props) {
  const { project  } = props;

  return (
    <div className="flex flex-col m-2 border-2 border-stone-500 rounded-lg max-w-96 overflow-clip bg-white hover:bg-neutral-100">
      <div className="max-h-48 w-full mr-4 border-b border-stone-500 flex">
      {project.repoUrl && (<a href={project.repoUrl} target="_blank" className="flex items-center text-lg hover:text-2xl"><i className="fa fa-github text-black m-1"></i></a>)}
        <a href={project.liveUrl} target="_blank" className="w-full overflow-clip">
        <motion.img 
          whileHover={{scale: 1.3}}
          transition={{duration: .2}}
          className="w-full h-full object-fill" src={project.imageUrl}
        />
        </a>
      </div>
      <div className="px-4 py-2">
      <ToolsUsed tools={project.tools} />
        <div className="cardLabel pt-1 w-full max-w-fit border-b border--300 text-xl font-roboto font-bold">
          {project.title}
        </div>
        <p className="my-2 text-sm">
          {project.desc}
        </p>
        <a href={project.liveUrl} target="_blank" className="hover:text-blue-400 hover:underline">Check it out <i className="fa fa-up-right-from-square text-xs"></i></a>
      </div>
    </div>
  );
}

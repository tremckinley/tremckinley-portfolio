import ToolsUsed from "./ToolsUsed";
import { motion } from "motion/react";

export default function ProjectCard(props) {
  const { title, desc, repoUrl, imageUrl, tools  } = props;

  return (
    <div className="flex flex-col m-2 border border-stone-500 rounded-lg max-w-80  overflow-clip bg-neutral-50 hover:bg-neutral-100">
      <div className="h-24 w-full mr-4 border-b flex">
      <button href={repoUrl}><i className=" fa fa-github text-black text-lg m-1 hover:text-xl"></i></button>
        <a href="#" target="_blank" className="w-full overflow-clip">
        <motion.img 
          whileHover={{scale: 1.3}}
          transition={{duration: .2}}
          className="w-full h-full" src="src\assets\images\default-bg.jpg"
        />
        </a>
      </div>
      <div className="px-4 py-2">
      <ToolsUsed tools={tools} />
        <div className="cardLabel pt-1 w-full max-w-fit border-b border--300 text-xl">
          The Fright Night
        </div>
        <p className="my-2 text-sm">
          This is a description of a project. I'm typing more to see what a
          longer description looks like
        </p>
      </div>
    </div>
  );
}

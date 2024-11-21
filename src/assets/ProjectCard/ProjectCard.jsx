import ToolsUsed from "./ToolsUsed";

export default function ProjectCard(props) {
  const { title, desc, repoUrl, imageUrl, tools  } = props;

  return (
    <div className="flex flex-col m-2 border border-stone-500 rounded-lg max-w-80  overflow-clip">
      <div className="h-24 w-full mr-4 border-b flex">
      <button href={repoUrl}><i className=" fa fa-github text-black text-lg m-1"></i></button>
      <img className="h-full w-full flex-1 border" src="src/Untitled.jpg" />
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

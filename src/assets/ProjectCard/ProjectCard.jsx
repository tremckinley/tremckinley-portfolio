import ToolsUsed from "./ToolsUsed";

export default function ProjectCard(props) {
  const { imageUrl, tools  } = props;

  return (
    <div className="flex flex-col m-2 border border-stone-500 rounded-r-lg bg-amber-50 max-w-72 max-h-60 overflow-clip">
      <div className="h-24 w-full mr-4 bg-neutral-50">
        <img className="w-full max-h-full" src={imageUrl}></img>
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
        <div className="flex flex-between">
          <i className=" fa fa-github text-black text-lg m-1"></i>
          <i className=" fa fa-file-lines text-black text-lg m-1 mr-4"></i>
          <span>Details</span>
        </div>
      </div>
    </div>
  );
}

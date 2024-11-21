export default function ProjectCard2(props) {

    return (
        <div className="flex flex-col m-4 border rounded-lg bg-amber-50">
        <div className="h-24 w-full bg-blue-50 mr-4"></div>

       
            <div className="px-4 py-2">
            <div className="cardLabel pt-1 w-full max-w-fit border-b border-slate-300 text-2xl">
                The Fright Night
            </div>
            <p className="my-2">This is a description of a project.</p>
            <div className="flex flex-between">
            <i className=" fa fa-github text-black text-lg m-1"></i>
            <i className=" fa fa-file-lines text-black text-lg m-1 mr-4"></i><span>Details</span>

            </div>
        </div>
        </div>
    )
}
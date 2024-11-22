export default function ViewSelector(props) {
    const {state}= props;

    return (
        <nav className="border border-gray-500 bg-neutral-300/30 mt-4 w-full max-w-96 rounded-lg flex overflow-clip">
            <button key="bio" className={"text-center px-2 rounded-lg m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "bio" ? "bg-white border" : "")}
                onClick={() => state.setView("bio")}
            >
                <div>
                    Biography
                </div>
            </button>
            <button key="projects" className={"text-center px-2 rounded-lg m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "projects" ? "bg-white border" : "")}
                onClick={() => state.setView("projects")}
            >
                <div>
                    Projects
                </div>
            </button>
            <button key="resume" className={"text-center px-2 rounded-lg m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "resume" ? "bg-white border" : "")}
                onClick={() => state.setView("resume")}
            >
                <div>
                    Resum&#233;
                </div>
            </button>
            <button key="all" className={"text-center px-2 rounded-lg m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "all" ? "bg-white border" : "")}
                onClick={() => state.setView("all")}
            >
                <div className="font-bold">
                    All
                </div>
            </button>
        </nav>
    )
}
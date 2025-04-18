export default function ViewSelector(props) {
    const {state}= props;

    return (
        <nav className=" mt-4 w-full max-w-full flex overflow-clip">
            <div className="flex w-full max-w-96 justify-normal">
            <button key="bio" className={"text-center px-2 m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "bio" ? "selected-view" : "")}
                onClick={() => state.setView("bio")}
            >
                <div>
                    Biography
                </div>
            </button>
            <button key="projects" className={"text-center px- m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "projects" ? "selected-view" : "")}
                onClick={() => state.setView("projects")}
            >
                <div>
                    Products
                </div>
            </button>
            {/* <button key="resume" className={"text-center px-2 m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "resume" ? "selected-view" : "")}
                onClick={() => state.setView("resume")
            >
                <div>
                    Resum&#233;
                </div>
            </button> */}
            <button key="all" className={"text-center px-2 m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "all" ? "selected-view" : "")}
                onClick={() => state.setView("all")}
            >
                <div className="font-bold">
                    All
                </div>
            </button>
            </div>
        </nav>
    )
}
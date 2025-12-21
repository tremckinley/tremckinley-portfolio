export default function ViewSelector(props) {
    const { state } = props;

    return (
        <nav className=" mt-4 w-full max-w-full flex overflow-clip md:justify-start justify-center">
            <div className="flex w-full md:max-w-96 md:ml-32 text-lg">
                <button key="bio" className={"text-center px-4 py-2 text-black flex-1 transition-colors duration-200 " + (state.view == "bio" ? "selected-view" : "border-b border-gray-200 hover:bg-gray-50")}
                    onClick={() => state.setView("bio")}
                >
                    <div>
                        Biography
                    </div>
                </button>
                <button key="blog" className={"text-center px-4 py-2 text-black flex-1 transition-colors duration-200 " + (state.view == "blog" ? "selected-view" : "border-b border-gray-200 hover:bg-gray-50")}
                    onClick={() => state.setView("blog")}
                >
                    <div>
                        Blog
                    </div>
                </button>
                <button key="projects" className={"text-center px-4 py-2 text-black flex-1 transition-colors duration-200 " + (state.view == "projects" ? "selected-view" : "border-b border-gray-200 hover:bg-gray-50")}
                    onClick={() => state.setView("projects")}
                >
                    <div>
                        Products
                    </div>
                </button>
                {/* <button key="all" className={"text-center px-2 m-[1px] text-black border-gray-800 flex-1 "+ (state.view == "all" ? "selected-view" : "")}
                onClick={() => state.setView("all")}
            >
                <div className="font-bold">
                    All
                </div>
            </button> */}
            </div>
        </nav>
    )
}
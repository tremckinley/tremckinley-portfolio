import { sections } from "../../utils/sections";

export default function ViewSelector(props) {
    const { state } = props;

    return (
        <nav className=" mt-4 w-full max-w-full flex overflow-clip md:justify-start justify-center">
            <div className="flex w-full md:max-w-96 md:ml-32 text-lg">
                {sections.map(({ id, title }) => (
                <button key={id} className={"text-center px-4 py-2 text-black flex-1 transition-colors duration-200 " + (state.view == id ? "selected-view" : "border-b border-gray-200 hover:bg-gray-50")}
                    onClick={() => state.setView(id)}
                >
                    {title}
                </button>
                ))}
                <button key="contact" className={"text-center px-4 py-2 text-black flex-1 transition-colors duration-200"}
                    onClick={async () => {
                        state.setView("bio")
                        await new Promise((resolve) => setTimeout(resolve, 100))
                        document.getElementById('footer').scrollIntoView({ behavior: "smooth" })
                    }}
                >
                    Contact
                </button>``
            </div>
        </nav>
    )
}
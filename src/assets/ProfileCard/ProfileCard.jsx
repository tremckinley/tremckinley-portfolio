import ViewSelector from "./ViewSelector"

export default function ProfileCard(props) {
    const {state} = props
    return (
        <div className="flex flex-col items-center p-4 text-gray-600 border shadow-xl banner bg-gradient-to-t md:bg-gradient-to-r from-[#C9E6C090] from-60% to-[#999999]">
            <div className="flex flex-col md:flex-row items-center md:justify-start w-full">
            <img className="rounded-[40%] max-h-24 md:max-h-40 ml-10 border border-gray-500 center" alt="profile image of me" src="src\assets\images\profile photo.jpeg"/>
            <div className="ml-4 pl-3 text-center md:text-left">
            <h1 className="mt-4 mb-2 text-4xl md:text-5xl lg:text-7xl">Tremaine McKinley</h1>
            <h2 className="text-xl md:text-2xl ml-2">Civic Tech. Web Dev. Still Learning.</h2>
            <h3 className="mt-2 ml-2 text-xl font-semibold text-black">Let's get to it. Come and see:</h3>
            </div>
            </div>
            <ViewSelector state={state} />
        </div>
    )
}
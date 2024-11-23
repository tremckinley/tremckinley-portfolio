import ViewSelector from "./ViewSelector"

export default function ProfileCard(props) {
    const { state } = props
    return (
        <div className="flex flex-col items-center p-4 text-gray-600 border shadow-xl banner bg-gradient-to-t md:bg-gradient-to-r from-[#c9e6c070] from-70% to-[#999999]">
            <div className="flex flex-col md:flex-row items-center md:justify-start w-full">
                <div className="md:flex md:flex-col md:items-center md:ml-10 w-40 flex flex-col items-center">
                    <img className="rounded-[40%] max-h-24 md:max-h-40 border border-gray-500 center" alt="profile image of me" src="src\assets\images\profile photo.jpeg" />
                    <div className="flex justify-between w-36 md:text-2xl text-lg">
                        <a href="https://www.linkedin.com/in/tremaine-mckinley/" target="_blank"><i className="hover:text-white fa-brands fa-linkedin"></i></a>
                        <button onClick={() => {
                            navigator.clipboard.writeText("tremckinley901@gmail.com")
                                .then(() => {
                                    alert('tremckinley901@gmail.com copied to clipboard');
                                })
                                .catch(err => {
                                    console.error('Failed to copy: ', err);
                                });
                            }}
                        >
                            <i className="fa fa-envelope hover:text-white"></i>
                        </button>
                        <a href="https://github.com/tremckinley" target="_blank"><i className="fa-brands fa-github hover:text-white"></i></a>
                    </div>
                </div>
                <div className="ml-4 pl-3 text-center md:text-left">
                    <h1 className="mt-4 mb-2 text-4xl md:text-5xl lg:text-7xl font-roboto font-bold">Tremaine McKinley</h1>
                    <h2 className="text-xl md:text-2xl ml-2">Civic Tech. Web Dev. Still Learning.</h2>
                    <h3 className="mt-2 ml-2 text-xl font-semibold text-black">Let's get to it. Come and see:</h3>
                </div>
            </div>
            <ViewSelector state={state} />
        </div>
    )
}
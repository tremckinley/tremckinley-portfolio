import ViewSelector from "./ViewSelector"

export default function ProfileCard(props) {
    const { state } = props
    return (
        <div className="flex flex-col items-center p-4 text-gray-600 shadow-xl bg-gradient-to-t md:bg-gradient-to-r from-[#c9e6c070] from-70% to-gray-400">
            <div className="md:ml-28 flex flex-col md:flex-row items-center md:justify-start w-full">
                <div className="flex flex-col md:flex-row-reverse items-center">
                    <img className="rounded-[40%] max-h-24 md:max-h-24 border border-gray-500 center" alt="profile image of me" src="assets\public\images\profile photo.jpeg" />
                    <div className="flex md:flex-col md:items-end md:pr-2 justify-between w-24 md:text-xl text-lg">
                        <a href="https://www.linkedin.com/in/tremaine-mckinley/" target="_blank"><i className="hover:text-green-500 fa-brands fa-linkedin"></i></a>
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
                            <i className="fa fa-envelope hover:text-green-500"></i>
                        </button>
                        <a href="https://github.com/tremckinley" target="_blank"><i className="fa-brands fa-github hover:text-green-500"></i></a>
                    </div>
                </div>
                <div className="md:ml-4 text-center md:text-left">
                    <h1 className="mt-4 mb-2 text-4xl md:text-5xl font-roboto font-bold">Tremaine McKinley</h1>
                    <h2 className="text-lg md:text-xl ml-2">Civic Tech. Web Dev. Still Learning.</h2>
                    <h3 className="mt-2 ml-2 text-md md:text-lg font-semibold text-black">Let's get to it. Come and see:</h3>
                </div>
            </div>
            <ViewSelector state={state} />
        </div>
    )
}
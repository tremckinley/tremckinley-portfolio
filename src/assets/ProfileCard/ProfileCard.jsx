import ViewSelector from "./ViewSelector"

export default function ProfileCard(props) {
    const { state } = props
    return (
        <div className="flex flex-col lg:h-72 items-center justify-between p-4 text-gray-600 shadow-xl bg-gradient-to-t lg:bg-gradient-to-l from-[#c9e6c070] from-90% to-gray-400" role="banner">
            <div className="xl:ml-36 flex flex-col lg:flex-row items-center lg:justify-start w-full">
                <div className="flex flex-col lg:flex-row-reverse items-center">
                    <img className="rounded-[40%] max-h-36 lg:max-h-48 border border-gray-500 center" alt="profile image of me" src="/headshot.jpeg" />
                    <div className="flex lg:flex-col lg:items-end lg:pr-2 justify-between w-24 lg:text-3xl text-xl">
                        <a href="https://www.linkedin.com/in/tremaine-mckinley/" target="_blank"><i className="hover:text-white active:text-white fa-brands fa-linkedin" title="Visit LinkedIn page"></i></a>
                        <button title="Email Me - Copy to clipboard" onClick={() => {
                            navigator.clipboard.writeText("tremckinley901@gmail.com")
                                .then(() => {
                                    alert('tremckinley901@gmail.com copied to clipboard');
                                })
                                .catch(err => {
                                    console.error('Failed to copy: ', err);
                                });
                            }}
                        >
                            <i className="fa fa-envelope hover:text-white active:text-white"></i>
                        </button>
                        <a href="https://github.com/tremckinley" target="_blank" title="Visit my GitHub Profile"><i className="fa-brands fa-github hover:text-white active:text-white"></i></a>
                    </div>
                </div>
                <div className="lg:ml-4 text-center lg:text-left">
                    <h1 className="mt-4 mb-2 text-4xl lg:text-6xl font-roboto font-bold">Tremaine McKinley</h1>
                    <h2 className="text-lg lg:text-2xl ml-2">Civic Technologist. Web Dev. Impact Player.</h2>
                    <h3 className="mt-2 ml-2 text-md lg:text-2xl font-semibold text-black">Let's get to it.</h3>
                </div>
            </div>
            <ViewSelector state={state} />
        </div>
    )
}
import ViewSelector from "./ViewSelector"

export default function ProfileCard(props) {
    const { state } = props
    return (
        <div className="w-full p-4 pb-0 text-gray-600 shadow-xl" role="banner border border-gray-500">
            <div className="flex flex-col md:flex-row items-end justify-center w-full max-w-6xl mx-auto">
                <div className="w-full flex flex-row justify-center md:justify-start items-center">
                    <div className="flex flex-col md:flex-row-reverse items-center mb-2">
                        <img className="rounded-[40%] max-h-28 md:max-h-24" alt="profile image of me" src="/headshot.jpeg" style={{ boxShadow: "0px 0px 10px var(--accent-secondary)" }} />
                        {/* <div className="flex lg:flex-col lg:items-end lg:pr-2 justify-between w-fit lg:text-xl text-xl mx-auto lg:mx-0">
                            <a href="https://www.linkedin.com/in/tremaine-mckinley/" target="_blank"><i className="contact-icon fa-brands fa-linkedin" title="Visit LinkedIn page"></i></a>
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
                                <i className="fa fa-envelope contact-icon"></i>
                            </button>
                            <a href="https://github.com/tremckinley" target="_blank" title="Visit my GitHub Profile"><i className="fa-brands fa-github contact-icon"></i></a>
                        </div> */}
                    </div>
                    <div className="ml-4 text-left">
                        <h1 className="heading-text mt-2 mb-2 text-3xl lg:text-3xl">Tremaine McKinley</h1>
                        <h2 className="text-sm lg:text-lg">Analyst. Developer. Impact Player.</h2>
                    </div>
                </div>
                <ViewSelector state={state} />
            </div>
        </div>
    )
}
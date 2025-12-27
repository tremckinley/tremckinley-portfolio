import Carousel from "../Carousel/Carousel"
export default function BioSection() {

    return (
        <div className="w-full flex flex-col items-center text-center px-4 md:px-0 gap-8 mb-16">
            <h2 id="hero-statement" className="card p-2">
                Let's build the <span>RIGHT</span> things, the <span>RIGHT</span> way.
            </h2>
            <section id="about-me" className="text-lg leading-7 text-gray-700 max-w-3xl">
                <p>
                    I'm a Technical Business Analyst who helps organizations transform <b>ideas</b> into <b>solutions</b>. I specialize in translating business needs into clear technical direction.
                </p>
                <p>
                    I have over 6 years of experience unlocking innovation with cross-functional communication and thoughtful problem-solving. My background in education, I.T., and local government has shaped my priorities towards building solutions that last, even with limited resources.
                </p>
                <p>
                    As a lifelong learner, I am constantly adapting my skillset. I love finding ways to become a better team player, data specialist, and problem-solver. Beyond my day-to-day work, I'm committed to helping grow the Memphis Tech community, building passion projects with code, and raising a family.
                </p>
            </section>


        </div>
    )
}
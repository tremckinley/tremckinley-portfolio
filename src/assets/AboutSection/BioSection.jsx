import { skills, tools, experiences } from "../../utils/resumeItems"
import { galleryPhotos } from "../../utils/galleryPhotos"
import Carousel from "../Carousel/Carousel"
import BlogPost from "../BlogPost/BlogPost"
import { blogs as articles } from "../../utils/blogs"

export default function BioSection() {

    return (
        <>
            <div className="w-full flex flex-col items-center text-center px-4 md:px-0 gap-8 mb-16">
                <h2 id="hero-statement" className="card p-2">
                    Let's build the <span>RIGHT</span> things, the <span>RIGHT</span> way.
                </h2>
                <section id="about-me" className="text-lg leading-7 text-gray-700 max-w-3xl">
                    <p>
                        I'm a Technical Business Analyst who helps organizations transform <b>ideas</b> into <b>solutions</b>. I specialize in translating business needs into clear technical direction.
                    </p>
                    <p>
                        I have over six years of experience unlocking innovation with cross-functional communication and thoughtful problem-solving. My background in education, I.T., and local government has shifted my priorities towards user-centered solutions that last, even with limited resources.
                    </p>
                    <p>
                        As a lifelong learner, I am constantly adapting my skillset. I love finding ways to become a better team player, data specialist, and problem-solver. Beyond my day-to-day work, I'm committed to helping grow my local tech community, building passion projects with code, and raising a family.
                    </p>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
                    {/* Core Skills Section */}
                    <section className="w-full max-w-3xl col-span-2">
                        {skills && (<><h3 className="text-2xl font-bold text-accent-secondary mb-6">Core Skills</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 card text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div></>)}
                    </section>

                    {/* Tools Section */}
                    <section className="w-full max-w-3xl col-span-2">
                        {tools && (<><h3 className="text-2xl font-bold text-accent-secondary mb-6">Tools</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 card text-sm font-medium"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div></>)}
                    </section>
                </div>
                {/* Featured Articles Section */}
                <section className="w-full col-span-2">
                        {articles && (<><h3 className="text-2xl font-bold text-accent-secondary mb-6">Featured Articles</h3>
                            <div className="flex flex-wrap justify-center gap-3 text-sm">
                                {articles.filter((article) => article.featured === true).map((article, index) => (
                                    <BlogPost key={article.title} blog={article} />
                                ))}
                            </div></>)}
                </section>
                {/* Photo Gallery Section */}
                <section className="w-full max-w-4xl">
                    <h3 className={"text-2xl font-bold text-accent-secondary mb-6" + (galleryPhotos.length > 0 ? "" : " hidden")}>Photo Gallery</h3>
                    <Carousel />
                </section>

                {/* Experience Section */}
                {/* <section className="w-full max-w-3xl">
                    <h3 className="text-2xl font-bold text-accent-secondary mb-6">Key Experience</h3>
                    <div className="flex flex-col gap-4">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="card p-6 text-left hover:border-accent transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                                    <h4 className="text-lg font-bold text-accent-secondary">{exp.title}</h4>
                                    <span className="text-sm font-medium text-accent">{exp.period}</span>
                                </div>
                                <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section> */}

                {/* Resume Download Button */}
                <footer id="footer">
                <h3 id="contact-me" className="text-2xl font-bold text-accent-secondary mb-6">Contact Me</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* LinkedIn Profile */}
                    <a
                        href="https://linkedin.com/in/tremaine-mckinley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-secondary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                        LinkedIn Profile
                    </a>
                    {/* Resume View */}
                    <a
                        href="/tremaine_mckinley_resume_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-secondary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <i className="fa-solid fa-file-pdf"></i>
                        View Resumé
                    </a>
                    {/* GitHub Profile */}
                    <a
                        href="https://github.com/tremckinley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-secondary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <i className="fa-brands fa-github"></i> GitHub Profile
                    </a>
                </div>
                </footer>
            </div>
        </>
    )

}
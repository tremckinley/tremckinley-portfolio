
import { useState } from "react"
import Carousel from "../Carousel/Carousel"

export default function AboutSection() {
    const [view, setView] = useState('bio')

    const carouselItems = [
        {
            src: "/fementor-recipe-page-rho-vercel-app-1024x768desktop-1423f1.png",
            caption: "Recipe Page Challenge"
        },
        {
            src: "/focusbreathing.png",
            caption: "Focus Breathing App"
        },
        {
            src: "/react_formula.png",
            caption: "React Formula Project"
        },
        {
            src: "/space-baby-bay-vercel-app-1024x768desktop-b8d584 (1).png",
            caption: "Space Baby Project"
        }
    ];

    return (
        <div className="flex">
            <section className="card max-w-6xl my-4 p-5 bg-white shadow-gray-400 mb-10 md:text-lg text-md">
                <div className="mb-4">
                    <h3 className="font-bold text-lg text-accent-secondary mb-2">Background</h3>
                    <p className="mb-4">
                        I’m a technical problem-solver and self-teaching web developer. I am most passionate about creating innovative solutions that empower communities. With a background in non-profit operations, software administration, IT support, and international business, I thrive at the intersection of technology and civic engagement.
                    </p>

                    <h3 className="font-bold text-lg text-accent-secondary mb-2">Current Role</h3>
                    <p className="mb-4">
                        Currently, I’m helping shape the future of Memphis government services as a Business Services Analyst for the Shelby County Division of Planning and Development. My work focuses on configuring and enhancing SaaS platforms to streamline processes, improve accessibility, and drive meaningful change for internal and external customers. No day is the same and I approach every challenge with curiosity, determination, and a diverse toolkit. Previously, I was a Director of Finance & Technology for a local charter school. Beyond my professional roles, I am a lifelong learner with experience living and working abroad.
                    </p>

                    <h3 className="font-bold text-lg text-accent-secondary mb-2">What Drives Me</h3>
                    <p>
                        I am consistently pursuing personal projects that combine creativity and technical expertise to advance my personal and professional dreams. You can usually find me completing a course, networking with smarter people, or developing something just because I think it will be cool. Whether I’m troubleshooting code, improving user experiences, or building tools to make civic tech more inclusive, I’m committed to leaving things better than I found them.
                    </p>
                </div>
                <p className="text-center font-bold">
                    Let’s connect! There's something great we can do together.
                </p>
            </section>
            {view === 'photos' && (
                <section id="carousel">
                    <Carousel items={carouselItems} />
                </section>
            )}
        </div>
    )
}

import { useState, useEffect } from "react";
import { galleryPhotos } from "../../utils/galleryPhotos"

export default function Carousel({ items = galleryPhotos }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto-advance logic
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    if (!items || items.length === 0) return null;

    return (
        <div className="w-full m-auto">
            {/* Carousel Container with Arrows */}
            <div className="flex items-center justify-center gap-4">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="group flex-shrink-0 text-2xl rounded-full md:w-12 md:h-12 w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 cursor-pointer hover:bg-accent hover:text-white transition-all"
                >
                    <i className="fa-solid fa-chevron-left text-sm md:text-base text-accent-secondary group-hover:text-white"></i>
                </button>

                {/* Image Container */}
                <div
                    className="h-48 md:h-64 lg:h-80 flex-1 w-auto bg-center bg-cover duration-500 shadow-xl"
                    style={{ backgroundImage: `url(${items[currentIndex].src})` }}
                />

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="group flex-shrink-0 text-2xl rounded-full md:w-12 md:h-12 w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 cursor-pointer hover:bg-accent hover:text-white transition-all"
                >
                    <i className="fa-solid fa-chevron-right text-sm md:text-base text-accent-secondary group-hover:text-white"></i>
                </button>
            </div>

            <p className="text-center font-semibold">{items[currentIndex].caption}</p>

            {/* Dots */}
            <div className="flex top-4 justify-center py-2">
                {items.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-xs md:text-sm cursor-pointer mx-1 transition-colors ${currentIndex === slideIndex ? 'text-accent' : 'text-gray-300'
                            }`}
                    >
                        <i className="fa-solid fa-circle"></i>
                    </div>
                ))}
            </div>
        </div>
    );
}

import { useState, useEffect } from "react";

export default function Carousel({ items }) {
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

    // Auto-advance logic (optional, can be removed if strictly manual)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    if (!items || items.length === 0) return null;

    return (
        <div className="max-w-[600px] h-[400px] w-full m-auto mb-24  relative group">
            <div
                style={{ backgroundImage: `url(${items[currentIndex].src})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-xl"
            >
                            
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full w-10 h-10 flex items-center justify-center bg-black/40 text-white cursor-pointer hover:bg-black/50 transition-all">
                <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full w-10 h-10 flex items-center justify-center bg-black/40 text-white cursor-pointer hover:bg-black/50 transition-all">
                <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
            </div>

            <p className="text-center font-bold">{items[currentIndex].caption}</p>

            {/* Dots */}
            <div className="flex top-4 justify-center py-2">
                {items.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-sm cursor-pointer mx-1 transition-colors ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-300'
                            }`}
                    >
                        <i className="fa-solid fa-circle"></i>
                    </div>
                ))}
            </div>
        </div>
    );
}

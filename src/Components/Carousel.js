import React, { useEffect, useState } from 'react'

const Carousel = ({ bg1, bg2, bg3, bg4, styles }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    return (
        <div>
            <div className="relative w-full" data-carousel="static">
                <div className="">
                    {/* Item 1 */}
                    <div className={`duration-700 ease-in-out ${activeIndex === 0 ? 'block' : 'hidden'}`} data-carousel-item="active">
                        <img src={bg1} className={styles} alt="Slide 1" />
                    </div>
                    {/* Item 2 */}
                    <div className={`duration-700 ease-in-out ${activeIndex === 1 ? 'block' : 'hidden'}`} data-carousel-item>
                        <img src={bg2} className={styles} alt="Slide 2" />
                    </div>
                    {/* Item 3 */}
                    <div className={`duration-700 ease-in-out ${activeIndex === 2 ? 'block' : 'hidden'}`} data-carousel-item>
                        <img src={bg3} className={styles} alt="Slide 3" />
                    </div>
                    {/* Item 4 */}
                    <div className={`duration-700 ease-in-out ${activeIndex === 3 ? 'block' : 'hidden'}`} data-carousel-item>
                        <img src={bg4} className={styles} alt="Slide 4" />
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    {[...Array(totalSlides).keys()].map((index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                            aria-current={activeIndex === index}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                            data-carousel-slide-to={index}
                        ></button>
                    ))}
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/60 hover:bg-gray-800/80 focus:ring-4 focus:ring-gray-800/70 focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/60 hover:bg-gray-800/80 focus:ring-4 focus:ring-gray-800/70 focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Carousel

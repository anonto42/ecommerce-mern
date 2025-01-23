import React, { useState, useEffect } from 'react';
import { RotatingLines } from "react-loader-spinner"

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});

    // Automatically slide to the next image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Go to the previous slide
    const leftSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Go to the next slide
    const rightSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle image load
    const handleImageLoad = (idx) => {
        setLoadedImages((prevState) => ({ ...prevState, [idx]: true }));
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Overlay for click navigation */}
            <div className="w-full h-full flex absolute z-10">
                <div
                    onClick={leftSlide}
                    className="w-[50%] h-full cursor-pointer"
                ></div>
                <div
                    onClick={rightSlide}
                    className="w-[50%] h-full cursor-pointer"
                ></div>
            </div>

            {/* Slider */}
            <div
                className="w-full h-full flex transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full bg-[#f0f0f0] h-full bg-center bg-cover relative"
                    >
                        <img
                            loading='lazy'
                            src={image}
                            alt={`Slide ${idx + 1}`}
                            className={
                                `w-full h-full object-cover transition-opacity duration-500 ease-in ${
                                loadedImages[idx] ? 'opacity-100' : 'opacity-0'
                                }`
                            }
                            onLoad={() => handleImageLoad(idx)}
                        />
                        {!loadedImages[idx] && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <RotatingLines
                                    visible={true}
                                    height="90"
                                    width="90"
                                    color="#7F8289"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
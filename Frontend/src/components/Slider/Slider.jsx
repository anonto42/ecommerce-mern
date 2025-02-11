import React, { useState, useEffect } from 'react';
import { RotatingLines } from "react-loader-spinner"

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});
    const [loading, setLoading] = useState(false);

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
                        className='w-full h-full bg-center bg-cover relative flex-shrink-0 bg-[#f0f0f0] flex'
                    >
                        <img 
                            className={`w-full h-full object-cover transition-opacity duration-500 ease-in ${loading? "opacity-100" : "opacity-0"}`}
                            src={image} 
                            alt="Not found"
                            loading='lazy'
                            onLoad={()=>setLoading(true)}
                        />
                        {
                            !loading?(
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <RotatingLines
                                        visible={true}
                                        height="50"
                                        width="50"
                                        color="#7F8289"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                    />
                                </div>
                            ):(<></>)
                        }
                </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
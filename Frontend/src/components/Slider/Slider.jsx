import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    function leftSlite(){
        if(currentIndex < 0) setCurrentIndex(images.length - 1)
        else setCurrentIndex(currentIndex - 1)
    }
    function rightSlite(){
        if(currentIndex == (images.length - 1 )) setCurrentIndex(0)
        else setCurrentIndex(currentIndex + 1)
    }
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div 
                className='w-full h-full flex absolute z-20'
            >
                <div
                    onClick={()=>leftSlite()}
                    className='w-[50%] h-full'
                ></div>
                <div
                    onClick={rightSlite} 
                    className='w-[50%] h-full'
                ></div>
            </div>
            <div
                className="w-full h-full flex transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </div>


    );
};

export default Slider;

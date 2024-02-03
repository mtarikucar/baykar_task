import React, { useState } from 'react';

const Slider = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className="relative flex items-center justify-center h-screen">
            <img src={"../assets/svg/ButtonLeft.svg"} alt="left"
                onClick={prevSlide}
                className="absolute top-1/2 left-10 z-10 cursor-pointer select-none transform -translate-y-1/2"
                width={50}
                height={50}
            />
            {images.map((image, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={image} alt='Travel Image' className="w-full h-screen object-cover" />
                        )}
                    </div>
                );
            })}
            {/*<ChevronRightIcon
                onClick={nextSlide}
                className="absolute top-1/2 right-10 z-10 cursor-pointer select-none transform -translate-y-1/2"
                width={50}
                height={50}
            />*/}
        </section>
    );
};

export default Slider;

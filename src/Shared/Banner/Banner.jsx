import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Banner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="md:h-[400px]">
            <SwiperSlide>
                <div className="flex items-center justify-center md:h-screen">
                    <img src="https://i.ibb.co/hd8yDgj/julker-naeem-Hst08-Iwypa0-unsplash.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center md:h-screen">
                    <img src="https://i.ibb.co/X8FHZcP/richard-stachmann-BOn-P0o-MNVk-Q-unsplash.jpg" alt="" />
                </div>

            </SwiperSlide>

            <SwiperSlide>
                <div className="flex items-center justify-center md:h-screen">
                    <img src="https://i.ibb.co/2cSvWt3/jerry-wang-c-Cjlha-Rx-Ns-M-unsplash.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center md:h-screen">
                    <img src="https://i.ibb.co/NxZxKwZ/marina-shatskih-n-Ko-IXt-Efk-Z8-unsplash.jpg" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
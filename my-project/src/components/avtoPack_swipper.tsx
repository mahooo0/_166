// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import truck_icaon from '../../public/svg/truck_2d.svg';
import Star_icaon from '../../public/svg/Star.svg';

// Optionally import Swiper modules
import 'swiper/css/navigation'; // Navigation module
import { Navigation } from 'swiper/modules'; // Import Navigation module from Swiper
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Awtoparck_swipper() {
    const [wi, setwi] = useState<boolean>();
    useEffect(() => {
        setwi(window.screen.width < 690);
    }, []);
    return (
        <Swiper
            className="ml-[108px] mt-[31px]"
            navigation={false} // Enable navigation buttons (prev/next)
            modules={[Navigation]} // Add the Navigation module
            spaceBetween={24} // Spacing between slides
            slidesPerView={wi ? 2 : 7} // Number of slides to show
        >
            <SwiperSlide
                className={
                    wi
                        ? 'ml-[35px] flex flex-col '
                        : 'ml-[108px] flex flex-col '
                }
            >
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="w-[288px] h-[269px]  shadow-custom-shadow-large text-center my-2 ">
                    <h5 className="text-[20px] font-[600]">Soyuduculu</h5>
                    <p className="text-[#98999A] text-[20px] font-[600] mt-[14px]">
                        5.1 metr / 5 ton
                    </p>
                    <Image
                        src={truck_icaon}
                        alt="truck_icaon"
                        className="mt-[21px]"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

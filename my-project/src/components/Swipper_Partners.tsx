// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import Partner_icaon from '../../public/svg/Partner.svg';

// Optionally import Swiper modules
import 'swiper/css/navigation'; // Navigation module
import { Navigation } from 'swiper/modules'; // Import Navigation module from Swiper
import Image from 'next/image';

export default function Partner_swipper() {
    return (
        <Swiper
            className="ml-[108px] mt-[31px]"
            navigation={false} // Enable navigation buttons (prev/next)
            modules={[Navigation]} // Add the Navigation module
            spaceBetween={29} // Spacing between slides
            slidesPerView={7} // Number of slides to show
        >
            <SwiperSlide className="ml-[108px]">
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[193px] h-[85px] shadow-custom-shadow-large  mt-2 mb-2 flex justify-center items-center ">
                    <Image src={Partner_icaon} alt="Partner_icaon" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

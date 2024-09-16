// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import Uzbekistan_icaon from '../../public/svg/uzbekistan.svg';

// Optionally import Swiper modules
import 'swiper/css/navigation'; // Navigation module
import { Navigation } from 'swiper/modules'; // Import Navigation module from Swiper
import Image from 'next/image';

export default function MySwiper() {
    return (
        <Swiper
            className="ml-[108px] mt-[31px]"
            navigation={false} // Enable navigation buttons (prev/next)
            modules={[Navigation]} // Add the Navigation module
            spaceBetween={28} // Spacing between slides
            slidesPerView={8} // Number of slides to show
        >
            <SwiperSlide className="ml-[108px]">
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>{' '}
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>{' '}
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>{' '}
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>{' '}
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>{' '}
            <SwiperSlide>
                <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                    <Image src={Uzbekistan_icaon} alt="Uzbekistan_icaon" />
                    Uzbekstan
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

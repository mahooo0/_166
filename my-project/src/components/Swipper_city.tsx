// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import Uzbekistan_icaon from '../../public/svg/uzbekistan.svg';

// Optionally import Swiper modules
import 'swiper/css/navigation'; // Navigation module
import { Navigation } from 'swiper/modules'; // Import Navigation module from Swiper
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MySwiper() {
    const [wi, setwi] = useState<boolean>();
    useEffect(() => {
        setwi(window.screen.width < 690);
    }, []);
    return (
        <Swiper
            className={wi ? 'mt-[26px]' : 'ml-[108px] mt-[31px]'}
            navigation={false} // Enable navigation buttons (prev/next)
            modules={[Navigation]} // Add the Navigation module
            spaceBetween={wi ? 12 : 28} // Spacing between slides
            slidesPerView={wi ? 2.4 : 8} // Number of slides to show
        >
            <SwiperSlide className={wi ? 'ml-[35px]' : 'ml-[108px]'}>
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

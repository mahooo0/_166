// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import logistika_icaon from '../../public/svg/lagistika.svg';
import Star_icaon from '../../public/svg/Star.svg';

// Optionally import Swiper modules
import 'swiper/css/navigation'; // Navigation module
import { Navigation } from 'swiper/modules'; // Import Navigation module from Swiper
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SErvices_swipper() {
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
            slidesPerView={wi ? 1 : 5} // Number of slides to show
        >
            <SwiperSlide
                className={
                    wi
                        ? 'ml-[35px] flex flex-col '
                        : 'ml-[108px] flex flex-col '
                }
            >
                <div className="bg-[#FAFAFA]  w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[108px] flex flex-col ">
                <div className="bg-[#FAFAFA] w-[392px] h-[160px] mb-6 rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
                <div className="bg-[#FAFAFA] w-[392px] h-[160px]  rounded-lg  flex flex-col pt-[33px] pl-[80px] gap-3 relative">
                    <h4 className="text-[#001D5B] text-[18px] font-[700] ">
                        Logistika
                    </h4>
                    <p className="text-[#001D5B] text-[12px] font-[400] w-[234px]">
                        Müasir texnologiyalar və geniş nəqliyyat şəbəkəmiz ilə
                        yüklərinizin təhlükəsiz çatdırılmasını təmin edirik.
                    </p>
                    <div className=" absolute top-[28px] left-[28px]">
                        <Image src={logistika_icaon} alt="logistika_icaon" />
                    </div>
                    <div className=" absolute flex items-center right-0">
                        <Image src={Star_icaon} alt="Star_icaon" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

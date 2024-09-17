import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import 'swiper/css/navigation'; // Navigation module
import { Navigation } from 'swiper/modules'; // Import Navigation module from Swiper
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import star_icaon from '../../public/svg/Star2.svg';
import Pleaceholder_icaon from '../../public/svg/profile_pleaceholder.svg';

export default function Rewue_swipper() {
    // Reference to Swiper instance
    const [wi, setwi] = useState<boolean>();
    useEffect(() => {
        setwi(window.screen.width < 690);
    }, []);
    const swiperRef = useRef<any>(null);

    // Function to go to the next slide
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // Function to go to the previous slide
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className="relative">
            <div
                className="absolute w-full h-full flex flex-row justify-between items-center z-[999] px-[63px]"
                style={wi ? { display: 'none' } : {}}
            >
                <button
                    onClick={handlePrev}
                    className="w-[52px] h-[52px] bg-[#FFFFFF] text-black border border-[#E4E4E4] hover:bg-[#FFCC4D] hover:border-none hover:text-white flex justify-center items-center rounded-full stroke-black hover:stroke-white rotate-180"
                >
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5 29.75L26.25 21L17.5 12.25"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="w-[52px] h-[52px] bg-[#FFFFFF] text-black border border-[#E4E4E4] hover:bg-[#FFCC4D] hover:border-none hover:text-white flex justify-center items-center rounded-full stroke-black hover:stroke-white"
                >
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5 29.75L26.25 21L17.5 12.25"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <Swiper
                ref={swiperRef}
                className="ml-[108px] mt-[31px]"
                navigation={false} // Navigation module is added but not used internally
                modules={[Navigation]} // Add the Navigation module
                spaceBetween={24} // Spacing between slides
                slidesPerView={1} // Number of slides to show
            >
                {wi ? (
                    <>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="px-[15px]">
                            <div className="w-[360px] h-[345px] shadow-custom-shadow-large my-2 flex flex-col">
                                <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                    <Image
                                        src={Pleaceholder_icaon}
                                        alt="Pleaceholder_icaon"
                                    />
                                    <p className="text-[#989898] text-[18px] font-[400]">
                                        01
                                    </p>
                                </div>
                                <div className="flex flex-row mt-7 ml-6 gap-2">
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                    <Image src={star_icaon} alt="star_icaon" />
                                </div>
                                <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                    Lorem ipsum dolor sit amet consectetur. Est
                                    vestibulum ornare viverra vestibulum neque
                                    turpis. Enim at amet et vivamus rhoncus.
                                </p>
                                <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                    Lisa Smith
                                </h5>
                            </div>
                        </SwiperSlide>
                    </>
                ) : (
                    <>
                        <SwiperSlide>
                            <div className="px-[108px] flex flex-row  justify-between">
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-[108px] flex flex-row  justify-between">
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-[108px] flex flex-row  justify-between">
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-[108px] flex flex-row  justify-between">
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-[108px] flex flex-row  justify-between">
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px-[108px] flex flex-row  justify-between">
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                                <div className="w-[392px] h-[325px] shadow-custom-shadow-large my-2 flex flex-col">
                                    <div className="flex flex-row  justify-between px-6 mt-6 items-center">
                                        <Image
                                            src={Pleaceholder_icaon}
                                            alt="Pleaceholder_icaon"
                                        />
                                        <p className="text-[#989898] text-[18px] font-[400]">
                                            01
                                        </p>
                                    </div>
                                    <div className="flex flex-row mt-7 ml-6 gap-2">
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                        <Image
                                            src={star_icaon}
                                            alt="star_icaon"
                                        />
                                    </div>
                                    <p className="mt-4 ml-6 w-[344px] text-[16px] font-[400] text-[#989898] pb-6 border-b-2 border-[#F2F2F2]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque turpis. Enim at amet et vivamus
                                        rhoncus.
                                    </p>
                                    <h5 className="mt-7 ml-6 text-[#ECAC00] text-[18px] font-[600]">
                                        Lisa Smith
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                )}

                {/* Repeat for more slides */}
            </Swiper>
        </div>
    );
}

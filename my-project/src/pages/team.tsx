import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import home_icon from '../../public/svg/home.svg';
import strelka_icon from '../../public/svg/strelka2.svg';
import Employee_card from '@/components/Employee_card';
export default function team() {
    return (
        <div>
            <Header />
            <main className="mb-[120px]">
                <div className="max-w-[1224px]  w-full px-[108px] mt-[23px]">
                    <div className="flex flex-wrap items-center">
                        <Image
                            className="h-[20px]"
                            src={home_icon}
                            alt="Home Image"
                            loading="lazy"
                            width={20}
                            height={20}
                        />
                        <Image
                            src={strelka_icon}
                            className="w-[18px] h-[18px]"
                            alt="Arrow Icon"
                            loading="lazy"
                            width={18}
                            height={18}
                        />
                        <p className="text-[12px] font-semibold text-gray-800_01">
                            Parent
                        </p>
                        <Image
                            className="w-[18px] h-[18px]"
                            src={strelka_icon}
                            alt="Arrow Icon"
                            loading="lazy"
                            width={18}
                            height={18}
                        />
                        <p className="text-[12px] font-semibold text-gray-800_01">
                            Child
                        </p>
                        <Image
                            className="w-[18px] h-[18px]"
                            src={strelka_icon}
                            alt="Arrow Icon"
                            loading="lazy"
                            width={18}
                            height={18}
                        />
                        <p className="text-[12px] font-semibold text-gray-800_01">
                            Sub Option
                        </p>
                        <Image
                            className="w-[18px] h-[18px] ml-1"
                            src={strelka_icon}
                            alt="Arrow Icon"
                            loading="lazy"
                            width={18}
                            height={18}
                        />
                        <p className="text-[12px] font-medium text-gray-400">
                            The Chosen One
                        </p>
                    </div>
                </div>
                <ul
                    className="gap-[30px] flex justify-center self-stretch mt-[34px]"
                    role="tablist"
                >
                    <li
                        className="max-w-[1224px] gap-[30px] mx-auto flex w-full flex-wrap justify-center px-14 md:px-5 !text-primary-400__base_ font-semibold text-[16px] "
                        role="tab"
                        id="react-tabs-0"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-controls="react-tabs-1"
                        tabIndex={0}
                        data-rttab="true"
                    >
                        <div className="text-[16px] p-2.5 font-semibold text-neutral-700">
                            Haqqımızda
                        </div>
                        <div className="text-[16px] p-2.5 font-semibold text-[#FFCC4D] border-[#FFCC4D] border-b-2">
                            Komandamız
                        </div>
                        <div className="text-[16px] p-2.5 font-semibold text-neutral-700">
                            Mediada biz
                        </div>
                        <div className="text-[16px] p-2.5 font-semibold text-neutral-700">
                            Blog
                        </div>
                        <div className="text-[16px] p-2.5 font-semibold text-neutral-700">
                            Tez-tez verilən suallar
                        </div>
                        <div className="text-[16px] p-2.5 font-semibold text-neutral-700">
                            Qalereya
                        </div>
                    </li>
                </ul>
                <div className="flex items-center gap-3 px-[108px]">
                    <div className="w-[4%] h-px bg-[#FFCC4D]" />
                    <h2 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                        Komandamız
                    </h2>
                </div>
                <div className="px-[108px] flex flex-row  justify-between mt-[37px]">
                    <Employee_card />
                    <Employee_card />
                    <Employee_card />
                </div>
                <div className="px-[108px] flex flex-row  justify-between mt-[37px]">
                    <Employee_card />
                    <Employee_card />
                    <Employee_card />
                </div>
                <div className="px-[108px] flex flex-row  justify-between mt-[37px]">
                    <Employee_card />
                    <Employee_card />
                    <Employee_card />
                </div>
            </main>
            <Footer />
        </div>
    );
}

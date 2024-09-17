import React from 'react';
import _166 from '../../public/svg/_166.svg';
import facebock from '../../public/svg/facebock_black.svg';
import insta from '../../public/svg/insta_black.svg';
import liked from '../../public/svg/linked_black.svg';
import soxial from '../../public/svg/sosial_black.svg';
import location from '../../public/svg/locations.svg';
import phone from '../../public/svg/phone2.svg';
import phone2 from '../../public/svg/phone.svg';
import letter from '../../public/svg/letter.svg';
import Image from 'next/image';
export default function Footer() {
    return (
        <div className="w-full h-[461px] bg-[#FAFAFA] px-[108px] pt-[64px]">
            <div className="flex flex-row">
                <div>
                    <Image src={_166} alt="_166" />
                    <div className="flex flex-row gap-8 mt-8 text-[#5C5F66] texxt-[12px] font-[400]">
                        <h6>Xidmətlər</h6>
                        <h6>Şirkətimiz</h6>
                        <h6>Blog</h6>
                        <h6>Əlaqə</h6>
                    </div>
                    <div className="flex flex-row gap-4 mt-8">
                        <a href="">
                            <Image src={facebock} alt="facebock" />
                        </a>
                        <a href="">
                            <Image src={insta} alt="insta" />
                        </a>
                        <a href="">
                            <Image src={liked} alt="liked" />
                        </a>{' '}
                        <a href="">
                            <Image src={soxial} alt="social" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col ml-[205px] gap-2">
                    <h6 className="text-black text-[18px] font-[500]">
                        Faydalı linklər
                    </h6>
                    <p className="text-[#5C5F66] text-[14px] font-[400] mt-3">
                        Haqqımızda
                    </p>
                    <p className="text-[#5C5F66] text-[14px] font-[400]">
                        Bizim komanda
                    </p>
                    <p className="text-[#5C5F66] text-[14px] font-[400]">
                        Mediada biz
                    </p>
                    <p className="text-[#5C5F66] text-[14px] font-[400]">
                        Bloq
                    </p>
                    <p className="text-[#5C5F66] text-[14px] font-[400]">
                        Tez-tez verilən suallar
                    </p>
                    <p className="text-[#5C5F66] text-[14px] font-[400]">
                        Qalereya
                    </p>
                </div>
                <div className=" ml-[164px] flex flex-col gap-3">
                    <h6>Əlaqə</h6>
                    <div className="flex flex-row gap-4 ">
                        <Image src={location} alt="location" />
                        <p>
                            Yeni Həyat plaza 55 Zərifə Əliyeva, Bakı, Azərbaycan{' '}
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 ">
                        <Image src={phone} alt="location" />
                        <p>+994 (50) 253 46 16</p>
                    </div>
                    <div className="flex flex-row gap-4 ">
                        <Image src={letter} alt="letter" />
                        <p>info@166.az</p>
                    </div>
                    <button className="w-[450px] h-[36px] rounded-lg flex justify-center items-center gap-3 bg-[#FFCC4D] text-white mt-3">
                        <Image src={phone2} alt="phone2" />
                        Call
                    </button>
                </div>
            </div>
            <div className=" border-t-2 border-[#E6E6E6] flex flex-row justify-between h-[53px] items-end mt-[64px] text-[#5C5F66] text-[16px] font-[400]">
                <div className="flex flex-row gap-8">
                    <h6>English</h6>
                    <h6>Privacy</h6>
                    <h6>Legal</h6>
                </div>
                <p>© 2022 | 166.az | Bütün hüquqlar qorunur166tech.az  </p>
            </div>
        </div>
    );
}

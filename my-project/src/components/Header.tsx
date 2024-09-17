import React, { useEffect, useState } from 'react';
import Facebook_icon from '../../public/svg/facebock.svg';
import instaqram_icon from '../../public/svg/Instaqram.svg';
import youtube_icon from '../../public/svg/Youtube.svg';
import Linkedin_icon from '../../public/svg/LinkedIN.svg';
import Card_icon from '../../public/svg/card.svg';
import _166 from '../../public/svg/_166.svg';
import Serch_icon from '../../public/svg/Serch.svg';
import Phone_icon from '../../public/svg/phone.svg';
import Phone_black_icon from '../../public/svg/phone_black.svg';
import aside_icon from '../../public/svg/aside.svg';
import Image from 'next/image';
import LanguageSelect from './select_languige';
import { useRouter } from 'next/router';
export default function Header() {
    const router = useRouter();
    const [wi, setwi] = useState<boolean>();
    const [user, setuser] = useState<boolean>(false);
    useEffect(() => {
        setwi(window.screen.width < 690);
    }, []);
    console.log();

    return (
        <header className="flex flex-col bg-white shadow-custom-shadow">
            {/* Header Top  */}
            <div
                className={
                    wi
                        ? 'flex flex-row items-center px-[33px]  h-[72px] w-full justify-between '
                        : 'flex flex-row items-center px-[108px]  h-[72px] w-full justify-between '
                }
            >
                <div className="flex flex-row gap-[90px]">
                    <div
                        className={
                            wi
                                ? 'flex flex-row w-[145px]  h-[38px] '
                                : 'flex flex-row w-[278px]  h-[38px] shadow-custom-shadow rounded-lg'
                        }
                    >
                        <button
                            onClick={() => setuser(false)}
                            className={
                                wi
                                    ? 'w-[121px] font-mulish font-[500] bg-white text-[14px] h-[38px]  border-[#ECAC00] border-t-[1px]  flex justify-center items-center'
                                    : user
                                    ? 'p-[10px] w-[121px] text-[14px] text-black font-[500]'
                                    : 'w-[121px] font-mulish font-[500] bg-white text-[14px] h-[38px] text-[#ECAC00] border-[#ECAC00] border-[1px] rounded-lg flex justify-center items-center'
                            }
                        >
                            Fərdi{wi ? '' : 'Müştərilər'}
                        </button>
                        <button
                            onClick={() => setuser(true)}
                            className={
                                user
                                    ? ' w-f font-mulish font-[500] bg-white text-[14px] h-[38px] text-[#ECAC00] border-[#ECAC00] border-[1px] rounded-lg flex justify-center items-center'
                                    : 'p-[10px] text-[14px] text-black font-[500]'
                            }
                        >
                            Korporativ {wi ? '' : 'Müştərilər'}
                        </button>
                    </div>
                    <div
                        className="flex flex-row items-center gap-[24px] "
                        style={wi ? { display: 'none' } : {}}
                    >
                        <div onClick={() => router.push('/')}>
                            <Image
                                src={Facebook_icon}
                                alt="Facebook_icon"
                                width={20}
                                height={20}
                            />
                        </div>

                        <Image
                            onClick={() => router.push('/services')}
                            src={instaqram_icon}
                            alt="instaqram_icon"
                            width={20}
                            height={20}
                        />

                        <Image
                            onClick={() => router.push('/abautus')}
                            src={youtube_icon}
                            alt="youtube_icon"
                            width={20}
                            height={20}
                        />

                        <Image
                            onClick={() => router.push('/team')}
                            src={Linkedin_icon}
                            alt="Linkedin_icon"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div
                    className={
                        wi
                            ? '  flex flex-row gap-[21px]'
                            : '  flex flex-row gap-[58px]'
                    }
                >
                    <button className=" bg-none border-none text-black flex flex-row  items-center gap-[6px]">
                        <Image src={Card_icon} alt="Card_icon" />
                        {wi ? '' : 'Onlayn ödəniş'}
                    </button>
                    <LanguageSelect />
                </div>
            </div>
            {/* Header Buttom  */}
            {wi ? (
                <div className="flex flex-row h-[80px] px-[33px] justify-between items-center">
                    <div className="flex flex-row gap-5">
                        <Image src={aside_icon} alt="aside_icon" />
                        <Image src={Serch_icon} alt="Serch_icon" />
                    </div>
                    <Image src={_166} alt="_166" width={60} />
                    <button className="bg-[#FAFAFA] rounded-lg gap-[10px] flex flex-row border-[#E4E4E4] border text-black text-[14px] items-center w-[70px] h-[37px] justify-center ">
                        <Image src={Phone_black_icon} alt="Phone_black_icon" />
                        166
                    </button>
                </div>
            ) : (
                <div className="h-[86px] px-[108px] flex flex-row items-center justify-between">
                    <Image src={_166} alt="_166" />
                    <div className="flex flex-row gap-[96px]">
                        <div className="w-[200px] h-[36px] bg-[#F3F3F3] flex flex-row  rounded-lg pt-[9px] pl-4 pb-[7px] gap-4">
                            <Image src={Serch_icon} alt="Serch_icon" />
                            <input
                                placeholder="Search"
                                type="text"
                                className="bg-[#F3F3F3] border-none focus:outline-none focus:ring-0 w-[140px]"
                            />
                        </div>
                        <div className="flex flex-row gap-[50px]">
                            <ul className="flex flex-row gap-[22px]">
                                <li className="flex items-center  cursor-pointer">
                                    Əsas səhifə
                                </li>
                                <li className="flex items-center  cursor-pointer">
                                    <select
                                        name=""
                                        id=""
                                        className="pl-1 focus:outline-none"
                                    >
                                        <option value="">Şirkətimiz</option>
                                        <option value="">Şirkətimiz</option>
                                        <option value="">Şirkətimiz</option>
                                    </select>
                                </li>
                                <li className="flex items-center  cursor-pointer">
                                    <select
                                        name=""
                                        id=""
                                        className="pl-1 focus:outline-none"
                                    >
                                        <option value="">Şirkətimiz</option>
                                        <option value="">Şirkətimiz</option>
                                        <option value="">Şirkətimiz</option>
                                    </select>
                                </li>
                                <li className="flex items-center  cursor-pointer">
                                    <select
                                        name=""
                                        id=""
                                        className="pl-1 focus:outline-none"
                                    >
                                        <option value="">Şirkətimiz</option>
                                        <option value="">Şirkətimiz</option>
                                        <option value="">Şirkətimiz</option>
                                    </select>
                                </li>
                                <li className="flex items-center  cursor-pointer">
                                    Əlaqə
                                </li>
                            </ul>
                            <button className="bg-[#FFCC4D] rounded-lg gap-[10px] flex flex-row text-white text-[14px] items-center w-[136px] justify-center ">
                                <Image src={Phone_icon} alt="Phone_icon" />
                                Book a call
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

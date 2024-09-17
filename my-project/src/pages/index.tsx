import Image from 'next/image';
import localFont from 'next/font/local';
import Header from '@/components/Header';

import Track_icaon from '../../public/svg/track.svg';
import phone_icaon from '../../public/svg/phone.svg';
import strelka_yellov_icaon from '../../public/svg/strelka_yellow.svg';
import Track3_icaon from '../../public/svg/truck3.svg';
import Map from '../../public/svg/map.svg';
import strelka_icaon from '../../public/svg/strelka.svg';
import students_icaon from '../../public/svg/students.svg';
import students2_icaon from '../../public/Images/Снимок экрана 2024-09-17 222630.png';
import Hands_img from '../../public/Images/image.png';
import HTRaCK_img from '../../public/Images/Снимок экрана 2024-09-17 224956.png';
import MySwiper from '@/components/Swipper_city';
import Partner_swipper from '@/components/Swipper_Partners';
import SErvices_swipper from '@/components/services_swipper';
import Awtoparck_swipper from '@/components/avtoPack_swipper';
import Rewue_swipper from '@/components/Revwue_swipper';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
    const [wi, setwi] = useState<boolean>();
    useEffect(() => {
        setwi(window.screen.width < 690);
    }, []);
    return (
        <>
            {/* */}
            <Header />
            <main>
                {wi ? (
                    <h1 className="mt-[30px] ml-[35px] mr-[35px] font-[700] text-[18px]  ">
                        Peşəkar komandamız və innovativ həllərimiz ilə yük
                        daşımalarınızı daha
                        <br />
                        <span className="text-[#FFCC4D]">sürətli </span>
                        və <span className="text-[#FFCC4D]">effektiv</span>{' '}
                        şəkildə həyata keçiririk.
                    </h1>
                ) : (
                    <h1 className="mt-[38px] ml-[108px] font-[700] text-[48px]  leading-[60.24px]">
                        Peşəkar komandamız və innovativ həllərimiz ilə <br />{' '}
                        yük daşımalarınızı daha{' '}
                        <span className="text-[#FFCC4D]">sürətli </span>
                        və <span className="text-[#FFCC4D]">effektiv</span>{' '}
                        <br />
                        şəkildə həyata keçiririk.
                    </h1>
                )}

                <MySwiper />
                {wi ? (
                    <>
                        <div className="px-[35px] mt-[32px] flex flex-col gap-6">
                            <div className=" bg-[#FFCC4D] rounded-lg h-[183px] overflow-hidden relative ">
                                <h3 className="text-right text-[20px] font-[600px] m-[15px]">
                                    Xidmətlərimiz
                                </h3>
                                <Image
                                    src={Track_icaon}
                                    alt="Track_icaon"
                                    className=" absolute bottom-0   left-0"
                                    width={280}
                                    height={152}
                                />
                                <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                    <Image
                                        src={strelka_icaon}
                                        alt="strelka_icaon"
                                    />
                                </div>
                            </div>
                            <div className=" bg-[#FFCC4D] rounded-lg h-[183px] overflow-hidden relative ">
                                <h3 className="text-left text-[20px] font-[600px] m-[30px]">
                                    Partnyorlar
                                </h3>

                                <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                    <Image
                                        src={strelka_icaon}
                                        alt="strelka_icaon"
                                    />
                                </div>
                            </div>
                            <div className=" flex flex-row gap-6 ">
                                <div className=" w-1/2 h-[183px] bg-[#FFCC4D] rounded-lg  overflow-hidden relative ">
                                    <h3 className="text-left text-[20px] font-[600px] m-[30px]">
                                        Haqqımızda
                                    </h3>

                                    <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                        <Image
                                            src={strelka_icaon}
                                            alt="strelka_icaon"
                                        />
                                    </div>
                                </div>
                                <div className=" w-1/2 h-[183px] bg-[#FFCC4D] rounded-lg  overflow-hidden relative ">
                                    <h3 className="text-left text-[20px] font-[600px] m-[30px]">
                                        Rəylər
                                    </h3>

                                    <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                        <Image
                                            src={strelka_icaon}
                                            alt="strelka_icaon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[70px] flex flex-col px-[35px]">
                            <h2 className=" text-[28px] font-[600] text-black">
                                Bizim Uğur Hekayəmiz
                            </h2>
                            <p className=" fonrt-[400] text-[14px] mt-4">
                                Uzun illərin təcrübəsi ilə müştərilərimizin
                                inamını və etibarını qazanmışıq. Hər bir
                                nailiyyətimiz birgə gördüyümüz işlərin
                                nəticəsidir və bu yolda davam edirik.
                            </p>
                        </div>
                        <div className="mt-[86px] px-[25px] flex flex-col  justify-ceter ite gap-[10px]">
                            <div className="w-[324px] h-[182px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                                <h3 className="mt-4 text-[#FFCC4D] text-[36px] font-[700]">
                                    600 <span className="text-black">+</span>
                                </h3>
                                <h5 className="text-[18px] font-[600] mt-[13px] text-[#3E3E3E]">
                                    Tərəfdaş
                                </h5>
                                <p className="text-[#98999A] text-[14px] font-[400] w-[260px] text-center mt-[13px]">
                                    Əsas tərəfdaşlarımızla uzunmüddətli və
                                    etibarlı işgüzar münasibətlər qururuq.
                                </p>
                            </div>
                            <div className="w-[324px] h-[182px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                                <h3 className="mt-4 text-[#FFCC4D] text-[36px] font-[700]">
                                    300K <span className="text-black">+</span>
                                </h3>
                                <h5 className="text-[18px] font-[600] mt-[13px] text-[#3E3E3E]">
                                    Müştəri məmnuniyyəti
                                </h5>
                                <p className="text-[#98999A] text-[14px] font-[400] w-[260px] text-center mt-[13px]">
                                    Müştərilərimiz bizdən aldıqları xidmətin
                                    keyfiyyətindən razıdırlar.
                                </p>
                            </div>
                            <div className="w-[324px] h-[182px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                                <h3 className="mt-4 text-[#FFCC4D] text-[36px] font-[700]">
                                    13 il <span className="text-black">+</span>
                                </h3>
                                <h5 className="text-[18px] font-[600] mt-[13px] text-[#3E3E3E]">
                                    Təcrübə
                                </h5>
                                <p className="text-[#98999A] text-[14px] font-[400] w-[260px] text-center mt-[13px]">
                                    Uzun illər ərzində sektorun liderlərindən
                                    biri olaraq fəaliyyət göstəririk.
                                </p>
                            </div>
                        </div>
                        <div className="mt-[67px]">
                            <Partner_swipper />
                        </div>
                        <h4 className="pl-[35px] text-[32px] font-[600] mt-[120px] text-[#001D5B]">
                            Xidmətlər
                        </h4>
                        <SErvices_swipper />
                        <h4 className="pl-[35px] text-[32px] font-[600] mt-[120px] text-[#001D5B]">
                            Bizim avtopark
                        </h4>
                        <Awtoparck_swipper />
                        <h4 className="pl-[35px] text-[32px] font-[600] mt-[120px] ">
                            Mediada biz{' '}
                        </h4>
                        <div className="w-[100%] h-[306px] relative top-0  mt-8 ">
                            <div className="bg-black bg-opacity-45 absolute w-full h-full flex items-end rounded-lg z-50 ">
                                <div className="ml-7 mb-8">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <p className="text-white text-[18px] font-[500]">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <button className="bg-[#FFCC4D] text-white rounded-lg w-[136px] h-[40px] flex justify-center items-center mt-4">
                                        Ətraflı oxu
                                    </button>
                                </div>
                            </div>
                            <Image
                                src={students2_icaon}
                                alt="students2_icaon"
                                className="  top-0 h-full"
                                // width={1200}
                            />
                        </div>
                        <div className="mx-[35px] mt-[24px] flex flex-col justify-center gap-6">
                            <div className="w-[324px] h-[379px] bg-[#FAFAFA] rounded-lg flex flex-col  overflow-hidden">
                                <Image src={Hands_img} alt="Hands_img" />
                                <div className="mt-7 ml-7">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <h6 className="text-[22px] font-[600] font-sans ">
                                        Lorem ipsum dolor sit amet consectetur?
                                    </h6>
                                    <p className="text-[16px] font-[400] text-[#989898] mt-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque tur...
                                    </p>
                                </div>
                            </div>
                            <div className="w-[324px] h-[379px] bg-[#FAFAFA] rounded-lg flex flex-col  overflow-hidden">
                                <Image src={Hands_img} alt="Hands_img" />
                                <div className="mt-7 ml-7">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <h6 className="text-[22px] font-[600] font-sans ">
                                        Lorem ipsum dolor sit amet consectetur?
                                    </h6>
                                    <p className="text-[16px] font-[400] text-[#989898] mt-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque tur...
                                    </p>
                                </div>
                            </div>
                            <div className="w-[324px] h-[379px] bg-[#FAFAFA] rounded-lg flex flex-col  overflow-hidden">
                                <Image src={Hands_img} alt="Hands_img" />
                                <div className="mt-7 ml-7">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <h6 className="text-[22px] font-[600] font-sans ">
                                        Lorem ipsum dolor sit amet consectetur?
                                    </h6>
                                    <p className="text-[16px] font-[400] text-[#989898] mt-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque tur...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[70px] flex flex-row justify-between px-[35px] items-center">
                            <div>
                                <h4 className=" text-[32px] font-[600]  ">
                                    Müştəri rəyləri
                                </h4>
                                <p className="text-[20px] font-[400] text-[#2D2D2D] w-[324px] mt-4">
                                    Lorem Ipsum Dolor Sit Amet Consectetur.
                                    Magna Tellus Nibh Lectus Congue Amet.{' '}
                                </p>
                            </div>
                        </div>
                        <Rewue_swipper />
                        <div className="mx-[33x] mt-[120px] h-[323px] flex items-center overflow-hidden rounded-lg relative mb-[111px]">
                            <div className=" absolute w-full h-full top-0 bg-black bg-opacity-30 z-50 pl-[30px] text-white">
                                <h6 className="mt-[17px] text-[12px] font-[400]">
                                    03.08.25-ə qədər
                                </h6>
                                <h2 className="mt-[22px] text-[20px] font-[600] w-[322px]">
                                    Hər həftə sonları bütün xidmətlərimizə 15%
                                    endirim tətbiq olunur
                                </h2>
                                <p className="mt-[12px] text-[14px] font-[500] w-[322px]">
                                    Bütün  xidmətlərimizdə 15%-dək endirimdən
                                    yararlanın. Sürətli və təhlükəsiz daşınma
                                    ilə yükləriniz zamanında təyinat nöqtəsinə
                                    çatdırılsın.
                                </p>
                                <button className="w-[155px] h-[45px] text-[18px] font-[600] bg-[#FFCC4D] rounded-lg flex flex-row justify-center items-center gap-[6px] mt-[26px]">
                                    <Image
                                        src={phone_icaon}
                                        alt="phone_icaon"
                                    />
                                    166
                                </button>
                            </div>
                            <Image
                                src={HTRaCK_img}
                                alt="HTRaCK_img"
                                className="h-full"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="px-[108px] mt-[32px] flex flex-row gap-6">
                            <div className="w-1/2 bg-[#FFCC4D] rounded-lg h-[408px] overflow-hidden relative ">
                                <h3 className="text-right text-[32px] font-[600px] m-[30px]">
                                    Xidmətlərimiz
                                </h3>
                                <Image
                                    src={Track_icaon}
                                    alt="Track_icaon"
                                    className=" absolute bottom-0   left-0"
                                    width={575}
                                    height={338}
                                />
                                <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                    <Image
                                        src={strelka_icaon}
                                        alt="strelka_icaon"
                                    />
                                </div>
                            </div>
                            <div className="w-1/4 bg-[#FFCC4D] rounded-lg h-[408px] overflow-hidden relative ">
                                <h3 className="text-left text-[32px] font-[600px] m-[30px]">
                                    Partnyorlar
                                </h3>

                                <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                    <Image
                                        src={strelka_icaon}
                                        alt="strelka_icaon"
                                    />
                                </div>
                            </div>
                            <div className="h-[408px] flex flex-col gap-6 w-1/4">
                                <div className=" h-1/2 bg-[#FFCC4D] rounded-lg  overflow-hidden relative ">
                                    <h3 className="text-left text-[32px] font-[600px] m-[30px]">
                                        Partnyorlar
                                    </h3>

                                    <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                        <Image
                                            src={strelka_icaon}
                                            alt="strelka_icaon"
                                        />
                                    </div>
                                </div>
                                <div className=" h-1/2 bg-[#FFCC4D] rounded-lg  overflow-hidden relative ">
                                    <h3 className="text-left text-[32px] font-[600px] m-[30px]">
                                        Partnyorlar
                                    </h3>

                                    <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                                        <Image
                                            src={strelka_icaon}
                                            alt="strelka_icaon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[120px] flex flex-row px-[108px]">
                            <h2 className=" text-[48px] font-[600] w-3/5">
                                Bizim Uğur Hekayəmiz
                            </h2>
                            <p className=" w-2/5 fonrt-[400] text-[16px] mt-4">
                                Uzun illərin təcrübəsi ilə müştərilərimizin
                                inamını və etibarını qazanmışıq. Hər bir
                                nailiyyətimiz birgə gördüyümüz işlərin
                                nəticəsidir və bu yolda davam edirik.
                            </p>
                        </div>
                        <div className="mt-[86px] px-[108px] flex flex-row  justify-between">
                            <div className="w-[392px] h-[223px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                                <h3 className="mt-4 text-[#FFCC4D] text-[64px] font-[700]">
                                    600 <span className="text-black">+</span>
                                </h3>
                                <h5 className="text-[20px] font-[600] mt-[13px] text-[#3E3E3E]">
                                    Tərəfdaş
                                </h5>
                                <p className="text-[#98999A] text-[16px] font-[400] w-[328px] text-center mt-[13px]">
                                    Əsas tərəfdaşlarımızla uzunmüddətli və
                                    etibarlı işgüzar münasibətlər qururuq.
                                </p>
                            </div>
                            <div className="w-[392px] h-[223px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                                <h3 className="mt-4 text-[#FFCC4D] text-[64px] font-[700]">
                                    300K <span className="text-black">+</span>
                                </h3>
                                <h5 className="text-[20px] font-[600] mt-[13px] text-[#3E3E3E]">
                                    Müştəri məmnuniyyəti
                                </h5>
                                <p className="text-[#98999A] text-[16px] font-[400] w-[328px] text-center mt-[13px]">
                                    Müştərilərimiz bizdən aldıqları xidmətin
                                    keyfiyyətindən razıdırlar.
                                </p>
                            </div>
                            <div className="w-[392px] h-[223px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                                <h3 className="mt-4 text-[#FFCC4D] text-[64px] font-[700]">
                                    13 il <span className="text-black">+</span>
                                </h3>
                                <h5 className="text-[20px] font-[600] mt-[13px] text-[#3E3E3E]">
                                    Təcrübə
                                </h5>
                                <p className="text-[#98999A] text-[16px] font-[400] w-[328px] text-center mt-[13px]">
                                    Uzun illər ərzində sektorun liderlərindən
                                    biri olaraq fəaliyyət göstəririk.
                                </p>
                            </div>
                        </div>
                        <div className="mt-[67px]">
                            <Partner_swipper />
                        </div>
                        <div className="px-[108px] flex flex-row items-end justify-between">
                            <h4 className=" text-[48px] font-[600] mt-[120px] text-[#001D5B]">
                                Xidmətlər
                            </h4>
                            <div className="flex flex-row  cursor-pointer">
                                <p className="text-[#FFCC4D] text-[20px] font-normal">
                                    Hamısına bax
                                </p>
                                <Image
                                    src={strelka_yellov_icaon}
                                    alt="strelka_yellov_icaon"
                                />
                            </div>
                        </div>

                        <SErvices_swipper />
                        <h4 className="pl-[108px] text-[48px] font-[600] mt-[120px] text-[#001D5B]">
                            Bizim avtopark
                        </h4>
                        <Awtoparck_swipper />
                        <div className="px-[108px] flex flex-row items-end justify-between">
                            <h4 className=" text-[48px] font-[600] mt-[120px] text-[#001D5B]">
                                Mediada Biz
                            </h4>
                            <div className="flex flex-row  cursor-pointer">
                                <p className="text-[#FFCC4D] text-[20px] font-normal">
                                    Hamısına bax
                                </p>
                                <Image
                                    src={strelka_yellov_icaon}
                                    alt="strelka_yellov_icaon"
                                />
                            </div>
                        </div>
                        <div className="w-[86%] h-[306px] relative top-0 mx-[108px] mt-8 overflow-hidden">
                            <div className="bg-black bg-opacity-45 absolute w-full h-full flex items-end rounded-lg z-50 ">
                                <div className="ml-7 mb-8">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <p className="text-white text-[18px] font-[500]">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <button className="bg-[#FFCC4D] text-white rounded-lg w-[136px] h-[40px] flex justify-center items-center mt-4">
                                        Ətraflı oxu
                                    </button>
                                </div>
                            </div>
                            <Image
                                src={students_icaon}
                                alt="students_icaon"
                                className=" absolute top-0 w-full "
                            />
                        </div>
                        <div className="mx-[108px] mt-[24px] flex flex-row justify-between">
                            <div className="w-[392px] h-[379px] bg-[#FAFAFA] rounded-lg flex flex-col  overflow-hidden">
                                <Image src={Hands_img} alt="Hands_img" />
                                <div className="mt-7 ml-7">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <h6 className="text-[22px] font-[600] font-sans ">
                                        Lorem ipsum dolor sit amet consectetur?
                                    </h6>
                                    <p className="text-[16px] font-[400] text-[#989898] mt-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque tur...
                                    </p>
                                </div>
                            </div>
                            <div className="w-[392px] h-[379px] bg-[#FAFAFA] rounded-lg flex flex-col  overflow-hidden">
                                <Image src={Hands_img} alt="Hands_img" />
                                <div className="mt-7 ml-7">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <h6 className="text-[22px] font-[600] font-sans ">
                                        Lorem ipsum dolor sit amet consectetur?
                                    </h6>
                                    <p className="text-[16px] font-[400] text-[#989898] mt-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque tur...
                                    </p>
                                </div>
                            </div>
                            <div className="w-[392px] h-[379px] bg-[#FAFAFA] rounded-lg flex flex-col  overflow-hidden">
                                <Image src={Hands_img} alt="Hands_img" />
                                <div className="mt-7 ml-7">
                                    <p className="text-[#BFBFBF] text-[14px] font-[400]">
                                        17 June 2021
                                    </p>
                                    <h6 className="text-[22px] font-[600] font-sans ">
                                        Lorem ipsum dolor sit amet consectetur?
                                    </h6>
                                    <p className="text-[16px] font-[400] text-[#989898] mt-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Est vestibulum ornare viverra vestibulum
                                        neque tur...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[120px] flex flex-row justify-between px-[108px] items-center">
                            <div>
                                <h4 className=" text-[48px] font-[600]  ">
                                    Müştəri rəyləri
                                </h4>
                                <p className="text-[20px] font-[400] text-[#2D2D2D] w-[496px] mt-4">
                                    Lorem Ipsum Dolor Sit Amet Consectetur.
                                    Magna Tellus Nibh Lectus Congue Amet.{' '}
                                </p>
                            </div>
                            <div>
                                <h6 className="text-[#5E5E5E] text-[24px] font-[600]">
                                    Total Reviews
                                </h6>
                                <h5 className="text-[#2D2D2D] text-[40px] font-[700] mt-4">
                                    122 K
                                </h5>
                            </div>
                        </div>
                        <Rewue_swipper />
                        <h4 className="pl-[108px] text-[48px] font-[600] mt-[120px] ">
                            Fəaliyyət göstərdiyimiz ölkələr
                        </h4>
                        <div className="flex justify-center mt-[100px]">
                            <Image src={Map} alt="Map" />
                        </div>
                        <div className="mx-[108px] mt-[120px] h-[378px] flex items-center overflow-hidden rounded-lg relative mb-[111px]">
                            <div className=" absolute w-full h-full top-0 bg-black bg-opacity-30 z-50 pl-[55px] text-white">
                                <h6 className="mt-[30px] text-[14px] font-[400]">
                                    03.08.25-ə qədər
                                </h6>
                                <h2 className="mt-[22px] text-[40px] font-[600] w-[644px] leading-[50px]">
                                    Hər həftə sonları bütün xidmətlərimizə 15%
                                    endirim tətbiq olunur
                                </h2>
                                <p className="mt-[12px] text-[16px] font-[500] w-[860px]">
                                    Bütün  xidmətlərimizdə 15%-dək endirimdən
                                    yararlanın. Sürətli və təhlükəsiz daşınma
                                    ilə yükləriniz zamanında təyinat nöqtəsinə
                                    çatdırılsın.
                                </p>
                                <button className="w-[155px] h-[45px] text-[18px] font-[600] bg-[#FFCC4D] rounded-lg flex flex-row justify-center items-center gap-[6px] mt-[26px]">
                                    <Image
                                        src={phone_icaon}
                                        alt="phone_icaon"
                                    />
                                    166
                                </button>
                            </div>
                            <Image src={Track3_icaon} alt="Track3_icaon" />
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

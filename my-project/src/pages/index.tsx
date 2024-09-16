import Image from 'next/image';
import localFont from 'next/font/local';
import Header from '@/components/Header';

import Track_icaon from '../../public/svg/track.svg';
import strelka_icaon from '../../public/svg/strelka.svg';
import Hands_img from '../../public/Images/image.png';
import MySwiper from '@/components/Swipper_city';
import Partner_swipper from '@/components/Swipper_Partners';
import SErvices_swipper from '@/components/services_swipper';
import Awtoparck_swipper from '@/components/avtoPack_swipper';
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <h1 className="mt-[38px] ml-[108px] font-[700] text-[48px]  leading-[60.24px]">
                    Peşəkar komandamız və innovativ həllərimiz ilə <br /> yük
                    daşımalarınızı daha{' '}
                    <span className="text-[#FFCC4D]">sürətli </span>
                    və <span className="text-[#FFCC4D]">effektiv</span> <br />
                    şəkildə həyata keçiririk.
                </h1>
                <MySwiper />
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
                            <Image src={strelka_icaon} alt="strelka_icaon" />
                        </div>
                    </div>
                    <div className="w-1/4 bg-[#FFCC4D] rounded-lg h-[408px] overflow-hidden relative ">
                        <h3 className="text-left text-[32px] font-[600px] m-[30px]">
                            Partnyorlar
                        </h3>

                        <div className="bg-white absolute z-40 rounded-lg w-[86px] h-[36px] bottom-[30px] right-[30px] flex justify-center items-center">
                            <Image src={strelka_icaon} alt="strelka_icaon" />
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
                        Uzun illərin təcrübəsi ilə müştərilərimizin inamını və
                        etibarını qazanmışıq. Hər bir nailiyyətimiz birgə
                        gördüyümüz işlərin nəticəsidir və bu yolda davam edirik.
                    </p>
                </div>
                <div className="mt-[86px] px-[108px] flex flex-row gap-6">
                    <div className="w-[392px] h-[223px] rounded-lg border-[#E4E4E4] border-solid border-[1px] flex flex-col items-center">
                        <h3 className="mt-4 text-[#FFCC4D] text-[64px] font-[700]">
                            600 <span className="text-black">+</span>
                        </h3>
                        <h5 className="text-[20px] font-[600] mt-[13px] text-[#3E3E3E]">
                            Tərəfdaş
                        </h5>
                        <p className="text-[#98999A] text-[16px] font-[400] w-[328px] text-center mt-[13px]">
                            Əsas tərəfdaşlarımızla uzunmüddətli və etibarlı
                            işgüzar münasibətlər qururuq.
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
                            Uzun illər ərzində sektorun liderlərindən biri
                            olaraq fəaliyyət göstəririk.
                        </p>
                    </div>
                </div>
                <div className="mt-[67px]">
                    <Partner_swipper />
                </div>

                <h4 className="pl-[108px] text-[48px] font-[600] mt-[120px] text-[#001D5B]">
                    Xidmətlər
                </h4>
                <SErvices_swipper />
                <h4 className="pl-[108px] text-[48px] font-[600] mt-[120px] text-[#001D5B]">
                    Bizim avtopark
                </h4>
                <Awtoparck_swipper />
                <h4 className="pl-[108px] text-[48px] font-[600] mt-[120px] ">
                    Mediada biz{' '}
                </h4>
                <div className="w-[86%] h-[306px] relative top-0 mx-[108px] mt-8">
                    <div className="bg-black bg-opacity-45 absolute w-full h-full flex items-end rounded-lg ">
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
                    {/* <Image /> */}
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
                                Lorem ipsum dolor sit amet consectetur. Est
                                vestibulum ornare viverra vestibulum neque
                                tur...
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
                                Lorem ipsum dolor sit amet consectetur. Est
                                vestibulum ornare viverra vestibulum neque
                                tur...
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
                                Lorem ipsum dolor sit amet consectetur. Est
                                vestibulum ornare viverra vestibulum neque
                                tur...
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

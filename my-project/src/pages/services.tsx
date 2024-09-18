import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import home_icon from '../../public/svg/home.svg';
import strelka_icon from '../../public/svg/strelka2.svg';
import phone_icon from '../../public/svg/phone_black.svg';
import bunner from '../../public/svg/REklam_bunner.svg';
import Image from 'next/image';
import Services_aside from '@/components/Services_aside';
export default function Services() {
    const [wi, setwi] = useState<boolean>();
    useEffect(() => {
        setwi(window.screen.width < 690);
    }, []);
    return (
        <div>
            <Header />
            {wi ? (
                <main className="mb-[120px]">
                    <div className="max-w-[1224px]  w-full px-[35px] mt-[23px]">
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
                    <div className="px-[35px] mt-7 flex flex-row">
                        <div className="flex flex-col">
                            <div className="flex items-start gap-6 md:flex-row ">
                                <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
                                    <h2 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                                        Transport
                                    </h2>
                                    <div className="flex justify-between gap-5 self-stretch">
                                        <div className="flex rounded-lg bg-[#FFCC4D] w-[95px] h-[36px]  justify-center items-center">
                                            <h6 className="text-[16px]  font-semibold text-white">
                                                Sifariş ver
                                            </h6>
                                        </div>
                                        <button className="min-w-[92px] px-[13px] gap-1.5 rounded-lg border border-solid border-[#F4F4F4] font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[36px]  text-[16px] bg-[#FAFAFA] text-black">
                                            <Image
                                                src={phone_icon}
                                                alt="phone_icon"
                                                className="w-[24px] h-[24px]"
                                            />
                                            166
                                        </button>
                                    </div>
                                    <p className="leading-[26px] text-[16px] w-full font-normal text-[#343434]">
                                        Turizm, iş və digər sahələrdə ən rahat,
                                        müasir standartlara uyğun və operativ
                                        sərnişin daşınma xidmətini 166 Transport
                                        təklif edir. <br />
                                        166 Transport xidməti hazırda ölkənin
                                        Sprinter icarəsi və turların təşkili
                                        üzrə ən qabaqcıl xidmətlərindən biridir.{' '}
                                        <br />
                                        Peşəkar sürücülərimiz tərəfindən
                                        sərnişinlərin bir ünvandan digər ünvana
                                        təhlükəsiz daşınmasını təmin edirik.
                                    </p>
                                </div>

                                {/* <img
                            className="w-[32%] h-[500px] self-center object-contain md:w-full"
                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e7dda247ed1f001bda3560/appSource/images/img_image_12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T123652Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=8b4ae217553d60186a925cc8bd0485dcd7529eb48c4244794b3e055ddcad8f95&amp;X-Amz-SignedHeaders=host"
                            alt="Image Twelve"
                            loading="lazy"
                        /> */}
                            </div>
                            <div className="gap-[10px] mt-[70px] flex flex-col items-start ">
                                <p className="md:text-[22px] text-[24px] font-medium text-cool_gray-900">
                                    Sprinterlərimizin üstünlük və özəllikləri:
                                </p>
                                <div className="grid grid-cols-2 gap-6 self-stretch md:grid-cols-2 sm:grid-cols-1">
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large ">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            WI-FI sisteminin olması
                                        </p>
                                    </div>

                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Powerbankların olması
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Sürət həddinə xüsusi nəzarət (GPS)
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            18-20 nəfərlik olması
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Yumşaq və komfortlu oturacaq
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Kondisioner və monitor
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Masa və işıqlı salon
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Mütəmadi təmizlənən salon
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Baqaj
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[157px] h-[117px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Peşəkar sürücü heyəti
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit gap-[30px]  flex  flex-col  justify-start ml-[35px] mt-[34px]">
                        <p className="md:text-[22px] text-[24px] ml-[35px] font-medium text-cool_gray-900 md:ml-0 w-fit">
                            Sprinterlərdən nə üçün istifadə etmək olar?
                        </p>
                        <div className=" flex  w-[324px] rounded-lg border border-solid border-gray-100_03 px-7 pb-7  sm:px-5">
                            <ul className="list-disc list-inside leading-[26px] text-[16px]  mt-6 font-normal text-neutral-700">
                                <li>Şəhərdaxili sərnişin daşınması </li>
                                <li>
                                    Ailəvi, dostlarla və ya iş yoldaşlarınızla
                                    birgə istirahət üçün
                                </li>
                                <li>Toy, yas və digər mərasimlər üçün </li>
                                <li>
                                    Ölkədaxili işgüzar səfərlər məqsədi ilə
                                    (işçi heyətinin daşınması)
                                </li>
                                <li>
                                    Hava limanından turistlərin istənilən ünvana
                                    çatdırılması 
                                </li>
                                <li>Həftəiçi şirkət işçilərinin daşınması </li>
                                <li>
                                    Məktəblilərin və universitet tələbələrinin
                                    daşınması
                                </li>
                                <li>
                                    Müalicə məqsədilə bölgələrimizə səyahət edən
                                    şəxslər
                                </li>
                                <li>
                                    {' '}
                                    Ölkənin dörd bir yanına səfər təşkil edən
                                    tur agentləri
                                </li>
                                <li>
                                    {' '}
                                    Zavod, fabrik, bank işçilərinin istirahət və
                                    ya iş məqsədilə daşınması
                                </li>
                                <li>
                                    {' '}
                                    Özəl səfərlər üçün sürücü və nəqliyyat
                                    vasitəsinin icarəsi
                                </li>
                            </ul>
                            {/* <p className="leading-[26px] text-[16px] w-[60%] mt-6 font-normal text-neutral-700">
                            <br />
                             <br />
                             <br />
                            Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi
                            heyətinin daşınması) <br />
                            Hava limanından turistlərin istənilən ünvana
                            çatdırılması <br />
                            <br />
                            {' '}
                            <br />
                            {' '}
                            <br />
                            <br />
                            <br />
                           
                        </p> */}
                        </div>
                    </div>
                </main>
            ) : (
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
                    <div className="px-[108px] mt-7 flex flex-row">
                        <Services_aside />
                        <div className="flex flex-col">
                            <div className="flex items-start gap-6 md:flex-row ml-[38px]">
                                <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
                                    <h2 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                                        Transport
                                    </h2>
                                    <div className="flex justify-between gap-5 self-stretch">
                                        <div className="flex rounded-lg bg-[#FFCC4D] w-[95px] h-[36px]  justify-center items-center">
                                            <h6 className="text-[16px]  font-semibold text-white">
                                                Sifariş ver
                                            </h6>
                                        </div>
                                        <button className="min-w-[92px] px-[13px] gap-1.5 rounded-lg border border-solid border-[#F4F4F4] font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap  h-[36px]  text-[16px] bg-[#FAFAFA] text-black">
                                            <Image
                                                src={phone_icon}
                                                alt="phone_icon"
                                                className="w-[24px] h-[24px]"
                                            />
                                            {/* <img
                                        className="w-[24px] h-[24px]"
                                        src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e7dda247ed1f001bda3560/appSource/images/img_call_black.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T123652Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=b2e9bcd67431f4555d7a6970f7604cd0804639a19bf8b512646415ca76966f14&amp;X-Amz-SignedHeaders=host"
                                        alt="Call"
                                        loading="lazy"
                                    /> */}
                                            166
                                        </button>
                                    </div>
                                    <p className="leading-[26px] text-[16px] w-full font-normal text-[#343434]">
                                        Turizm, iş və digər sahələrdə ən rahat,
                                        müasir standartlara uyğun və operativ
                                        sərnişin daşınma xidmətini 166 Transport
                                        təklif edir. <br />
                                        166 Transport xidməti hazırda ölkənin
                                        Sprinter icarəsi və turların təşkili
                                        üzrə ən qabaqcıl xidmətlərindən biridir.{' '}
                                        <br />
                                        Peşəkar sürücülərimiz tərəfindən
                                        sərnişinlərin bir ünvandan digər ünvana
                                        təhlükəsiz daşınmasını təmin edirik.
                                    </p>
                                </div>
                                <Image
                                    src={bunner}
                                    alt="bunner"
                                    className="w-[289px] h-[500px]  object-contain "
                                />
                                {/* <img
                            className="w-[32%] h-[500px] self-center object-contain md:w-full"
                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e7dda247ed1f001bda3560/appSource/images/img_image_12.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T123652Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=8b4ae217553d60186a925cc8bd0485dcd7529eb48c4244794b3e055ddcad8f95&amp;X-Amz-SignedHeaders=host"
                            alt="Image Twelve"
                            loading="lazy"
                        /> */}
                            </div>
                            <div className="gap-[30px] mt-[70px] flex flex-col items-start ml-[38px]">
                                <p className="md:text-[22px] text-[24px] font-medium text-cool_gray-900">
                                    Sprinterlərimizin üstünlük və özəllikləri:
                                </p>
                                <div className="grid grid-cols-4 gap-6 self-stretch md:grid-cols-4 sm:grid-cols-1">
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large ">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            WI-FI sisteminin olması
                                        </p>
                                    </div>

                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Powerbankların olması
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Sürət həddinə xüsusi nəzarət (GPS)
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            18-20 nəfərlik olması
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Yumşaq və komfortlu oturacaq
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Kondisioner və monitor
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Masa və işıqlı salon
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Mütəmadi təmizlənən salon
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Baqaj
                                        </p>
                                    </div>
                                    <div className="py-[42px] px-[18px] flex w-[208px] h-[138px] items-center justify-center rounded-lg  shadow-custom-shadow-large">
                                        <p className="leading-[26px] text-[16px] flex-1 text-center font-normal text-black">
                                            Peşəkar sürücü heyəti
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit gap-[30px]  flex  flex-col  justify-start ml-[24%] mt-[34px]">
                        <p className="md:text-[22px] text-[24px] ml-72 font-medium text-cool_gray-900 md:ml-0 w-fit">
                            Sprinterlərdən nə üçün istifadə etmək olar?
                        </p>
                        <div className=" flex  w-[936px] rounded-lg border border-solid border-gray-100_03 px-7 pb-7  sm:px-5">
                            <ul className="list-disc list-inside leading-[26px] text-[16px] w-[60%] mt-6 font-normal text-neutral-700">
                                <li>Şəhərdaxili sərnişin daşınması </li>
                                <li>
                                    Ailəvi, dostlarla və ya iş yoldaşlarınızla
                                    birgə istirahət üçün
                                </li>
                                <li>Toy, yas və digər mərasimlər üçün </li>
                                <li>
                                    Ölkədaxili işgüzar səfərlər məqsədi ilə
                                    (işçi heyətinin daşınması)
                                </li>
                                <li>
                                    Hava limanından turistlərin istənilən ünvana
                                    çatdırılması 
                                </li>
                                <li>Həftəiçi şirkət işçilərinin daşınması </li>
                                <li>
                                    Məktəblilərin və universitet tələbələrinin
                                    daşınması
                                </li>
                                <li>
                                    Müalicə məqsədilə bölgələrimizə səyahət edən
                                    şəxslər
                                </li>
                                <li>
                                    {' '}
                                    Ölkənin dörd bir yanına səfər təşkil edən
                                    tur agentləri
                                </li>
                                <li>
                                    {' '}
                                    Zavod, fabrik, bank işçilərinin istirahət və
                                    ya iş məqsədilə daşınması
                                </li>
                                <li>
                                    {' '}
                                    Özəl səfərlər üçün sürücü və nəqliyyat
                                    vasitəsinin icarəsi
                                </li>
                            </ul>
                            {/* <p className="leading-[26px] text-[16px] w-[60%] mt-6 font-normal text-neutral-700">
                            <br />
                             <br />
                             <br />
                            Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi
                            heyətinin daşınması) <br />
                            Hava limanından turistlərin istənilən ünvana
                            çatdırılması <br />
                            <br />
                            {' '}
                            <br />
                            {' '}
                            <br />
                            <br />
                            <br />
                           
                        </p> */}
                        </div>
                    </div>
                </main>
            )}

            <Footer />
        </div>
    );
}

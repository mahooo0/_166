import React, { useEffect, useState } from 'react';
import home_icon from '../../public/svg/home.svg';
import strelka_icon from '../../public/svg/strelka2.svg';
import clock_icon from '../../public/svg/Clock.svg';
import setings_icon from '../../public/svg/settings.svg';
import sale_icon from '../../public/svg/sale.svg';
import truck_icon from '../../public/svg/truck_2d_mini.svg';
import box_img from '../../public/svg/boxses.svg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Rewue_swipper from '@/components/Revwue_swipper';
function ebautus() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Function to update scroll position
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollPosition);
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
                        className="max-w-[1224px] gap-[30px] mx-auto flex  flex-wrap justify-center   !text-primary-400__base_ font-semibold text-[16px] borde-[#F6F8FF]  border-b-2 "
                        role="tab"
                        id="react-tabs-0"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-controls="react-tabs-1"
                        tabIndex={0}
                        data-rttab="true"
                    >
                        <div className="text-[16px] p-2.5 font-semibold text-[#FFCC4D] border-[#FFCC4D] border-b-2">
                            Haqqımızda
                        </div>
                        <div className="text-[16px] p-2.5 font-semibold text-neutral-700">
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
                <div className="mr-2 flex items-start gap-6 px-[108px] mt-8">
                    <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                        <div className="gap-[26px] flex flex-col items-center">
                            <div className="flex items-center gap-3 self-stretch">
                                <div className="w-[8%] h-px bg-[#FFCC4D]" />
                                <h2 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                                    Haqqımızda
                                </h2>
                            </div>
                            <p className="md:text-[22px] text-[24px] font-normal italic text-black w-full ">
                                “166 Yükdaşıma və Logistika – Yükünüzü
                                daşıyırıq”
                            </p>
                        </div>
                        <Image
                            src={box_img}
                            alt="boxses"
                            className="h-[374px] rounded-lg object-cover"
                        />
                        {/* <img
                            className="h-[374px] rounded-lg object-cover"
                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e991bc47ed1f001bee8183/appSource/images/img_image_374x600.png"
                            alt="Image"
                            loading="lazy"
                        /> */}
                    </div>
                    <p className="leading-[26px] text-[16px] w-[50%] mt-6 self-center font-normal text-neutral-600 ">
                        2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə
                        başlayan “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və
                        logistika sahəsi üzrə ölkənin qabaqcıl şirkətlərindən
                        biridir. Yüklərin daşınması yalnız ölkədaxili
                        sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq arenada da
                        həyata keçirilir.Daim müştərilərimizin xidmətində olmaq
                        və operativ xidmət göstərmək məqsədilə 166 qaynar
                        xəttimiz 7/24 ölkənin istənilən nöqtəsindən zəngləri
                        qəbul edir.
                        <br /> Göstərdiyimiz xidmətin müştərilərimizə rahat və
                        əlçatan olması məqsədilə xidmət sahələrimiz genişlənməyə
                        davam edir. Şirkətimiz yükdaşıma sahəsi ilə fəaliyyətə
                        başlasa da, hazırda müxtəlif kompleks xidmətləri
                        – yükdaşıma ve logistika, evakuasiya, işçi qüvvəsi, usta
                        xidməti, anbar xidməti, təmizlik xidməti və xalça
                        yuma xidmətlərini müştərilərinə təqdim
                        edib.Xidmətlərimizin daha əlçatan olması üçün sərfəli
                        qiymət və hər bir bölgəyə xidmət anlayışları ilə
                        çalışırıq.
                        <br />  166 brendi altında fəaliyyət göstərən hər bir
                        xidmətin keyfiyyətinin ölçülməsi bizim üçün olduqca
                        vacibdir. Bu məqsədlə, mütəmadi olaraq müştərilərimizin
                        göstərilən xidmətlər üzrə fikirlərini öyrənir, təklif və
                        iradlarına əsasən xidmət keyfiyyətini daim
                        təkmilləşdiririk. (ISO 9001:2015 - Keyfiyyət İdarəetmə
                        Sistemi, ISO 45001:2018 - Peşə Sağlamlığı və Əməyin
                        Təhlükəsizliyi İdarəetmə Sistemi və ISO 14001:2015 -
                        Ətraf Mühitin İdarəetmə sistemi üzrə beynəlxalq
                        sertifikatları)
                    </p>
                </div>
                <div className="flex flex-row px-[108px] mt-[104px] justify-between">
                    <div className="py-[46px]   w-[48%] bg-[#1D1D1D]  flex flex-col items-start rounded-r-lg text-white  overflow-hidden pr-14 md:p-5">
                        <div className="w-[80%] mb-4 mr-40 flex flex-col gap-8 pl-[108px] md:mr-0 md:w-full">
                            {/* Statistic 1 */}
                            <div className="flex flex-1 flex-col items-start gap-3.5 border-b border-solid border-[#343434] w-[228px] px-2 py-4">
                                <h1 className="text-[36px] font-semibold text-neutral-300-1">
                                    526368+
                                </h1>
                                <p className="text-[16px] font-medium text-neutral-300-1">
                                    Daşınmış ofis və ev
                                </p>
                            </div>
                            {/* Statistic 2 */}
                            <div className="lex flex-1 flex-col items-start gap-3.5 border-b border-solid border-[#343434] w-[228px] px-2 py-4">
                                <h1 className="text-[36px] font-semibold text-neutral-300-1">
                                    2365+
                                </h1>
                                <p className="text-[16px] font-medium text-neutral-300-1">
                                    Təmizlik edilmiş məkan
                                </p>
                            </div>
                            {/* Statistic 3 */}
                            <div className="lex flex-1 flex-col items-start gap-3.5 border-b border-solid border-[#343434] w-[228px] px-2 py-4">
                                <h1 className="text-[36px] font-semibold text-neutral-300-1">
                                    327166+
                                </h1>
                                <p className="text-[16px] font-medium text-neutral-300-1">
                                    Müştəri rəyləri
                                </p>
                            </div>
                            {/* Statistic 4 */}
                            <div className="lex flex-1 flex-col items-start gap-3.5 border-b border-solid border-[#343434] w-[228px] px-2 py-4">
                                <h1 className="text-[36px] font-semibold text-neutral-300-1">
                                    304264+
                                </h1>
                                <p className="text-[16px] font-medium text-neutral-300-1">
                                    Məmnun qalan müştərilər
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" flex flex-col gap-4 ">
                            <div className="flex items-center gap-3">
                                <div className="w-[10%] h-px bg-[#FFCC4D]"></div>
                                <h3 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                                    Missiyamız
                                </h3>
                            </div>
                            <p className="leading-[26px] w-[504px] text-[16px] font-normal text-neutral-600">
                                Missiyamız, müştərilərimizi və partnyorlarımızı
                                dərindən anlamaq, onlara effektiv logistik
                                həlləri yüksək keyfiyyətdə təqdim etmək və eyni
                                zamanda əməkdaşlarımızın şəxsi inkişafı və
                                motivasiyasını üst səviyyədə tutmaqdır.
                            </p>
                            <div className="gap-[26px] ml-[534px] grid grid-cols-2 self-stretch md:ml-0 md:grid-cols-2 text-center mt-[28px]">
                                <div className="p-[46px] flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-200_02 bg-white-a700_4c md:p-5">
                                    {/* <img
                                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e991bc47ed1f001bee8183/appSource/images/img_ph_timer.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T152512Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=0b274a12ca8ab38c9f4ad7141e372cd66228e4e61628e2f439a7a9d8cc7f995e&amp;X-Amz-SignedHeaders=host"
                                            alt="Sürətli xidmət"
                                            loading="lazy"
                                        /> */}
                                    <Image src={clock_icon} alt="Clock" />
                                    <p className="text-[18px] font-medium text-cool_gray-900">
                                        Sürətli xidmət
                                    </p>
                                </div>
                                <div className="p-[46px] flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-200_02 bg-white-a700_4c md:p-5">
                                    {/* <img
                                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e991bc47ed1f001bee8183/appSource/images/img_ph_timer.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T152512Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=0b274a12ca8ab38c9f4ad7141e372cd66228e4e61628e2f439a7a9d8cc7f995e&amp;X-Amz-SignedHeaders=host"
                                            alt="Sərfəli qiymət"
                                            loading="lazy"
                                        /> */}
                                    <Image src={sale_icon} alt="Sale" />
                                    <p className="text-[18px] font-medium text-cool_gray-900">
                                        Sərfəli qiymət
                                    </p>
                                </div>
                                <div className="p-[46px] flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-200_02 bg-white-a700_4c md:p-5">
                                    {/* <img
                                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e991bc47ed1f001bee8183/appSource/images/img_ph_timer.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T152512Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=0b274a12ca8ab38c9f4ad7141e372cd66228e4e61628e2f439a7a9d8cc7f995e&amp;X-Amz-SignedHeaders=host"
                                            alt="Kompleks həllər"
                                            loading="lazy"
                                        /> */}
                                    <Image src={setings_icon} alt="settings" />
                                    <p className="text-[18px] font-medium text-cool_gray-900">
                                        Kompleks həllər
                                    </p>
                                </div>
                                <div className="p-[46px] flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-200_02 bg-white-a700_4c md:p-5">
                                    {/* <img
                                            src="https://dhws-production.s3.ap-south-1.amazonaws.com/6692c762f6614e0023319ddd/6692c7c835307b001ba5bfb3/66e991bc47ed1f001bee8183/appSource/images/img_ph_timer.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240917%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240917T152512Z&amp;X-Amz-Expires=25200&amp;X-Amz-Signature=0b274a12ca8ab38c9f4ad7141e372cd66228e4e61628e2f439a7a9d8cc7f995e&amp;X-Amz-SignedHeaders=host"
                                            alt="Nəqliyyat infrastrukturunun inkişafı"
                                            loading="lazy"
                                        /> */}
                                    <Image src={truck_icon} alt="truck" />

                                    <p className="text-[18px] font-medium text-cool_gray-900">
                                        Nəqliyyat infrastrukturunun inkişafı
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[120px] flex flex-row items-center self-stretch">
                    <div className="max-w-[1230px] mx-auto flex w-full flex-col gap-12 md:px-5">
                        <div className="flex items-center gap-3">
                            <div className="w-[4%] h-px bg-[#FFCC4D]" />
                            <h2 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                                Biz necə işləyirik?
                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full flex flex-row">
                                <div className="w-2/5"></div>
                                <div className="w-1/5 flex flex-col justify-center items-center">
                                    <div
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`w-[8px] h-[180px] rounded-t-lg  ${
                                            scrollPosition < 1456 &&
                                            scrollPosition < 1656
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#F2F2F2]'
                                        } `}
                                    ></div>
                                </div>
                                <div className="w-2/5 flex flex-col items-start">
                                    <h5
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                                            scrollPosition < 1456 &&
                                            scrollPosition < 1656
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#D7D7D7]'
                                        }`}
                                    >
                                        1
                                    </h5>
                                    <h6 className="mt-[18px] text-[18px] font-semibold">
                                        166-ya zəng etməklə sifariş verirsiniz
                                    </h6>
                                    <p className="text-4 mt-[10px] font-normal">
                                        Birbaşa 166-ya zəng edə və ya sayt
                                        vasitəsilə “Sizə zəng”-dən istifadə
                                        etməklə biz əlaqə saxlaya bilərik 166 və
                                        ya
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="w-2/5 flex flex-col items-end text-end">
                                    <h5
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                                            scrollPosition < 1656 &&
                                            scrollPosition > 1456
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#D7D7D7]'
                                        }`}
                                    >
                                        2
                                    </h5>
                                    <h6 className="mt-[18px] text-[18px] font-semibold">
                                        Operatorlarımız sifarişlərinizi qəbul
                                        edir{' '}
                                    </h6>
                                    <p className="text-4 mt-[10px] font-normal">
                                        Operatorumuz sizə xidmətlə bağlı
                                        məlumatları verir, ödəniş üsulu və
                                        şərtlərlə bağlı məlumatlandırır.
                                    </p>
                                </div>
                                <div className="w-1/5 flex flex-col justify-center items-center">
                                    <div
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`w-[8px] h-[180px]  ${
                                            scrollPosition < 1656 &&
                                            scrollPosition > 1456
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#F2F2F2]'
                                        } `}
                                    ></div>
                                </div>
                                <div className="w-2/5"></div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="w-2/5"></div>
                                <div className="w-1/5 flex flex-col justify-center items-center">
                                    <div
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`w-[8px] h-[180px]  ${
                                            scrollPosition < 1805 &&
                                            scrollPosition > 1656
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#F2F2F2]'
                                        } `}
                                    ></div>
                                </div>
                                <div className="w-2/5 flex flex-col items-start">
                                    <h5
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                                            scrollPosition < 1805 &&
                                            scrollPosition > 1656
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#D7D7D7]'
                                        }`}
                                    >
                                        3
                                    </h5>
                                    <h6 className="mt-[18px] text-[18px] font-semibold">
                                        Əməkdaşlarımız sifariçşi yerinə yetirir
                                    </h6>
                                    <p className="text-4 mt-[10px] font-normal">
                                        Əməkdaşlarımız təyin olunan ünvanda
                                        arzuladığınız xidmət üzrə sizin
                                        sifarişinizi yerinə yetirir
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="w-2/5 flex flex-col items-end text-end">
                                    <h5
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                                            scrollPosition < 1970 &&
                                            scrollPosition > 1805
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#D7D7D7]'
                                        }`}
                                    >
                                        4
                                    </h5>
                                    <h6 className="mt-[18px] text-[18px] font-semibold">
                                        Sifariş tamamlanır
                                    </h6>
                                    <p className="text-4 mt-[10px] font-normal">
                                        Təyin olunan xidmət üzrə əməkdaşlarımız
                                        sifarişinizi tamamlayır
                                    </p>
                                </div>
                                <div className="w-1/5 flex flex-col justify-center items-center">
                                    <div
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`w-[8px] h-[180px]  ${
                                            scrollPosition < 1970 &&
                                            scrollPosition > 1805
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#F2F2F2]'
                                        } `}
                                    ></div>
                                </div>
                                <div className="w-2/5"></div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="w-2/5"></div>
                                <div className="w-1/5 flex flex-col justify-center items-center">
                                    <div
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`w-[8px] h-[180px]  ${
                                            scrollPosition < 2161 &&
                                            scrollPosition > 1970
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#F2F2F2]'
                                        } `}
                                    ></div>
                                </div>
                                <div className="w-2/5 flex flex-col items-start">
                                    <h5
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                                            scrollPosition < 2161 &&
                                            scrollPosition > 1970
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#D7D7D7]'
                                        }`}
                                    >
                                        5
                                    </h5>
                                    <h6 className="mt-[18px] text-[18px] font-semibold">
                                        Xidmət bitdikdən sonra siz ödəniş
                                        edirsiniz{' '}
                                    </h6>
                                    <p className="text-4 mt-[10px] font-normal">
                                        Ödənişin rahatlığı üçün sizə həm onlayn,
                                        həm də nağd ödəniş imkanları təqdim
                                        edilir.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="w-2/5 flex flex-col items-end text-end">
                                    <h5
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                                            scrollPosition < 2339 &&
                                            scrollPosition > 2161
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#D7D7D7]'
                                        }`}
                                    >
                                        6
                                    </h5>
                                    <h6 className="mt-[18px] text-[18px] font-semibold">
                                        Göstərdiyimiz xidmətin keyfiyyəti
                                        ölçülür
                                    </h6>
                                    <p className="text-4 mt-[10px] font-normal">
                                        Xidmətdən məmnunluğunu ölçmək məqsədilə
                                        müştəri məmmuniyyəti şöbəmiz sizinlə
                                        əlaqə saxlayır.
                                    </p>
                                </div>
                                <div className="w-1/5 flex flex-col justify-center items-center">
                                    <div
                                        style={{
                                            transition: 'background-color 0.4s',
                                        }}
                                        className={`w-[8px] h-[180px]  ${
                                            scrollPosition < 2339 &&
                                            scrollPosition > 2161
                                                ? 'bg-[#FFCC4D]'
                                                : 'bg-[#F2F2F2]'
                                        } `}
                                    ></div>
                                </div>
                                <div className="w-2/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 ml-[108px] mt-[120px]">
                    <div className="w-[4%] h-px bg-[#FFCC4D]" />
                    <h2 className="sm:text-[28px] md:text-[30px] text-[32px] font-semibold text-cool_gray-900">
                        Biz necə işləyirik?
                    </h2>
                </div>
                <Rewue_swipper />
            </main>
            <Footer />
        </div>
    );
}

export default ebautus;

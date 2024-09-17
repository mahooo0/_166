import React, { useState } from 'react';
import strelka_icon from '../../public/svg/strelka2.svg';
import Image from 'next/image';
interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen?: boolean;
    num: number;
    setisOpen: (num: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    content,
    num,
    isOpen = false,
    setisOpen,
}) => {
    const [expanded, setExpanded] = useState(isOpen);

    const toggleAccordion = () => {
        setExpanded(!expanded);
        setisOpen(num);
    };

    return (
        <div className="accordion__item">
            <div className="flex flex-1 flex-col gap-1.5">
                <div className="w-full" role="heading" aria-level={3}>
                    <button
                        id={`accordion__heading-${title}`}
                        aria-disabled={false}
                        aria-expanded={expanded}
                        aria-controls={`accordion__panel-${title}`}
                        className="accordion__button w-full"
                        onClick={toggleAccordion}
                        tabIndex={0}
                        type="button"
                    >
                        <div
                            className="flex items-center justify-between  rounded-lg  w-full p-2"
                            style={!expanded ? {} : { background: '#F3F4F6' }}
                        >
                            <h6 className="text-[16px] font-semibold text-cool_gray-900">
                                {title}
                            </h6>

                            <Image
                                src={strelka_icon}
                                alt="strelka_icon"
                                className="w-[22px] h-[22px]"
                                style={
                                    expanded
                                        ? { transform: 'rotate(4.7281rad)' }
                                        : { transform: 'rotate(1.5708rad)' }
                                }
                            />
                        </div>
                    </button>
                </div>
                <div
                    id={`accordion__panel-${title}`}
                    className="accordion__panel"
                    hidden={!expanded}
                >
                    <div className="gap-[26px] flex flex-col items-end py-2">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Services_aside: React.FC = () => {
    let [show, setshow] = useState<any>(1);
    console.log(show);

    return (
        <div className="w-[250px] self-start ">
            <div className="border-[0.5px] flex flex-col items-start gap-7 rounded-lg border-solid border-gray-100_03 bg-neutral-300-1 px-2.5 py-4">
                <label className="self-stretch rounded-lg px-2 font-semibold flex items-center justify-start cursor-text bg-[#FFCC4D] text-white h-[40px] text-[16px]">
                    Transport
                </label>
                <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                    Logistika
                </h4>
                <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                    Yükdaşıma
                </h4>

                <div className="h-[886px] relative content-end self-stretch md:h-auto flex flex-col gap-[22px]">
                    <AccordionItem
                        setisOpen={setshow}
                        num={1}
                        isOpen={true}
                        title="Xalçayuma"
                        content={
                            <>
                                <p className="leading-[154%] text-[14px] w-[88%] font-medium text-[#8C8C8C] md:w-full pl-[14px]">
                                    Ev heyvanlarının və digər qoxuların aradan
                                    qaldırılması
                                </p>
                                <p className="text-[14px] ml-6 self-start font-medium text-[#8C8C8C] md:ml-0 pl-[14px]">
                                    Korporativ xidmət
                                </p>
                                <p className="leading-[154%] text-[14px] w-[88%] font-medium text-[#8C8C8C] md:w-full pl-[14px]">
                                    Sintefon yorğan, yastıq və örtüklərin
                                    yuyulması
                                </p>
                                <p className="text-[14px] ml-6 self-start font-medium text-[#8C8C8C] md:ml-0 pl-[14px]">
                                    Xüsusi ləkə çıxarma
                                </p>
                                <p className="leading-[154%] text-[14px] w-[88%] font-medium text-[#8C8C8C] md:w-full pl-[14px]">
                                    Ədyal, pled və örtüklərin yuyulması
                                </p>
                                <p className="text-[14px] text-left font-medium text-[#8C8C8C] w-full pl-[14px]">
                                    Xalçaların bərpası - Overlock
                                </p>
                            </>
                        }
                    />
                    <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                        Evakuasiya{' '}
                    </h4>
                    <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                        Anbar xidməti{' '}
                    </h4>
                    <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                        İşçi qüvvəsi xidməti{' '}
                    </h4>
                    <AccordionItem
                        setisOpen={setshow}
                        isOpen={show === 2}
                        num={2}
                        title="Təmizlik xidməti"
                        content={<></>}
                    />
                    <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                        Texnoloji həllər
                    </h4>
                    <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                        HVAC
                    </h4>
                    <AccordionItem
                        setisOpen={setshow}
                        isOpen={show === 3}
                        num={3}
                        title="Usta xidməti"
                        content={<></>}
                    />
                    <AccordionItem
                        setisOpen={setshow}
                        isOpen={show === 4}
                        num={4}
                        title="Sanitariya xidməti"
                        content={<></>}
                    />
                    <h4 className="text-[16px] ml-2 font-semibold  text-cool_gray-900 md:ml-0 pl-[8px]">
                        Karqo xidməti{' '}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Services_aside;

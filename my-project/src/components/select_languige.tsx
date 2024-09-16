import { useState } from 'react';
import Image from 'next/image';

import English_icon from '../../public/svg/English.svg';
import Russia_icon from '../../public/svg/russia.svg';
import Madrid_icon from '../../public/svg/mandrind.svg';

export default function LanguageSelect() {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [show, setshow] = useState(false);
    const options = [
        { label: 'English', icon: English_icon },
        { label: 'Russian', icon: Russia_icon },
        { label: 'Madrid', icon: Madrid_icon },
    ];

    return (
        <div className="relative w-[80px] ">
            {/* Custom dropdown button */}

            <div
                className="flex items-center justify-between bg-none p-2 rounded cursor-pointer"
                onClick={() => setshow((prew) => !prew)}
            >
                <Image
                    src={
                        options?.find(
                            (option) => option.label === selectedLanguage
                        )?.icon
                    }
                    alt={selectedLanguage}
                    width={20}
                    height={20}
                />
                <span className="ml-[6px] text-black text-[14px]">
                    {selectedLanguage.slice(0, 3)}
                </span>
                <div
                    style={show ? { transform: 'rotate(3.142rad)' } : {}}
                    className="ml-[6px]"
                >
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.75 1.5L5 5.25L1.25 1.5"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {/* Dropdown list */}
            <ul
                className="absolute mt-2 bg-white border border-gray-300 w-[180px] -ml-[100px] rounded shadow-lg"
                style={show ? {} : { display: 'none' }}
            >
                {options.map((option) => (
                    <li
                        key={option.label}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSelectedLanguage(option.label);
                            setshow(false);
                        }}
                    >
                        <Image
                            src={option.icon}
                            alt={option.label}
                            width={20}
                            height={20}
                        />
                        <span className="ml-2 text-black text-[14px]">
                            {option.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

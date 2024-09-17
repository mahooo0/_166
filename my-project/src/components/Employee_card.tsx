import React, { useState } from 'react';
import bg_icon from '../../public/svg/employebg.svg';
import bg_icon_color from '../../public/svg/employee_bg_yellov.svg';
import employe from '../../public/svg/employe.svg';
import Image from 'next/image';

function Employee_card() {
    let [ison, setison] = useState<boolean>(false);
    return (
        <div>
            <div
                className="flex w-[430px] flex-col items-center gap-3.5"
                onMouseEnter={() => setison(true)}
                onMouseLeave={() => setison(false)}
            >
                <div className="h-[430px] relative self-stretch rounded-lg border border-solid border-neutral-300-0 bg-neutral-300-1">
                    <Image
                        style={
                            ison
                                ? { transform: 'rotate(180deg) scaleX(-1)' }
                                : {}
                        }
                        className="top-[78px] absolute right-0 m-auto object-contain"
                        src={ison ? bg_icon_color : bg_icon}
                        alt="Image One"
                        loading="lazy"
                    />
                    <Image
                        src={employe}
                        className="right-[15%] w-[74%] h-[408px] absolute bottom-0 m-auto object-contain"
                        alt="Image "
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
                    <p className="text-[20px]  text-black font-[500]">
                        Samida Qəniyeva
                    </p>
                    <p className="text-[16px] font-normal text-[#4C4C4C]">
                        Korporativ satış şöbəsinin rəhbəri
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Employee_card;

"use client"
import { useState } from 'react';
import { Service } from "@/type_definitions/dbdatas";
import Link from "next/link";

interface CollapsableProps {
    locale: "en" | "nl";
    service: Service;
    translations:any;
}

const Collapsable: React.FC<CollapsableProps> = ({ locale,service,translations }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            className={`flex ${collapsed ? 'h-[350px]' : 'h-auto'} duration-500 items-center rounded-xl flex-col gap-y-4 p-7 bg-white shadow-serviceCardShadow hover:shadow-serviceCardShadowHover`}
        >
            <Link href={''} className={`flex  justify-center items-center`} onClick={toggleCollapse}>
                <img className={`w-24 h-24 `} src={service.image} />
            </Link>
            <h4 className={`text-center font-bold mt-3 text-nowrap`}>{service.title[locale]}</h4>
            <p className={`text-center max-w-[30ch] text-textGray`}>
                {collapsed
                    ? `${service.description[locale].slice(0, 75)}...` // Display a limited portion
                    : service.description[locale] // Display the full text when expanded
                }
            </p>
            <button className={`text-mainPurple font-[500]`} onClick={toggleCollapse}>
                {collapsed ? translations["read_more"] : translations["read_less"]}
            </button>
        </div>
    );
};

export default Collapsable;
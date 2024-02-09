'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import dutchFlag from '@/assets/dutchFlag.png'
import usaFlag from '@/assets/usaFlag.png'
import {useState} from "react";

const langArray = [
    {
        id:0,
        src:dutchFlag,
        value:"nl",
        title:"Dutch"
    } ,
    {
        id:1,
        src:usaFlag,
        value: "en",
        title:"English"
    }
];
export default function LanguageChanger({locale}:any) {
    const [clicked,setClicked] = useState<boolean>(false);

    const { i18n } = useTranslation();
    const currentLocale = locale;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e:any) => {
        const newLocale = e;

        // set cookie for next-i18n-router
        // const days = 30;
        // const date = new Date();
        // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        // const expires = '; expires=' + date.toUTCString();
        // document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    const langComponent = langArray.map((lang) => (
        <div onClick={() => handleChange(lang.value)} className={`cursor-pointer bg-white flex gap-2 items-center p-1  pr-10 font-bold hover:bg-gray-100`} key={lang.id}>
            <Image className={`w-[32px] h-[17px]`} src={lang.src} alt={lang.title} />
            <p className={`text-mainPurple`}>{lang.title}</p>
        </div>
    ))

    const defaultFlag = langArray.find((lang) => lang.value === currentLocale)

    return (
        <div className={`relative flex flex-col gap-y-4`}>
            <div onClick={() => setClicked((prev:boolean) => !prev)} className={`w-[32px] h-[17px] cursor-pointer`}>
                <Image className={`w-[32px] h-[17px]`} src={defaultFlag?.src} alt={defaultFlag?.title} />
            </div>
            {clicked && (
                <div className={`absolute rounded-xl  top-12 z-[9999] left-[-30px] shadow-navBoxShadow`}>
                    {langComponent}
                </div>
            )}

        </div>
    );
}
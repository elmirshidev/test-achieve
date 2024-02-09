"use client"
import Link from 'next/link'
import React from 'react'
import './Nav.css'
import { headers } from "next/headers";
import initTranslations from '@/app/i18n'
import {usePathname} from "next/navigation";
type Props = {}
export default function Nav({locale,resources}:any) {
    const translationObject = resources[locale].navbar;
    const dutch = resources.nl.navbar;
    const pathname = usePathname();
    const slugify = (text:string) => {
        return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    const navdata = [
        {
            id:0,
            value: translationObject["home"],
            slug: '/',
            links:[],
        },
        {
            id:1,
            value: translationObject["about_us"],
            slug: slugify(dutch["about_us"]),
            links:[],
        },
        {
            id:2,
            value: translationObject["services"] ,
            slug: slugify(dutch["services"]),
            links:[],
        },
        {
            id:3,
            value: translationObject["cases"] ,
            slug: slugify(dutch["cases"]),
            links:[],
        },
        {
            id:4,
            value:translationObject["prices"] ,
            slug: slugify(dutch["prices"]),
            links:[],
        },
        {
            id:5,
            value:translationObject["career"],
            slug: slugify(dutch["career"]),
            links:[],
        },
        {
            id:6,
            value:translationObject["contact"],
            slug: slugify(dutch["contact"]),
            links:[],
        },
    ]
    // we should check if the current page is the same as the link, if so, we should add a class to the link
    // we should also check if the current page is the same as the link, if so, we should add a class to the link
    // maybe regex can help us with this
    const currentPath = pathname.split('/');
    let activePath = '';
    if(currentPath[1] === 'en'){
        activePath = currentPath[2] || '/';
    } else {
        activePath = currentPath[1] || '/';
    }

    const listElements = navdata.map((item: any) => (
        <li className='NavLi  relative ' key={item.id}>
            <Link className={`${activePath === item.slug ? 'text-mainPurple' : 'text-textBlue'} text-[15px] font-[600] hover:text-mainPurple`} href={locale === 'en' ? `/en/${item.slug}` : item.slug}>
                {item?.value}
            </Link>
            <ul className={`absolute shadow-navBoxShadow bg-white ${item?.links?.length > 0 ? 'border-t-[1px]': ''} border-t-[#eee] !w-[100px] z-50 list-none hidden  opacity-0 duration-300 translate-y-10`}>
                {item.links && item.links.length > 0 && item.links.map((link:any) => (
                    <li key={link._key}>
                        <Link className={`text-textBlue`} href={link.en}>
                            {link.en}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </li>
    ));
    return (
        <nav className={`1200:hidden 2xl:mx-5`}>
            <ul className='flex items-center gap-6 list-none'>
                {listElements}
            </ul>
        </nav>
    )
}
"use client"
import {useEffect} from "react";

export const HeaderScrollAffect = () => {
    useEffect(() => {
        const header = document.querySelector('HEADER');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header?.classList.add('header-scrolled');
            } else {
                header?.classList.remove('header-scrolled');
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    header?.classList.add('header-scrolled');
                } else {
                    header?.classList.remove('header-scrolled');
                }
            });
        }
    }, []);
    return (
        <></>
    )
}
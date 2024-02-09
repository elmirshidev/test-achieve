// import Swiper core and required modules
"use client"
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import {Case, Locale} from '@/type_definitions/dbdatas'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from "react";
import SwiperSlideComponent from "@/components/SwiperSlideComponent";


interface Props {
    cases:Case[];
    locale: Locale;
}

export default function CustomSwiper({cases,locale}:Props) {
    const [activeSlide, setActiveSlide] = useState(0);
    const length = cases.length;
    const onSlideChange = (index:number) => {
        setActiveSlide(index+1)
    }
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination,Autoplay]}
            // spaceBetween={50}
            slidesPerView={2}
            navigation
            autoHeight
            centeredSlides={true}
            loop={true}
            // autoplay={{delay:2000}}
            speed={1000}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            }}
        >
            {cases.map((caseItem:Case) => {
                return(
                    <SwiperSlide key={caseItem._id}>
                        <SwiperSlideComponent locale={locale}  caseItem={caseItem} activeSlide={activeSlide} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};
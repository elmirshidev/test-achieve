"use client"
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import './TestimonialSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CustomerTestimonial, Locale} from "@/type_definitions/dbdatas";
import { FaStar } from "react-icons/fa6";
export default function TestimonialSlider({testimonials,locale}:{testimonials:CustomerTestimonial[],locale:Locale}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const stars = [1,2,3,4,5];
    return (
        <Slider {...settings}>
            {testimonials.map((testimonial: CustomerTestimonial, index: number) => (
                <div className={`w-full h-full`} key={testimonial._id}>
                    <article className={` text-center rounded-[10px] bg-white hover:shadow-serviceCardShadow duration-500 flex flex-col gap-y-3`}>
                        <div className={`p-4 text-[15px] relative`}>
                            <div className={`absolute right-[30px] top-[10px]`}>
                                <svg className={`w-[50px] h-[50px]`} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                     width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                     preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                           fill="#000000" stroke="none">
                                                <path className={`fill-mainPurple`} d="M383 4835 c-182 -49 -320 -189 -368 -372 -22 -85 -22 -1341 0 -1426
                                                    48 -183 189 -324 372 -372 45 -12 130 -15 411 -15 l353 0 -5 -42 c-3 -24 -8
                                                    -81 -12 -128 -20 -275 -108 -539 -237 -705 -128 -166 -321 -271 -567 -305 -90
                                                    -13 -116 -28 -130 -77 -8 -26 -10 -200 -8 -550 l3 -511 24 -26 c34 -36 61 -39
                                                    232 -21 565 59 988 247 1310 582 253 263 416 583 518 1013 68 290 90 504 97
                                                    955 6 400 6 396 -59 428 -36 18 -38 18 -74 0 -61 -29 -63 -39 -63 -323 0 -819
                                                    -116 -1316 -404 -1745 -81 -121 -273 -312 -396 -394 -236 -158 -528 -263 -854
                                                    -306 -61 -8 -116 -15 -123 -15 -10 0 -13 76 -13 399 l0 399 48 7 c115 17 304
                                                    94 409 166 312 215 490 647 496 1206 2 132 2 132 -26 160 l-27 28 -433 5
                                                    c-415 5 -434 6 -478 26 -60 28 -125 93 -153 153 -21 46 -21 51 -21 721 0 670
                                                    0 675 21 721 28 60 93 125 153 153 46 21 49 21 811 21 762 0 765 0 811 -21 60
                                                    -28 125 -93 152 -153 20 -41 22 -69 27 -263 5 -217 5 -218 31 -243 14 -14 41
                                                    -28 61 -31 30 -5 41 -1 69 24 l34 30 3 202 c4 227 -3 274 -53 379 -62 129
                                                    -185 228 -332 266 -82 22 -1530 21 -1610 0z"/>
                                                    <path className={`fill-mainPurple`} d="M3123 4835 c-182 -49 -320 -189 -368 -372 -22 -85 -22 -1341 0 -1426
                                                    48 -183 189 -324 372 -372 45 -12 130 -15 411 -15 l353 0 -5 -42 c-3 -24 -8
                                                    -81 -12 -128 -20 -275 -108 -539 -237 -705 -128 -166 -321 -271 -567 -305 -90
                                                    -13 -116 -28 -130 -77 -8 -26 -10 -200 -8 -550 l3 -511 24 -26 c34 -36 61 -39
                                                    232 -21 565 59 988 247 1310 582 335 349 516 797 596 1478 20 169 32 2010 13
                                                    2098 -39 189 -187 342 -377 392 -82 22 -1530 21 -1610 0z m1317 -571 l0 -386
                                                    34 -34 c46 -46 86 -46 132 0 l34 34 0 387 0 387 33 -7 c94 -20 181 -88 221
                                                    -174 21 -46 21 -51 24 -891 2 -541 -1 -913 -8 -1035 -34 -581 -155 -994 -394
                                                    -1350 -81 -121 -273 -312 -396 -394 -236 -158 -528 -263 -854 -306 -61 -8
                                                    -116 -15 -123 -15 -10 0 -13 76 -13 399 l0 399 48 7 c115 17 304 94 409 166
                                                    312 215 490 647 496 1206 2 132 2 132 -26 160 l-27 28 -433 5 c-415 5 -434 6
                                                    -478 26 -60 28 -125 93 -153 153 -21 45 -21 56 -24 691 -2 448 0 661 8 697 21
                                                    98 96 181 195 215 45 16 109 17 673 18 l622 0 0 -386z"/>
                                                <path className={`fill-mainPurple`} d="M4484 3642 c-52 -41 -55 -109 -8 -153 54 -50 146 -18 160 57 11 58
                                                    -35 114 -96 114 -19 0 -45 -8 -56 -18z"/>
                                                <path className={`fill-mainPurple`} d="M2224 3682 c-52 -41 -55 -109 -8 -153 54 -50 146 -18 160 57 11 58
                                                -35 114 -96 114 -19 0 -45 -8 -56 -18z"/>
                                        </g>
                                    </svg>

                            </div>
                            <strong className={`block text-[22px] font-bold mb-[5px] leading-[26px] text-textBlue`}>{testimonial.fullName}</strong>
                            <span className={`block text-mainPurple`}>{testimonial.profession[locale]}</span>
                            <div className={`mb-[20px] flex items-center gap-[5px] justify-center`}>
                                {stars.map((st,index) => {
                                    return (
                                        <FaStar key={index} color={"#ffe435"} fontWeight={900} size={20} />
                                    )
                                })}
                            </div>
                            <p className={`text-textGray max-w-[70ch] `}>
                                {testimonial.message[locale]}
                            </p>
                        </div>
                    </article>
                </div>
            ))}
        </Slider>
    );
}
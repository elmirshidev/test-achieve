
import {Locale, SiteInfo} from "@/type_definitions/dbdatas";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Underline from "@/components/Underline";
import MenuUnderline from "@/components/Footer/MenuUnderline";
import initTranslations from "@/app/i18n";
import {getSiteInfo} from "@/helpers/api";
export default async function Footer({locale}:{locale:Locale}) {
    const { t } = await initTranslations(locale,["navbar"]);
    const siteInfoArr = await getSiteInfo();
    const siteInfo:SiteInfo = siteInfoArr[0];
    const socials = [
        {
            id:0,
            title: "facebook",
            icon:<FaFacebook className={`group-hover:text-white text-mainPurple text-[14px] text-center leading-[32px]`} />,
            link: siteInfo["facebook"]
        },
        {
            id:1,
            title: "instagram" ,
            icon:<FaInstagram className={`group-hover:text-white text-mainPurple text-[14px] text-center leading-[32px]`} />,
            link: siteInfo["instagram"]
        },
        {
            id:2,
            title: "linkedin" ,
            icon:<FaLinkedin className={`group-hover:text-white text-mainPurple text-[14px] text-center leading-[32px]`} />,
            link: siteInfo["linkedin"]
        },
        {
            id:3,
            title: "youtube",
            icon:<FaYoutube className={`group-hover:text-white text-mainPurple text-[14px] text-center leading-[32px]`} />,
            link: siteInfo["youtube"]
        }
    ]
    const navdata = [
        {
            id:0,
            value: t("home"),
        },
        {
            id:1,
            value: t("about_us"),
        },
        {
            id:2,
            value: t("services") ,
        },
        {
            id:3,
            value: t("cases") ,
        },
        {
            id:4,
            value: t("prices"),
        },
        {
            id:5,
            value: t("career"),
        },
        {
            id:6,
            value: t("contact"),
        },
    ]


    return (
        <footer className={`bg-mainPurple `} style={{backgroundImage: `url('https://res.cloudinary.com/tretrak/image/upload/v1651468026/achieve/bg10_qtoqh2.png')`,backgroundPosition:"50% center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <div className={`py-[70px]`}>
                    <div className={`container1  mx-auto px-4 flex flex-col`}>

                        <div className={`flex flex-col`}>
                            <div className={`800:!flex-col 800:gap-y-12 flex justify-between border-b-[1px] border-[#e1e1f0] mb-[30px] pb-[10px] flex-wrap ml-[-15px] mr-[-15px] items-center`}>

                                <div className={`basis-1/3 flex justify-center items-center`}>
                                        <Link className={`inline-block w-[50%] 1000:!w-[70%]`} href={'/'}>
                                            <img className={`w-full`} src={`https://res.cloudinary.com/tretrak/image/upload/v1652851337/achieve/achieve-logo_njbari.svg`}/>
                                        </Link>
                                </div>


                               <div className={`flex basis-1/3 gap-x-4 items-center justify-center`}>
                                   <div className={`flex justify-center items-center `}>
                                       <Link className={`flex  justify-center items-center`} href={`/contact`}>
                                           <img className={`h-[50px]`} src={`https://storage.googleapis.com/achieve-bucket/72584110-3ccd-430f-86e1-2603d37b5474email.png`}/>
                                       </Link>
                                   </div>
                                   <div className={`flex flex-col gap-y-1 text-white text-[18px]`}>
                                       <p className={`!text-white`}>
                                           <a href={`tel: ${siteInfo["phone"]}`}>{siteInfo["phone"]}</a>
                                       </p>
                                       <p className={`!text-white`}>
                                           <a href={`mailto: ${siteInfo["email"]}`}>{siteInfo["email"]}</a>
                                       </p>
                                   </div>
                               </div>



                                <div className={`flex justify-center basis-1/3 gap-x-4 items-center`}>
                                    <div className={`flex justify-center items-center `}>
                                        <Link className={`flex  justify-center items-center`} href={`/contact`}>
                                            <img className={`h-[50px]`} src={`https://storage.googleapis.com/achieve-bucket/d276071e-71e3-4fea-9602-77f707dde2e6homo.png`}/>
                                        </Link>
                                    </div>
                                    <div className={`flex flex-col gap-y-1 text-white text-[18px]`}>
                                        <p className={`!text-white`}>
                                            <a href={`tel: 31 (0) 85 4016590`}>+31 (0) 85 4016590</a>
                                        </p>
                                        <p className={`!text-white`}>
                                            <a href={`mailto: info@achieve.nl`}>info@achieve.nl</a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className={`flex justify-between 800:flex-col `}>

                                <div className={`basis-1/5`}>
                                    <div className={`text-center mb-[30px]`}>
                                        <p className={`mb-[20px] text-white leading-[24px]`}>
                                            ‘’What the mind can conceive and believe, it can achieve.’’
                                            - Napoleon Hill
                                        </p>
                                        <div className={`flex justify-center items-center`}>
                                            <ul className={`flex gap-x-2`}>
                                                {socials.map((data) => {
                                                    return (
                                                        <li key={data.id} className={``}>
                                                            <a href={data.link} className={`group hover:bg-mainPurple cursor-pointer inline-flex justify-center items-center size-[32px] leading-[32px] text-center rounded-full text-[14px] bg-white duration-500 m-[2px]`} target="_blank">
                                                                {data.icon}
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                  <div className={`flex justify-between basis-[80%] 600:flex-col`}>
                                    <div className={`basis-1/3 flex justify-center`}>
                                        <div className={`mb-[30px]`}>
                                            <div className={`flex flex-col gap-y-1 mb-[30px]`}>
                                                <h5 className={`text-[24px] font-bold pb-[10px] text-white leading-[1.2]`}>Menu</h5>
                                                <MenuUnderline/>
                                            </div>

                                            <div>
                                                <ul>
                                                    {navdata.map((data) => {

                                                        return (
                                                            <li key={data.id}>
                                                                <Link className={`text-white duration-500 py-[5px] inline-block hover:translate-x-[15px]`} href={`/`}>
                                                                    {data.value}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                <div className={`basis-1/3 flex justify-center`}>
                                    <div className={`mb-[30px]`}>
                                        <div className={`flex flex-col gap-y-1 mb-[30px]`}>
                                            <h5 className={`text-[24px] font-bold pb-[10px] text-white leading-[1.2]`}>About us</h5>
                                            <MenuUnderline/>
                                        </div>

                                        <div>
                                            <ul>
                                                {navdata.map((data) => {

                                                    return (
                                                        <li key={data.id}>
                                                            <Link className={`text-white duration-500 py-[5px] inline-block hover:translate-x-[15px]`} href={`/`}>
                                                                {data.value}
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className={`basis-1/3 flex justify-center`}>
                                    <div className={`mb-[30px]`}>
                                        <div className={`flex flex-col gap-y-1 mb-[30px]`}>
                                            <h5 className={`text-[24px] font-bold pb-[10px] text-white leading-[1.2] text-nowrap`}>Over Achieve</h5>
                                            <MenuUnderline/>
                                        </div>

                                        <div>
                                            <ul>
                                                {navdata.map((data) => {

                                                    return (
                                                        <li key={data.id}>
                                                            <Link className={`text-white duration-500 py-[5px] inline-block hover:translate-x-[15px]`} href={`/`}>
                                                                {data.value}
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                              </div>



                            </div>
                        </div>

                    </div>
                </div>

                <div className={`bg-[#b3a1ff] flex justify-center items-center text-[15px] py-[15px]`}>
                    <span className={`text-white`}>
                        Copyright © 2024 Achieve.
                        All rights reserved.
                    </span>
                </div>

        </footer>
    )
}
import LottieHelper from "@/helpers/LottieHelper";
import HomePageJson from "@/lottie/jsons/HomePage.json"
import TypeWriter from "@/components/TypeWriter";
import './SectionOne.css'
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
export default async function SectionOne({font,locale,resources}:any) {
    const translationsObject = resources[locale].homepage;
    return (
    <section className={`bg-mainbg pt-20`} style={{backgroundImage: `url('https://res.cloudinary.com/tretrak/image/upload/v1651464605/achieve/pic2_eyr13d.png')`,backgroundPosition:"0 100%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} >
            <div className={`absolute left-24 bottom-12`}>
                <img src={'https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic3_dcdbdc.png'}/>
            </div>
            <div className={`absolute right-0 `}>
                <img src={'https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic4_x8fin9.png'} />
            </div>
            <div className={`Shape1 absolute z-0  opacity-50 left-[5%]`}>
                <img src={'https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape21_l90uqd.png'}/>
            </div>
            <div className={`Shape2 absolute z-0 opacity-50 left-[10%] bottom-[20%]`}>
                <img src={'https://hepro-react.envytheme.com/images/shape/shape22.svg'}/>
            </div>
            <div className={`Shape3 absolute z-0 opacity-50 left-[25%] top-[25%]`}>
                <img src={'https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape23_ygdtix.png'}/>
            </div>
            <div className={`Shape4 absolute z-0 opacity-50 left-[30%] top-[2%]`}>
                <img src={'https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape25_k6db7h.png'}/>
            </div>
            <div className={`pt-[100px] z-50 flex justify-between items-center 1000:gap-8 800:flex-col 800:!gap-0`}>
                <div className={`flex flex-col z-50 gap-6 max-w-[60ch] 1200:max-w-[40ch] 800:!max-w-[70ch]`}>
                    <h1 className={`${font.className}`}>
                        {translationsObject["main_header_one"]} <span className={`h1 text-mainPurple`}>{translationsObject["main_header_two"]}</span>&nbsp;
                        {translationsObject["main_header_three"]} <span className={`h1 typing-text text-mainPurple`}><br className={`800:hidden`}/>
                        <TypeWriter text={translationsObject["main_header_four"]}/></span>
                    </h1>

                    <p className={`text-textGray`}>
                        {translationsObject["main_paragraph"]}
                    </p>

                    <Link className={`ServicesLink z-30 w-[170px] inline-flex gap-3 items-center text-[15px] font-[500] duration-300`} href={'/'}>
                        <div className={`bg-textBlue h-[45px] w-[45px] rounded-full flex justify-center items-center duration-300`}>
                            <FaAngleRight className={`i`} fontSize={24} fontWeight={"bold"} color={'white'}/>
                        </div>
                        <p>{translationsObject["main_button"]}</p>
                    </Link>
                </div>

                <div className={`w-[90%] md:w-[100%] lg:w-[50%] xl:w-[45%] 2xl:w-[45%] 800:!w-[80%]`}>
                    <LottieHelper jsonFile={HomePageJson} />
                </div>
            </div>
    </section>
    )
}
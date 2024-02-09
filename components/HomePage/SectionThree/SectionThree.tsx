import LottieHelper from "@/helpers/LottieHelper";
import WeAchieve from "@/lottie/jsons/WeAchieve.json"
import {FaAngleRight} from "react-icons/fa6";
import Link from "next/link";
import initTranslations from "@/app/i18n";
const JSONlink = 'https://lottie.host/a82acd8d-37b5-4e5b-bcd0-b4e731c1762a/smgOQto3Ro.json'

export default async function SectionThree({font,locale}:any) {
    const {t} = await initTranslations(locale,['homepage']);
    return (
        <section className={`flex 800:flex-col items-center gap-y-4`}>
            <div className={`w-[90%] md:w-[100%] lg:w-[50%] xl:w-[45%] 2xl:w-[45%] 800:!w-[80%]`}>
                <LottieHelper jsonFile={WeAchieve}/>
            </div>
            <div className={`flex flex-col gap-y-4 max-w-[53ch] 1200:max-w-[40ch] 800:!max-w-[70ch]`}>
                <h2 className={`${font.className} 600:text-center`}>
                    {t("we_achieve_header")}
                </h2>
                <p className={`${font.className} text-textGray`}>
                    {t("we_achieve_paragraph")}
                </p>
                <Link className={`ServicesLink w-[170px] inline-flex gap-3 items-center text-[15px] font-[500] duration-300`} href={'/'}>
                    <div className={`bg-textBlue h-[45px] w-[45px] rounded-full flex justify-center items-center duration-300`}>
                        <FaAngleRight className={`i`} fontSize={24} fontWeight={"bold"} color={'white'}/>
                    </div>
                    <p className={``}>
                        {t("read_more")}
                    </p>
                </Link>
            </div>
        </section>
    )
}
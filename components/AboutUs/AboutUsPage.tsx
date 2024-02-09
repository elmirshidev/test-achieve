import {AboutUs, Locale} from "@/type_definitions/dbdatas";
import aboutus from "@/lottie/jsons/aboutus.json"
import LottieHelper from "@/helpers/LottieHelper";
import DynamicText from "@/components/DynamicText";
export default function AboutUsPage({locale,data}:{locale:Locale,data:AboutUs}) {

    return (
        <section className={`flex items-center 1000:flex-col pb-[70px]`}>
            <div className={`basis-[50%] mb-[30px]`}>
                <LottieHelper  jsonFile={aboutus} />
            </div>
            <div className={`basis-[50%] flex flex-col gap-y-3`}>
                <div className={`mb-[1.5rem]`}>
                    <h2 className={`600:text-center`}>{data["title"][locale]}</h2>
                </div>
                <div className={`text-textGray`}>
                    <DynamicText htmlString={data["introduction"][locale]}/>
                </div>
            </div>
        </section>
    )
}
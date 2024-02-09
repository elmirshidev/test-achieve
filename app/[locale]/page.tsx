import initTranslations from "@/app/i18n";
import SectionOne from "@/components/HomePage/SectionOne/SectionOne";
import { Source_Sans_3 } from "next/font/google";
import SectionTwo from "@/components/HomePage/SectionTwo/SectionTwo";
import SectionThree from "@/components/HomePage/SectionThree/SectionThree";
import SectionFour from "@/components/HomePage/SectionFour/SectionFour";
import Cases from "@/components/HomePage/Cases/Cases";
import Prices from "@/components/HomePage/PricesComponent/Prices";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import Faq from "@/components/HomePage/FAQs/Faq";
import TextCarousel from "@/components/HomePage/TextCarousel/TextCarousel";
import LastComponent from "@/components/HomePage/LastComponent/LastComponent";

const source_sans_pro = Source_Sans_3({subsets: ["latin"],weight:['400','500','600','700','800','900']});

export default async function Home({ params: { locale } }:any) {
    const {t,resources} = await initTranslations(locale,['homepage']);
    return (
        <div className={`bg-mainbg flex flex-col gap-y-12`}>
           <div className={`container1  mx-auto px-4 bg-mainbg`}>
                <SectionOne font={source_sans_pro} locale={locale} resources={resources}/>
           </div>
            <div className={`container1  mx-auto px-4 bg-mainbg`}>
                <SectionTwo font={source_sans_pro} text={resources[locale].homepage["carausel_header"]}/>
            </div>
            <div className={`container1  mx-auto px-4 bg-mainbg`}>
                <SectionThree font={source_sans_pro} locale={locale}/>
            </div>
            <div className={`container1  mx-auto px-4 bg-mainbg`}>
                <SectionFour font={source_sans_pro} locale={locale}/>
            </div>
            <Cases locale={locale}/>
            <div className={`container1  mx-auto px-4 bg-mainbg`}>
                <Prices font={source_sans_pro} locale={locale}/>
            </div>
            <Testimonials font={source_sans_pro} locale={locale}/>
            <div className={`container1  mx-auto px-4 bg-mainbg`}>
                <Faq locale={locale} font={source_sans_pro}/>
            </div>
            <TextCarousel />
            <LastComponent />
        </div>

    );
}
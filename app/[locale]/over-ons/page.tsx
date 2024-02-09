import Banner from "@/components/Banner";
import {AboutUs, Locale} from "@/type_definitions/dbdatas";
import {getAboutUs} from "@/helpers/api";
import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import TextCarousel from "@/components/HomePage/TextCarousel/TextCarousel";
import Promises from "@/components/AboutUs/Promises";
import MeetTheTeam from "@/components/AboutUs/MeetTheTeam";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import LastComponent from "@/components/HomePage/LastComponent/LastComponent";

export default async function Home({ params: { locale } }:{params:{locale:Locale}}) {
    const aboutUs  = await getAboutUs();
    const aboutUsData:AboutUs = aboutUs[0];

    return (
        <>
            <Banner title={"Over ons"} locale={locale}/>
            <div className={`mt-[100px] flex flex-col`}>

                <div className={`container1  mx-auto px-4 bg-white`}>
                    <AboutUsPage locale={locale} data={aboutUsData}/>
                </div>
                <TextCarousel />
                <div className={`container1  mx-auto px-4 bg-white`}>
                    <Promises data={aboutUsData} locale={locale}/>
                </div>
                <MeetTheTeam data={aboutUsData} locale={locale}/>
                <div className={`pb-[70px] bg-mainbg`}>
                    <Testimonials  locale={locale}/>
                </div>
                <LastComponent />
            </div>
        </>

    )
}
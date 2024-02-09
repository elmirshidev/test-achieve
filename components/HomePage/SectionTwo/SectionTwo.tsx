import CustomCarousel from '@/components/CustomCarousel'
import './SectionTwo.css'
import {getCompanies} from "@/helpers/api";
import Underline from "@/components/Underline";
export default async function SectionTwo({font,text}:any) {
    const companies = await getCompanies();
    return (
        <section className={``}>
                <div className={`flex flex-col gap-y-3 justify-center items-center`}>
                    <h2 className={`${font.className} text-center`}>
                        {text}
                    </h2>
                    <Underline />
                </div>
                <div className={`CrCon mx-auto px-20 mt-5 600:px-0`}>
                    <CustomCarousel companies={companies}/>
                </div>
        </section>
    )
}
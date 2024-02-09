import Underline from "@/components/Underline";
import CustomSwiper from "@/components/CustomSwiper";
import {getCases} from "@/helpers/api";
import {Locale} from "@/type_definitions/dbdatas";

export default async function Cases({locale}:{locale:Locale}) {
    const cases = await getCases();
    return (
        <section className={`flex flex-col gap-y-12 mb-10 relative`}>
            <div className={`flex flex-col gap-y-3 justify-center items-center`}>
                <h2>Case studies</h2>
                <Underline />
            </div>
            <div className={`mx-auto px-4 SliderContainer`}>
                <CustomSwiper locale={locale} cases={cases}/>
            </div>
        </section>
    )
}
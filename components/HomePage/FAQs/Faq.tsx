import Underline from "@/components/Underline";
import PricesTable from "@/components/HomePage/PricesComponent/PricesTable";
import {getFaqCategories, getFaqs} from "@/helpers/api";
import FaqClient from "@/components/HomePage/FAQs/FaqClient";
import {Locale} from "@/type_definitions/dbdatas";

export default async function Faq({font,locale}:{font:any,locale:Locale}) {
    const faqCategories = await getFaqCategories();
    const faqs = await getFaqs();
    return (
        <section className={`flex flex-col gap-y-12 `}>
            <div className={`flex flex-col gap-y-3 justify-center items-center`}>
                <h2 className={font.className}>Frequently Asked Questions</h2>
                <Underline />
            </div>
            <div>
                <FaqClient locale={locale} faqs={faqs} faqCategories={faqCategories} />
            </div>
        </section>
    )
}
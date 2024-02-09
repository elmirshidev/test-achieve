import Underline from "@/components/Underline";
import PricesTable from "@/components/HomePage/PricesComponent/PricesTable";
import TestimonialSlider from "@/components/HomePage/Testimonials/TestimonialSlider";
import {getCustomerTestimonials} from "@/helpers/api";

export default async function Testimonials({locale}:any) {
    const CustomerTestimonials = await getCustomerTestimonials();
    return (
        <section style={{backgroundImage: `url('https://www.achieve.nl/images/background/bg17.png')`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}  className={`flex bg-mainbg flex-col gap-y-12 `}>
                <div className={`flex flex-col gap-y-3 justify-center items-center`}>
                    <h2>Testimonials</h2>
                    <Underline />
                </div>

                <div className={`mx-auto px-4 SliderContainer`}>
                    <TestimonialSlider locale={locale} testimonials={CustomerTestimonials}/>
                </div>
        </section>
    )
}
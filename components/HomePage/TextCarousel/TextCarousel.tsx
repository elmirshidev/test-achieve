import Underline from "@/components/Underline";
import FaqClient from "@/components/HomePage/FAQs/FaqClient";
import CarouselSlider from "@/components/HomePage/TextCarousel/CarouselSlider";
import {getCarouselDataBottom, getCarouselDataTop} from "@/helpers/api";

export default async function TextCarousel() {
    const carouselDataTop = await getCarouselDataTop();
    const carouselDataBottom = await getCarouselDataBottom();
    return (
        <section className={`flex bg-mainbg py-6 flex-col gap-y-1 overflow-hidden mb-[50px]`}>
            <div>
                <CarouselSlider carouselData={carouselDataTop} to={"left"}/>
            </div>
            <div>
                <CarouselSlider carouselData={carouselDataBottom} to={"right"}/>
            </div>
        </section>
    )
}
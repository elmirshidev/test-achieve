import {CarouselData} from "@/type_definitions/dbdatas";
import './CarouselSlider.css';
import Link from "next/link";
export default async function CarouselSlider({carouselData,to}:{carouselData:CarouselData[],to:"left" | "right"}) {
    return (
        <div className={`TextCarouselWrapper ${to === "left" ? 'ToLeft' : 'ToRight'} flex whitespace-nowrap `}>
            {carouselData.map((data) => {
                return (
                    <div key={data._id}>
                        <Link href={`${data.link}`}>
                            <h1 className={`CarouselH1 text-left italic cursor-pointer py-[15px] px-[20px] block !text-[#5fb1ee] hover:!text-mainPurple`}>{data.title.en}</h1>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
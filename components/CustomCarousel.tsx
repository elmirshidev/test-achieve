"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CustomCarousel.css'
import {Company} from "@/type_definitions/dbdatas";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
interface props {
    companies:Company[]
}
export default  function CustomCarousel({companies}:props) {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            // infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={1000}
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            itemClass={"mycarousel"}
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        >
            {companies.map((c) => (
                <div className={`Item flex h-[220px] w-[300px] py-[20px] px-[50px] justify-center items-center`} key={c._id}>
                    <img src={c.image}/>
                </div>
            ))}
        </Carousel>
    )
}
//

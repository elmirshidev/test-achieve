
import Link from "next/link";
import Image from "next/image";
import {Case, Locale} from "@/type_definitions/dbdatas";
import {memo} from "react";
const SwiperSlideComponent = ({caseItem, activeSlide,locale}: { caseItem: Case, activeSlide: number,locale:Locale}) => {
    let active = false;
    // console.log(caseItem._id, activeSlide)
    if(caseItem._id === activeSlide) {
        active = true;
    }
    return (
        <div className={`px-3 !h-[400px]`}>
            <Link className={'w-full h-full rounded-lg relative block'} href={`/cases/${caseItem.slug} `}>
                <div className={`absolute bottom-10 left-10 text-white z-30`}>
                    <h6 className={`text-[13px] font-[500] mb-[10px] duration-700 delay-500 tracking-[4px] ${active ? 'translate-y-[0] opacity-1 visible' : 'translate-y-[-20px] opacity-0 invisible'}`}>Case</h6>
                    <h4 className={`font-[600] duration-700 delay-500 mb-[5px] ${active ? 'translate-y-[0] opacity-1 visible' : 'translate-y-[20px] opacity-0 invisible'}`}>
                        {caseItem.title[locale]}
                    </h4>
                </div>
                <div className={`${active ? 'CaseCarouselImg' : ''} w-full h-full !relative`}>
                    <Image fill alt={caseItem.title[locale]}
                           className={` rounded-lg  w-full h-full object-cover object-center`} src={caseItem.image}/>
                </div>

            </Link>
        </div>
    )
}

export default memo(SwiperSlideComponent);
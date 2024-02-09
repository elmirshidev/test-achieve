"use client"
import {Faq, FaqCategory, Locale} from "@/type_definitions/dbdatas";
import {useState} from "react";
import { GoPlus } from "react-icons/go";
import './FaqClient.css'
export default function FaqClient({faqCategories,faqs,locale}:{faqCategories:FaqCategory[],faqs:Faq[],locale:Locale}) {
    const [selectedCategory, setSelectedCategory] = useState(faqCategories[0]._id);
    const [selectedFaq, setSelectedFaq] = useState(-1);
    function handleClick(id:number) {
        if(id === selectedFaq){
            setSelectedFaq(-1);
        } else {
            setSelectedFaq(id);
        }
    }
    return (
        <div className={`flex flex-col gap-y-4`}>
            <div>
                 <ul className={`text-center`}>
                     {faqCategories.map((fc:FaqCategory) => (
                         <li onClick={() => setSelectedCategory(fc._id)} className={`inline-block cursor-pointer ${selectedCategory === fc._id ? 'bg-mainPurple text-white' : 'bg-white text-[#8d8fb4]'} rounded-[30px] p-4 duration-500 mb-[1rem] ml-2 mr-[-1px] font-[500] capitalize text-[18px]  py-[10px] px-[30px] hover:shadow-serviceCardShadow`} key={fc._id}>
                             {fc.title[locale]}
                         </li>
                     ))}
                </ul>
            </div>
            <div className={`flex flex-col gap-y-4`}>
                {faqs.map((faq: Faq) => {
                    return (
                        +faq.category_id === selectedCategory && (
                            <article onClick={() => handleClick(faq._id)} className={`bg-white  hover:shadow-serviceCardShadow rounded-[8px] duration-500`} key={faq._id}>
                                <div className={`flex p-3 justify-between items-center  rounded-[8px] ${selectedFaq === faq._id ?  'bg-mainPurple text-white' : 'bg-white'}`}>
                                    <h5 className={`font-bold`}>{faq.question[locale]}</h5>
                                    <div className={`${selectedFaq === faq._id ? 'bg-white' : 'bg-mainPurple'}  z-[50] flex justify-center items-center w-[30px] h-[30px] rounded-[6px]`}>
                                        <GoPlus className={`${selectedFaq === faq._id ? 'rotate-45 text-mainPurple' : 'text-white'}  text-[30px] duration-500`} />
                                    </div>
                                </div>
                                <div className={`rounded-[8px] bg-white duration-200 ${selectedFaq === faq._id ? 'py-[25px] px-[30px]' : ''}`}>
                                    {selectedFaq === faq._id && (
                                        <p className={`text-textGray`}>
                                            {faq.answer[locale]}
                                        </p>
                                    )}
                                </div>
                            </article>
                        )
                    );
                })}
            </div>

        </div>
    )
}
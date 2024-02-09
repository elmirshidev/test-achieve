"use client"
import {Price} from "@/type_definitions/dbdatas";
import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import {useState} from "react";
import './PricesTable.css'
export default function PricesTable({pricesObj,pricesNames}:{pricesObj:any,pricesNames:any}) {
    const [selected,setSelected] = useState(pricesNames[0]["en"]);
    const currentServices = pricesObj[selected]["services"];
    function handleChange(name:string) {
        setSelected(name);
    }
    const types = [
        ["b_name","b_price"],
        ["s_name","s_price"],
        ["p_name","p_price"]
    ];
    function displayText(value:string) {
        if(value === "yes"){
            return <FaCheck className={`text-green-600 inline-block text-lg`}/>
        } else if(value === "no"){
            return <HiMiniXMark className={`text-red-600 inline-block text-xl`}/>
        } else {
            return <span className={`text-[#888]`}>{value}</span>;
        }
    }
    const tHeadUi = types.map((t,index) => {
        return (
            <th key={index}>
                <div className={`pt-[25px] pb-[20px]`}>
                    <h3>
                        {pricesObj[selected][t[0]]["en"]}
                    </h3>
                </div>
                <div className={`flex justify-center text-[#505489]  duration-500 pt-2 pb-[5px] font-[600] text-[28px] border-y-[2px] border-dashed border-[#f4f5fe]`}>
                    <sup className={`flex justify-center items-center relative top-[-18px] left-[-5px] text-[18px] font-[500] align-baseline`}>€</sup>
                    {(pricesObj[selected][t[1]]["en"]).split(' ')[0]}&nbsp;
                    <sub className={`relative align-baseline font-[500] text-[14px] bottom-[20px] pr-[5px] flex justify-center items-end text-[#4a6f8a]`}>
                        {(pricesObj[selected][t[1]]["en"]).split(' ')[1]}&nbsp;
                        {(pricesObj[selected][t[1]]["en"]).split(' ')[2]}&nbsp;
                        {(pricesObj[selected][t[1]]["en"]).split(' ')[3]}&nbsp;
                    </sub>
                </div>
            </th>
        )
    })
    return (
        <div >
            <div>
                <ul className={`text-center`}>
                    {pricesNames.map((pname:any,id:number) => (
                        <li onClick={() => handleChange(pname['en'])} className={`inline-block cursor-pointer ${selected === pname['en'] ? 'bg-mainPurple text-white' : 'bg-white text-[#8d8fb4]'} rounded-[30px] p-4 duration-500 mb-[1rem] ml-2 mr-[-1px] font-[500] capitalize text-[18px]  py-[10px] px-[30px] hover:shadow-serviceCardShadow`} key={id}>
                            {pname.en}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`hover:shadow-serviceCardShadow  rounded-[10px] overflow-x-auto w-full block duration-500 bg-white`}>
                <table border={1} className={`w-full text-center bg-white duration-500 border-collapse border-spacing-0`}>
                    <thead>
                        <tr>
                            <th className={``}>
                                <h3>
                                    Choose your package deal
                                </h3>
                            </th>
                            {tHeadUi}
                        </tr>
                    </thead>

                    <tbody>
                        {currentServices.map((service:any,id:number) => {
                            return (
                                <tr key={id}>
                                    <th className={`text-[#505489] `}>
                                        <span>{service.title["en"]}</span>
                                    </th>
                                    <td className={`p-[15px] max-w-[200px] border-t-[1px] border-[#e1e1f0] `}>
                                        {displayText(service["seb"]["en"])}
                                    </td>
                                    <td className={`p-[15px] max-w-[200px] border-t-[1px] border-[#e1e1f0] `}>
                                        {displayText(service["sep"]["en"])}
                                    </td>
                                    <td className={`p-[15px] max-w-[200px] border-t-[1px] border-[#e1e1f0] `}>
                                        {displayText(service["ses"]["en"])}
                                    </td>
                                </tr>
                            )
                        })}
                    <tr>
                        <th></th>
                        {types.map((t,index) => (
                            <td key={index} className={`p-[15px] max-w-[200px] border-t-[1px] border-[#e1e1f0] `}>
                                <div className={`flex justify-center mt-[18px]`}>
                                    <button className={`w-[200px] text-nowrap inline-flex items-center justify-center gap-x-3 font-semibold bg-mainPurple text-white py-3 px-2 rounded-md cursor-pointer hover:scale-105 duration-300 hover:bg-white hover:text-mainPurple hover:border-[1px] hover:border-mainPurple`}>
                                        <div  className={`w-5`}>
                                            <svg className={'Fire'} color={'white'} fill={'white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 preserveAspectRatio="xMidYMin"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
                                            </svg>
                                        </div>
                                        More Information
                                    </button>
                                </div>
                            </td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
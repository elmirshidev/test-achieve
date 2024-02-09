import Underline from "@/components/Underline";
import {AboutUs, Locale} from "@/type_definitions/dbdatas";
import Image from "next/image";

export default async function Promises({data,locale}:{data:AboutUs,locale:Locale}) {
    const promisesArray = [
        {
            id: 1,
            title: data.communicatie.title[locale],
            desc: data.communicatie.communicatieText[locale],
            src: data.communicatie.communicatieIcon,
        },
        {
            id: 2,
            title: data.transparantie.title[locale],
            desc: data.transparantie.transparantieText[locale],
            src: data.transparantie.transparantieIcon,
        },
        {
            id: 3,
            title: data.professionaliteit.title[locale],
            desc: data.professionaliteit.professionaliteitText[locale],
            src: data.professionaliteit.professionaliteitIcon,
        },
        {
            id: 4,
            title: data.passie.title[locale],
            desc: data.passie.passieText[locale],
            src: data.passie.passieIcon,
        }
    ]
    return (
        <section className={`flex flex-col gap-[3rem] justify-center items-center py-[4rem]`}>
            <div className={`mb-[30px] flex justify-center items-center flex-col gap-y-1`}>
                <h2 className={`text-center`}>Our promises to you</h2>
                <Underline />
            </div>

            <div className={`grid grid-cols-4 mx-[-15px] gap-6 1000:grid-cols-2 600:!grid-cols-1`}>
                {promisesArray.map((promise,index) => {
                    return (
                        <div className={`flex flex-col items-center text-center`} key={promise.id}>
                            <div className={`flex justify-center items-center`}>
                                <Image width={64} height={64} alt={promise.title} src={promise.src}/>
                            </div>
                            <h4 className={`font-bold text-center m-5`}>{promise.title}</h4>
                            <p className={`text-center 600:max-w-[40ch]`}>{promise.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
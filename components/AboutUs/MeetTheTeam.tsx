import {AboutUs, Locale, Team} from "@/type_definitions/dbdatas";
import Underline from "@/components/Underline";
import {getTeams} from "@/helpers/api";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
export default async function MeetTheTeam({locale,data}:{locale:Locale,data:AboutUs}) {
    const teamsData = await getTeams();
    return (
        <section className={`bg-mainbg py-[70px]`} style={{backgroundImage: `url('https://www.achieve.nl/en-US/images/background/bg17.png')`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
            <div className={`container1 mx-auto px-4 bg-mainbg`}>
                <div className={`flex justify-center items-center text-center flex-col gap-y-1`}>
                    <h2>
                        {data.teamTitle[locale]}
                    </h2>
                    <Underline />
                </div>
                <p className={`text-center mb-[1rem] mt-3`}>
                    {data.teamDescription[locale]}
                </p>

                <div className={`mt-10 flex flex-wrap gap-[76px] items-center justify-center`}>
                    {teamsData.map((person:Team) => {
                        return (
                            <div key={person._id} className={`mb-[10px]`}>
                                <div className={`p-10 bg-white relative overflow-hidden shadow-serviceCardShadow rounded-[10px]`}>
                                    <img className={`max-w-[235px]`} alt={person.name} src={person.image}/>
                                </div>
                                <div className={`bg-white ml-5 flex flex-col justify-center items-center p-[30px] rounded-[10px] shadow-serviceCardShadow z-[99] mt-[-60px] relative`}>
                                   <div className={`flex flex-col items-center`}>
                                       <h4 className={`font-bold mb-[3px]`}>{person.name}</h4>
                                       <span className={`uppercase text-[13px]`}>{person.profession[locale]}</span>
                                   </div>
                                    <div className={`mt-4 `}>
                                          <a href={`mailto: ${person.email}`} className={`group hover:bg-mainPurple cursor-pointer inline-flex bg-[rgba(137,110,255,.1)] w-[32px] h-[32px] leading-[32px] text-center rounded-[50px] duration-500  justify-center items-center`}>
                                              <FaEnvelope className={`text-[14px] group-hover:text-white text-mainPurple`}/>
                                          </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

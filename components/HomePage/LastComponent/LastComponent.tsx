export default async function LastComponent() {
    return (
        <section className={`py-[3rem]`} style={{backgroundImage: `url('https://www.achieve.nl/images/pattern/basic-pattern.svg')`,backgroundSize:"125px 125px"}}>
            <div className={`container1  mx-auto px-4 `}>
                <div className={`flex justify-between items-center 800:flex-col gap-y-4`}>
                    <h2 className={`800:text-center`}>
                        Curious about what we can do for your company?
                    </h2>
                    <button className={`w-[200px] h-[65px] text-nowrap inline-flex items-center justify-center gap-x-3 font-semibold bg-mainPurple text-white py-3 px-2 rounded-md cursor-pointer hover:scale-105 duration-300 hover:bg-white hover:text-mainPurple hover:border-[1px] hover:border-mainPurple`}>
                        <div className={`w-5`}>
                            <svg className={'Fire'} color={'white'} fill={'white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 preserveAspectRatio="xMidYMin"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
                            </svg>
                        </div>
                        Free intake
                    </button>
                </div>
            </div>
        </section>
    )
}
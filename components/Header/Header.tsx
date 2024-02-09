import Image from 'next/image'
import Link from 'next/link';
import Nav from '../Nav/Nav'
import ChangeLang from "@/components/changeLang";
import './Header.css'
import initTranslations from "@/app/i18n";
import {HeaderScrollAffect} from "@/components/Header/headerScrollAffect";
type Props = {};
const Header = async ({ locale }:any) => {

    const {t , resources} = await initTranslations(locale,['navbar']);

    return (
        <header className='HEADER bg-transparent w-full  py-6 z-[999] absolute top-0 duration-300'>
            <HeaderScrollAffect />
            <div className={`container1 mx-auto flex gap-6 items-center  justify-between px-4`}>
                <Link href={'/'}>
                    <Image width={150} height={50} src="https://www.achieve.nl/images/data/siteInfo/d1f83980-83b8-4ad7-89dc-aab41c5eb74c.webp" alt="Logo" />
                </Link>
                <Nav locale={locale} resources={resources}/>
                <nav className={`flex gap-6 items-center`}>
                    <ChangeLang locale={locale} />
                    <button className={`w-[200px] flex items-center justify-center gap-x-3 font-semibold bg-mainPurple text-white py-3 rounded-md cursor-pointer hover:scale-105 duration-300 hover:bg-white hover:text-mainPurple hover:border-[1px] hover:border-mainPurple`}>
                        <div  className={`w-5`}>
                            <svg className={'Fire'} color={'white'} fill={'white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  preserveAspectRatio="xMidYMin"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M16.5,8c0,1.5-0.5,3.5-2.9,4.3c0.7-1.7,0.8-3.4,0.3-5c-0.7-2.1-3-3.7-4.6-4.6C8.9,2.4,8.2,2.8,8.3,3.4c0,1.1-0.3,2.7-2,4.4  C4.1,10,3,12.3,3,14.5C3,17.4,5,21,9,21c-4-4-1-7.5-1-7.5c0.8,5.9,5,7.5,7,7.5c1.7,0,5-1.2,5-6.4c0-3.1-1.3-5.5-2.4-6.9  C17.3,7.2,16.6,7.5,16.5,8"></path>
                            </svg>
                        </div>
                        {t("consultation")}
                    </button>
                </nav>
            </div>
        </header>
    );
};
export default Header;
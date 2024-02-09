import Underline from "@/components/Underline";
import { getServices } from "@/helpers/api";
import { Service } from "@/type_definitions/dbdatas";
import Collapsable from "@/components/Collapsable";
import initTranslations from "@/app/i18n";

export default async function SectionFour({ font,locale }: any) {
    const { t } = await initTranslations(locale,['homepage']);
    const collapsableTranslationObj = {
        read_more : t("read_more") ,
        read_less : t("read_less")
    }
    const services = await getServices();
    return (
        <section className={`flex flex-col gap-y-12`}>
            <div style={{backgroundImage: `url('https://res.cloudinary.com/tretrak/image/upload/v1651468156/achieve/bg1_st0d5t.png')`,backgroundPosition:"0 100%",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}  className={`absolute w-full h-full left-0`}>

            </div>
            <div className={`flex flex-col gap-y-3 justify-center items-center`}>
                <h2 className={font.className}>Our services</h2>
                <Underline />
            </div>
            <div className={`grid z-50 grid-cols-3 gap-6 1000:grid-cols-2 768:!grid-cols-1`}>
                {services.map((service: Service) => (
                    <Collapsable translations={collapsableTranslationObj} locale={locale} key={service._id} service={service} />
                ))}
            </div>
        </section>
    );
}


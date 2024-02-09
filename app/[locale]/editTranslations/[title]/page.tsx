import fs from "fs";
import EditTranslationsClient from "@/components/editTranslations/editTranslationsClient";

const homeJsonFilePathEn = "locales/en/homepage.json";
const homeJsonFilePathNl = "locales/nl/homepage.json";

// @ts-ignore
let homeJsonFileEn = JSON.parse(fs.readFileSync(homeJsonFilePathEn));
// @ts-ignore
let homeJsonFileNl = JSON.parse(fs.readFileSync(homeJsonFilePathNl));

export default async function Home({params}:any) {
    return (
        <section className={`pt-[100px] p-[20px]`}>
            <EditTranslationsClient filePathEn={homeJsonFilePathEn} filePathNl={homeJsonFilePathNl} title={params.title} JsonEn={homeJsonFileEn} JsonNl={homeJsonFileNl}/>
        </section>
    );
}
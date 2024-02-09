import * as fs from "fs";

import EditTranslationsClient from "@/components/editTranslations/editTranslationsClient";
import Link from "next/link"; // Import your CSS file



export default async function Home() {
    return (
        <section className={`pt-[100px] p-[20px]`}>
            <Link href={`/editTranslations/homepage`}>
                Edit Homepage Translations
            </Link>
        </section>
    );
}

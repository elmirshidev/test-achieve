import {getPrices} from "@/helpers/api";
import {Locale, Price} from "@/type_definitions/dbdatas";
import Underline from "@/components/Underline";
import PricesTable from "@/components/HomePage/PricesComponent/PricesTable";

export default async function Prices({locale,font}:{locale:Locale,font:any}) {
    const prices = await getPrices();
    const names:any = [];
    const obj = {};

    prices.forEach((pr:Price) => {
        names.push(pr.name);
        // @ts-ignore
        obj[pr.name.en] = pr;
    });
    return (
        <section className={`flex flex-col gap-y-12 `}>
            <div className={`flex flex-col gap-y-3 justify-center items-center`}>
                <h2 className={font.className}>Select one of our services</h2>
                <Underline />
            </div>
            <PricesTable pricesObj={obj} pricesNames={names}/>
        </section>
    )
}
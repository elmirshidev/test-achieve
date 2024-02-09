import {NextRequest, NextResponse} from "next/server";
import * as fs from "fs";
import {revalidateTag} from "next/cache";
export async function POST(req:NextRequest) {
    try {
        const body = await req.json();
        const { jsonDataEn,filePathEn,jsonDataNl,filePathNl } = body;
        fs.writeFileSync(filePathEn, JSON.stringify(jsonDataEn, null, 2));
        fs.writeFileSync(filePathNl, JSON.stringify(jsonDataNl, null, 2));
        await revalidateTag("locales");
        return NextResponse.json({ message: "Translations saved successfully" }, { status: 200 });
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
import {NextRequest, NextResponse} from "next/server";
export async function GET(req:NextRequest) {
    try {
        const {searchParams} = new URL(req.url);
        const language = searchParams.get("language");
        const namespace = searchParams.get("namespace");
        const desiredJson = await import(`@/locales/${language}/${namespace}`);
        return NextResponse.json(desiredJson);
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
import {NextRequest, NextResponse} from "next/server";
import revalidationFunction from "@/app/api/actions";
export async function GET(req:NextRequest) {
    try {
        const {searchParams} = new URL(req.url);
        const tag = searchParams.get("tag");
        if(tag){
            await revalidationFunction(tag);
            return NextResponse.json({message:"revalidated"})
        }
        return NextResponse.json({message:"Wrong tag"})
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
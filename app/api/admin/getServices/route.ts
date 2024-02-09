import {NextRequest, NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET(req:NextRequest) {
    try {
        let db = await dbConnect();
        const services = await db.connection.useDb("frontendData").collection("services").find({}).sort({_id:1}).toArray();
        const {searchParams} = new URL(req.url);
        return NextResponse.json(services)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
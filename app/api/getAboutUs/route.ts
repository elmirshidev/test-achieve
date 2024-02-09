import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const aboutUs = await db.connection.useDb("frontendData").collection("aboutUs").find({}).toArray();
        return NextResponse.json(aboutUs)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
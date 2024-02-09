import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const faqCategories = await db.connection.useDb("frontendData").collection("faqCategories").find({}).toArray();
        return NextResponse.json(faqCategories)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
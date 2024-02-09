import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const faqs = await db.connection.useDb("frontendData").collection("faqs").find({}).toArray();
        return NextResponse.json(faqs)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
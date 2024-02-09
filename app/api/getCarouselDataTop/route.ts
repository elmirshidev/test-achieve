import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const carouselDataTop = await db.connection.useDb("frontendData").collection("carouselDataTop").find({}).toArray();
        return NextResponse.json(carouselDataTop)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
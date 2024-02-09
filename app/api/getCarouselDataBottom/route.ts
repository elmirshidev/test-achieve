import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const carouselDataBottom = await db.connection.useDb("frontendData").collection("carouselDataBottom").find({}).toArray();
        return NextResponse.json(carouselDataBottom)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
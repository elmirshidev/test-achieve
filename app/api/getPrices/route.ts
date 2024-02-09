import {NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const prices = await db.connection.useDb("frontendData").collection("prices").find({}).toArray();
        return NextResponse.json(prices)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
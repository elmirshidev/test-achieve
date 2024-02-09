import {NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const siteInfo = await db.connection.useDb("frontendData").collection("siteInfo").find({}).toArray();
        return NextResponse.json(siteInfo)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
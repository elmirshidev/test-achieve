import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const cases = await db.connection.useDb("frontendData").collection("cases").find({}).toArray();
        return NextResponse.json(cases)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
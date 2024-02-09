import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const companies = await db.connection.useDb("frontendData").collection("companies").find({}).toArray();
        return NextResponse.json(companies)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}
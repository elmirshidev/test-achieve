import {NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const teams = await db.connection.useDb("frontendData").collection("teams").find({}).sort({_id:1}).toArray();
        return NextResponse.json(teams)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}